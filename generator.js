// Passage generator.
//
// Builds a fresh practice passage from one scenario in scenarios.js at a chosen
// difficulty level:
//   1 Easy      plain prose, one-line "Dear ... at ..." opener, simple names/numbers
//   2 Moderate  dated letter/memo/email headers, sign-offs, fuller names & numbers
//   3 Hard      letterheads, file numbers, Re: lines, cc lists, dense detail sentences
//   4 Expert    full business headers, unusual names, codes, extensions, many details
//
// Works in the browser (global PassageGen) and in Node (module.exports).
(function (root) {
  'use strict';

  const SCENARIO_LIST = typeof SCENARIOS !== 'undefined'
    ? SCENARIOS
    : (typeof require === 'function' ? require('./scenarios.js') : []);

  const LEVELS = [
    { id: 1, name: 'Easy', blurb: 'Plain prose, short opener' },
    { id: 2, name: 'Moderate', blurb: 'Dated headers, more names and numbers' },
    { id: 3, name: 'Hard', blurb: 'Letterheads, file numbers, dense details' },
    { id: 4, name: 'Expert', blurb: 'Full headers, codes, unusual names' }
  ];

  // Target passage length in words, header included. Long enough that even a
  // fast typist cannot run out of text in five minutes.
  const MIN_WORDS = 470;
  const MAX_WORDS = 620;
  // Detail sentences (dense, data-heavy) added to the body at each level.
  const DETAILS_PER_LEVEL = { 1: 0, 2: 1, 3: 3, 4: 6 };

  // ---------- Name and place pools ----------

  // [name, gender] gender: f / m
  const FIRST = {
    easy: [['Jim', 'm'], ['Laura', 'f'], ['Mark', 'm'], ['Susan', 'f'], ['Dave', 'm'], ['Karen', 'f'], ['Tom', 'm'], ['Lisa', 'f'], ['Paul', 'm'], ['Anne', 'f'], ['Brian', 'm'], ['Carol', 'f'], ['Gary', 'm'], ['Janet', 'f'], ['Kevin', 'm'], ['Linda', 'f'], ['Ryan', 'm'], ['Megan', 'f'], ['Sam', 'm'], ['Emma', 'f'], ['Ben', 'm'], ['Kate', 'f'], ['Mike', 'm'], ['Sarah', 'f'], ['John', 'm'], ['Amy', 'f'], ['Dan', 'm'], ['Jill', 'f'], ['Rob', 'm'], ['Beth', 'f'], ['Neil', 'm'], ['Ruth', 'f'], ['Owen', 'm'], ['Grace', 'f'], ['Adam', 'm'], ['Jane', 'f']],
    mid: [['Daniel', 'm'], ['Stephanie', 'f'], ['Andrew', 'm'], ['Rebecca', 'f'], ['Michael', 'm'], ['Jennifer', 'f'], ['Christopher', 'm'], ['Natalie', 'f'], ['Gregory', 'm'], ['Melissa', 'f'], ['Patrick', 'm'], ['Danielle', 'f'], ['Jonathan', 'm'], ['Caroline', 'f'], ['Matthew', 'm'], ['Victoria', 'f'], ['Nathaniel', 'm'], ['Alexandra', 'f'], ['Benjamin', 'm'], ['Katherine', 'f'], ['Graham', 'm'], ['Isabelle', 'f'], ['Malcolm', 'm'], ['Yvonne', 'f'], ['Russell', 'm'], ['Madeline', 'f'], ['Sebastian', 'm'], ['Eleanor', 'f'], ['Marcus', 'm'], ['Helena', 'f'], ['Douglas', 'm'], ['Fiona', 'f'], ['Raymond', 'm'], ['Priya', 'f'], ['Amrit', 'm'], ['Mei', 'f']],
    hard: [['Siobhan', 'f'], ['Bartholomew', 'm'], ['Genevieve', 'f'], ['Joaquin', 'm'], ['Aoife', 'f'], ['Thaddeus', 'm'], ['Marguerite', 'f'], ['Krzysztof', 'm'], ['Evangeline', 'f'], ['Leopold', 'm'], ['Anneliese', 'f'], ['Seamus', 'm'], ['Gwendolyn', 'f'], ['Maximilian', 'm'], ['Solveig', 'f'], ['Ignatius', 'm'], ['Priyanka', 'f'], ['Rajinder', 'm'], ['Xiomara', 'f'], ['Oluwaseun', 'm'], ['Persephone', 'f'], ['Benedikt', 'm'], ['Dagny', 'f'], ['Lachlan', 'm'], ['Ngozi', 'f'], ['Tadeusz', 'm'], ['Rosalind', 'f'], ['Fitzwilliam', 'm'], ['Henrietta', 'f'], ['Quentin', 'm'], ['Jacqueline', 'f'], ['Cuthbert', 'm'], ['Bernadette', 'f'], ['Ezekiel', 'm'], ['Annika', 'f'], ['Thibault', 'm']]
  };

  const LAST = {
    easy: ['Smith', 'Brown', 'Jones', 'Clark', 'Hill', 'Wood', 'Young', 'King', 'Gray', 'Ward', 'Lee', 'Hall', 'Bell', 'Cook', 'Reid', 'Ross', 'Shaw', 'Hunt', 'Ford', 'Lane', 'Price', 'Hayes', 'Burke', 'Moore', 'Wells', 'Dunn', 'Hart', 'Webb', 'Fox', 'Cole'],
    mid: ['Sullivan', 'Mitchell', 'Henderson', 'Campbell', 'Robertson', 'Patterson', 'Montgomery', 'Richardson', 'MacDonald', 'Fitzgerald', 'Christensen', 'Boudreau', 'Whitmore', 'McKenzie', 'Lawson', 'Morrison', 'Bradley', 'Griffith', 'Thompson', 'Armstrong', 'Pritchard', 'Anderton', 'Kilpatrick', 'Menzies', 'McPhee', 'Tremblay', 'Desjardins', 'Dhaliwal', 'Nguyen', 'Sandhu', 'Gallagher', 'Henshaw'],
    hard: ['Kowalczyk', "O'Donoghue", 'MacGillivray', 'Szczepanski', 'Nguyen-Laurent', 'Abernethy', 'Archambault', 'Dzierzawski', 'Fitzpatrick-Hale', 'Gagnon-Leclerc', 'Haverkamp', 'Jaramillo', 'Kaczmarek', 'Llewellyn', 'Oyelaran', 'Papadopoulos', 'Quintanilla', 'Rasmussen', 'St-Laurent', 'Thibodeau', 'Urquhart', 'Vandersteen', 'Wojciechowski', 'Yamaguchi', 'Okonkwo', 'Grewal', 'Featherstone', "D'Agostino", 'Cliffe', 'Kilpatrick', 'McPhee', 'Pritchard', 'Anderton', 'Menzies', 'Van Wyck', 'Ellingsen-Moore']
  };

  const CITIES = ['Courtenay', 'Comox', 'Cumberland', 'Campbell River', 'Nanaimo', 'Parksville', 'Qualicum Beach', 'Port Alberni', 'Duncan', 'Ladysmith', 'Victoria', 'Sooke', 'Tofino', 'Ucluelet', 'Port Hardy', 'Port McNeill', 'Gold River', 'Union Bay', 'Royston', 'Black Creek', 'Fanny Bay', 'Lantzville', 'Chemainus', 'Sidney', 'Langford', 'Colwood', 'Esquimalt', 'Powell River', 'Sayward', 'Bowser'];

  const STREETS = {
    easy: ['Cumberland Road', 'Pine Street', 'Maple Crescent', 'Oak Avenue', 'Main Street', 'Park Road', 'Lake Drive', 'Hill Street', 'Cedar Lane', 'Elm Street', 'River Road', 'Beach Drive', 'Spruce Street', 'Birch Avenue', 'Fir Street', 'Bay Road'],
    mid: ['Alderwood Crescent', 'Meadowbrook Drive', 'Cedar Hill Road', 'Willowbrook Lane', 'Douglas Street', 'Riverside Road', 'Glenwood Drive', 'Parkview Street', 'Oak Bay Avenue', 'Lakeside Drive', 'Fernwood Road', 'Hillcrest Avenue', 'Ryan Road', 'Lerwick Road', 'Piercy Avenue', 'Comox Avenue', 'Fitzgerald Avenue', 'Willemar Avenue', 'Dogwood Street', 'Arbutus Crescent'],
    hard: ['Kilpatrick Avenue', 'Menzies Avenue', 'McPhee Avenue', 'Cliffe Avenue', 'Anderton Road', 'Headquarters Road', 'Puntledge Road', 'Tsolum River Road', 'Dove Creek Road', 'Ellenor Road', 'Guthrie Road', 'Muir Road', 'Krebs Crescent', 'Aspen Road', 'Lazo Road', 'Knight Road', 'Pritchard Road', 'Waveland Road', 'Huband Road', 'Marsden Road']
  };
  const STREET_SUFFIX_DIRECTIONS = ['North', 'South', 'East', 'West'];

  const POSTAL_LETTERS = 'ABCEGHJKLMNPRSTVWXYZ';

  const COMPANY = {
    easy: {
      heads: ['Island', 'Coastal', 'Valley', 'Harbour', 'Northside', 'Smith', 'Bayside', 'Cedar', 'Mountain', 'Westview'],
      trades: ['Plumbing', 'Movers', 'Supply', 'Electric', 'Paving', 'Roofing', 'Glass', 'Hardware', 'Cleaning', 'Landscaping', 'Towing', 'Printing'],
      suffix: ['']
    },
    mid: {
      heads: ['Harbourview', 'Westshore', 'Tidewater', 'Comox Valley', 'Mid-Island', 'Strathcona', 'Pacific Rim', 'Beaufort', 'Mount Washington', 'Sandwick', 'Oyster River', 'Seal Bay'],
      trades: ['Electrical', 'Paving', 'Mechanical', 'Building Supply', 'Freight Services', 'Restoration', 'Engineering', 'Office Systems', 'Environmental', 'Surveying', 'Fire Protection', 'Glass & Door'],
      suffix: [' Ltd.', ' Inc.', ' Ltd.', ' Co.', '']
    },
    hard: {
      heads: ['Tsolum River', 'Pacific Northwest', 'Quadra Strait', 'Kowalczyk & Sons', 'MacGillivray-Urquhart', 'North Island Midstream', "O'Donoghue Brothers", 'Qualicum-Beaufort', 'Archambault & Thibodeau', 'Haverkamp Pacific', 'Llewellyn Coastal', 'Strathcona-Comox'],
      trades: ['Geotechnical Consultants', 'Logistics & Warehousing', 'Mechanical Contractors', 'Hydrogeological Services', 'Environmental Remediation', 'Architectural Millwork', 'Electrical & Instrumentation', 'Telecommunications', 'Facilities Management', 'Fire & Life Safety Systems', 'Marine Fabrication', 'Property Management'],
      suffix: [' Ltd.', ' Inc.', ' (2019) Ltd.', ' Corp.', ' LLP', ' Group Inc.', ' Holdings Ltd.']
    }
  };

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const MONTH_ABBR = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  // ---------- Random helpers ----------

  function makeRng(seed) {
    if (seed === undefined || seed === null) return Math.random;
    let a = (seed >>> 0) || 1;
    return function () { // mulberry32
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function tools(rng) {
    const int = (lo, hi) => lo + Math.floor(rng() * (hi - lo + 1));
    const pick = arr => arr[Math.floor(rng() * arr.length)];
    const chance = p => rng() < p;
    const shuffle = arr => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    return { int, pick, chance, shuffle };
  }

  const commas = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  const wordCount = s => (s.match(/\S+/g) || []).length;

  // Pools by level: easy names at level 1, a mix in the middle, hard names at the top.
  function tierFor(level, R) {
    if (level <= 1) return 'easy';
    if (level === 2) return R.chance(0.75) ? 'mid' : 'easy';
    if (level === 3) return R.chance(0.55) ? 'mid' : 'hard';
    return R.chance(0.8) ? 'hard' : 'mid';
  }

  // ---------- Value builders ----------

  function makePerson(level, R, usedLast) {
    const tier = tierFor(level, R);
    const [first, gender] = R.pick(FIRST[tier]);
    let last;
    for (let i = 0; i < 20; i++) {
      last = R.pick(LAST[tierFor(level, R)]);
      if (!usedLast.has(last)) break;
    }
    usedLast.add(last);
    let courtesy = gender === 'f' ? 'Ms.' : 'Mr.';
    if (level >= 3 && R.chance(0.15)) courtesy = 'Dr.';
    let full = `${first} ${last}`;
    if (level >= 4 && R.chance(0.3)) full = `${first} ${R.pick('ABCDEGHJKLMPRSTW'.split(''))}. ${last}`;
    return {
      first, last, full, gender,
      title: `${courtesy} ${last}`,
      courtesyFull: `${courtesy} ${first} ${last}`,
      he: gender === 'f' ? 'she' : 'he',
      him: gender === 'f' ? 'her' : 'him',
      his: gender === 'f' ? 'her' : 'his'
    };
  }

  function makeStreet(level, R) {
    const tier = tierFor(level, R);
    let number;
    if (level <= 1) number = R.int(10, 999);
    else if (level === 2) number = R.int(100, 4999);
    else number = R.int(100, 9899);
    let s = `${number} ${R.pick(STREETS[tier])}`;
    if (level >= 3 && R.chance(0.3)) s += ' ' + R.pick(STREET_SUFFIX_DIRECTIONS);
    if (level === 3 && R.chance(0.3)) s = `Unit ${R.int(1, 24)}, ${s}`;
    if (level >= 4 && R.chance(0.5)) s = R.chance(0.5) ? `Suite ${R.int(101, 412)}, ${s}` : `#${R.int(2, 38)}${R.pick(['', 'A', 'B'])} - ${s}`;
    return s;
  }

  function makePostal(R) {
    const L = () => R.pick(POSTAL_LETTERS.split(''));
    return `V${R.int(0, 9)}${L()} ${R.int(0, 9)}${L()}${R.int(0, 9)}`;
  }

  function makeCompany(level, R) {
    const tier = level <= 1 ? 'easy' : level === 2 ? 'mid' : level === 3 ? (R.chance(0.5) ? 'mid' : 'hard') : 'hard';
    const pool = COMPANY[tier];
    return `${R.pick(pool.heads)} ${R.pick(pool.trades)}${R.pick(pool.suffix)}`;
  }

  function makeDates(level, R) {
    // Three chronological dates in 2026/2027.
    const start = new Date(Date.UTC(2026, R.int(0, 11), R.int(1, 28)));
    const d = [start];
    d.push(new Date(d[0].getTime() + R.int(3, 21) * 86400000));
    d.push(new Date(d[1].getTime() + R.int(3, 30) * 86400000));
    // Letters and notices are issued before the events they describe;
    // reports are written after them.
    const issued = new Date(d[0].getTime() - R.int(2, 14) * 86400000);
    const reported = new Date(d[1].getTime() + R.int(1, 3) * 86400000);
    const fmt = date => {
      const m = date.getUTCMonth(), day = date.getUTCDate(), y = date.getUTCFullYear(), wd = date.getUTCDay();
      if (level <= 1) return `${MONTHS[m]} ${day}`;
      if (level === 2) return `${MONTHS[m]} ${day}, ${y}`;
      if (level === 3) return R.chance(0.6) ? `${WEEKDAYS[wd]}, ${MONTHS[m]} ${day}, ${y}` : `${MONTHS[m]} ${day}, ${y}`;
      const r = R.int(1, 10);
      if (r <= 5) return `${WEEKDAYS[wd]}, ${MONTHS[m]} ${day}, ${y}`;
      if (r <= 8) return `${MONTH_ABBR[m]} ${day}, ${y}`;
      return `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };
    const headerFmt = date => {
      const m = date.getUTCMonth(), day = date.getUTCDate(), y = date.getUTCFullYear();
      return `${MONTHS[m]} ${day}, ${y}`;
    };
    return { date: fmt(d[0]), date2: fmt(d[1]), date3: fmt(d[2]), issued: headerFmt(issued), reported: headerFmt(reported) };
  }

  function makeTimes(level, R) {
    let step = level <= 1 ? 30 : level === 2 ? 15 : level === 3 ? 5 : 1;
    const first = R.int(7 * 60, 15 * 60);
    const second = Math.min(first + R.int(20, 300), 23 * 60 + 30);
    const fmt = mins => {
      mins = Math.round(mins / step) * step;
      const h = Math.floor(mins / 60), m = mins % 60;
      if (level >= 4 && R.chance(0.5)) return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} hours`;
      const h12 = ((h + 11) % 12) + 1;
      return `${h12}:${String(m).padStart(2, '0')} ${h < 12 ? 'a.m.' : 'p.m.'}`;
    };
    return { time: fmt(first), time2: fmt(second) };
  }

  function makeAmount(level, R) {
    if (level <= 1) return '$' + R.int(1, 19) * 5;
    if (level === 2) return R.chance(0.6) ? '$' + commas(R.int(12, 950)) : '$' + commas(R.int(12, 950)) + '.' + R.pick(['00', '25', '50', '75']);
    if (level === 3) return '$' + commas(R.int(85, 4800)) + '.' + String(R.int(0, 99)).padStart(2, '0');
    return '$' + commas(R.int(240, 48000)) + '.' + String(R.int(1, 99)).padStart(2, '0');
  }

  function makeNumber(level, R) {
    if (level <= 1) return R.chance(0.7) ? NUMBER_WORDS[R.int(2, 20)] : String(R.int(2, 30));
    if (level === 2) return String(R.int(2, 40));
    if (level === 3) return String(R.int(3, 60));
    return String(R.int(3, 97));
  }

  function makeBigNumber(level, R) {
    if (level <= 1) return String(R.int(1, 9) * 100 + R.pick([0, 50]));
    if (level === 2) return commas(R.int(12, 99) * 50);
    if (level === 3) return commas(R.int(1000, 9999));
    return commas(R.int(10000, 99999));
  }

  function makePercent(level, R) {
    if (level <= 1) return R.int(1, 10) * 5 + '%';
    if (level === 2) return R.int(2, 40) + '%';
    if (level === 3) return (R.int(4, 80) / 2) + '%';
    return (R.int(100, 4000) / 100).toFixed(2).replace(/0$/, '') + '%';
  }

  function makeKm(level, R) {
    if (level <= 1) return R.int(2, 20) + ' kilometres';
    if (level === 2) return R.int(2, 60) + ' kilometres';
    if (level === 3) return (R.int(15, 400) / 10) + ' kilometres';
    return (R.int(15, 900) / 10) + ' km';
  }

  function makeRef(level, R) {
    if (level <= 1) return String(R.int(1000, 9999));
    if (level === 2) return `${R.pick('ABCDEFGHJKLMNPRST'.split(''))}-${R.int(1000, 9999)}`;
    const pre = R.pick(['CV', 'NI', 'INC', 'FL', 'BP', 'CL', 'WO', 'PO', 'RQ', 'TX', 'SR']);
    if (level === 3) return `${pre}-2026-${String(R.int(1, 9999)).padStart(4, '0')}`;
    return R.chance(0.5)
      ? `${pre}-2026-${String(R.int(1, 99999)).padStart(5, '0')}/${R.pick('ABCDEFGH'.split(''))}`
      : `${pre}26-${String(R.int(1, 999999)).padStart(6, '0')}-${String(R.int(1, 12)).padStart(2, '0')}`;
  }

  function makePhone(level, R, withExt) {
    const area = R.pick(['250', '250', '778', '236']);
    const num = `${R.int(200, 989)}-${String(R.int(0, 9999)).padStart(4, '0')}`;
    let p = level >= 3 ? `(${area}) ${num}` : `${area}-${num}`;
    if (withExt && level >= 4) p += `, ext. ${R.int(101, 4890)}`;
    return p;
  }

  function slug(s) {
    return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9 ]/g, '').split(' ')
      .filter(w => w && !['the', 'of', 'and', 'ltd', 'inc', 'co', 'corp'].includes(w));
  }

  function domainFor(org) {
    const parts = slug(org);
    let d = '';
    for (const p of parts) { if ((d + p).length > 22) break; d += p; }
    return (d || 'office') + '.ca';
  }

  function makeEmail(person, org, level, R) {
    const local = level <= 2
      ? `${person.first}.${person.last}`
      : R.pick([`${person.first}.${person.last}`, `${person.first.charAt(0)}${person.last}`, `${person.first}_${person.last}`]);
    return `${local.toLowerCase().replace(/[^a-z0-9._]/g, '')}@${domainFor(org)}`;
  }

  // ---------- Placeholder filling ----------

  function fill(text, ctx) {
    return text.replace(/\{([A-Za-z0-9_]+)\}/g, (raw, key) => {
      const lower = key.charAt(0).toLowerCase() + key.slice(1);
      const value = ctx[lower];
      if (value === undefined) return raw;
      return key.charAt(0) === key.charAt(0).toUpperCase() && /[A-Z]/.test(key.charAt(0)) ? cap(value) : value;
    });
  }

  function buildContext(scenario, level, R) {
    const usedLast = new Set();
    const people = [makePerson(level, R, usedLast), makePerson(level, R, usedLast), makePerson(level, R, usedLast)];
    const recipient = makePerson(level, R, usedLast);
    const sender = makePerson(level, R, usedLast);
    const city = R.pick(CITIES);
    let city2 = R.pick(CITIES);
    while (city2 === city) city2 = R.pick(CITIES);

    const ctx = { city, city2 };
    people.forEach((p, i) => {
      const k = 'p' + (i + 1);
      ctx[k] = p.full; ctx[k + '_first'] = p.first; ctx[k + '_last'] = p.last; ctx[k + '_title'] = p.title;
      ctx[k + '_he'] = p.he; ctx[k + '_him'] = p.him; ctx[k + '_his'] = p.his;
    });
    ctx.r_title = recipient.title;
    ctx.sender = sender.full;
    ctx.street = makeStreet(level, R);
    ctx.street2 = makeStreet(level, R);
    ctx.company = makeCompany(level, R);
    do { ctx.company2 = makeCompany(level, R); } while (ctx.company2 === ctx.company);
    Object.assign(ctx, makeDates(level, R), makeTimes(level, R));
    ctx.amount = makeAmount(level, R);
    ctx.amount2 = makeAmount(level, R);
    ctx.number = makeNumber(level, R);
    ctx.number2 = makeNumber(level, R);
    ctx.bignumber = makeBigNumber(level, R);
    ctx.percent = makePercent(level, R);
    ctx.km = makeKm(level, R);
    ctx.ref = makeRef(level, R);
    ctx.ref2 = makeRef(level, R);
    ctx.phone = makePhone(level, R, true);
    // The org name may itself use placeholders (e.g. "School District No. {number2}"),
    // so it is filled after every other value exists.
    ctx.org = fill(R.pick(scenario.orgs), ctx);
    ctx.email = makeEmail(sender, ctx.org, level, R);

    // Extra values used only by headers and sign-offs.
    const extra = {
      recipient, sender, people,
      senderTitle: R.pick(scenario.senderTitles),
      subject: fill(R.pick(scenario.subjects), ctx),
      issued: scenario.kind === 'report' ? ctx.reported : ctx.issued,
      postal: makePostal(R),
      orgStreet: makeStreet(Math.max(2, level), R),
      orgCity: R.chance(0.6) ? city : R.pick(CITIES),
      orgPostal: makePostal(R),
      orgPhone: makePhone(level, R, false),
      fax: makePhone(level, R, false),
      recipientCompany: makeCompany(level, R),
      ccPerson: makePerson(level, R, usedLast),
      ccPerson2: makePerson(level, R, usedLast)
    };
    return { ctx, extra };
  }

  // ---------- Headers and sign-offs ----------

  const RECIPIENT_JOBS = ['Office Manager', 'Owner', 'Property Manager', 'Director of Operations', 'Accounts Payable', 'Executive Director', 'Facilities Supervisor', 'Branch Manager', 'Program Coordinator', 'General Manager'];
  const AUDIENCES = {
    // Generic on purpose: any of these must suit any memo / notice scenario.
    memo: ['All Staff', 'All Staff', 'All Employees', 'Supervisors and Team Leads', 'Managers and Staff'],
    notice: ['Residents', 'Residents and Visitors', 'Members of the Public', 'Property Owners and Residents', 'The Community']
  };

  function recipientBlock(level, ctx, extra, R) {
    const r = extra.recipient;
    const lines = [r.courtesyFull];
    if (level >= 3 && R.chance(0.6)) {
      lines.push(level >= 4 ? `${R.pick(RECIPIENT_JOBS)}, ${extra.recipientCompany}` : extra.recipientCompany);
    }
    lines.push(ctx.street, `${ctx.city}, BC ${extra.postal}`);
    return lines;
  }

  function letterhead(level, ctx, extra) {
    const lines = [ctx.org, `${extra.orgStreet}, ${extra.orgCity}, BC ${extra.orgPostal}`];
    if (level >= 4) {
      lines.push(`Telephone: ${extra.orgPhone} | Fax: ${extra.fax}`);
      lines.push(`Email: ${ctx.email} | www.${domainFor(ctx.org)}`);
    } else {
      lines.push(`Telephone: ${extra.orgPhone}`);
    }
    return lines;
  }

  function buildHeader(scenario, level, ctx, extra, R) {
    const kind = scenario.kind;
    const r = extra.recipient;
    const blocks = [];

    if (level <= 1) {
      // Matches the original trainer style: one short opening line.
      if (kind === 'letter' || kind === 'email') {
        blocks.push(`Dear ${r.courtesyFull}, at ${ctx.street}, ${ctx.city}, BC ${extra.postal}:`);
      } else if (kind === 'memo') {
        blocks.push(`To ${R.pick(AUDIENCES.memo).toLowerCase()} at ${ctx.org}:`);
      } else {
        blocks.push(`${extra.subject}`);
      }
      return { header: blocks.join('\n\n'), salutationOnly: false };
    }

    if (kind === 'letter') {
      if (level >= 3) blocks.push(letterhead(level, ctx, extra).join('\n'));
      blocks.push(extra.issued);
      if (level >= 4) blocks.push(R.pick(['BY EMAIL AND REGULAR MAIL', 'SENT BY REGISTERED MAIL', 'DELIVERED BY HAND', 'BY EMAIL ONLY']));
      if (level >= 3) blocks.push(level >= 4 ? `Our File: ${ctx.ref}\nYour File: ${ctx.ref2}` : `Our File: ${ctx.ref}`);
      blocks.push(recipientBlock(level, ctx, extra, R).join('\n'));
      if (level >= 4 && R.chance(0.5)) blocks.push(`Attention: ${r.courtesyFull}`);
      if (level >= 3) blocks.push(`Re: ${extra.subject}`);
      blocks.push(`Dear ${r.title}:`);
    } else if (kind === 'email') {
      const lines = [`From: ${ctx.sender} <${ctx.email}>`];
      const rEmail = makeEmail(r, level >= 3 ? extra.recipientCompany : 'mail', level, R);
      lines.push(level >= 3 ? `To: ${r.full} <${rEmail}>` : `To: ${r.full}`);
      if (level >= 3) lines.push(`Cc: ${extra.ccPerson.full} <${makeEmail(extra.ccPerson, ctx.org, level, R)}>`);
      lines.push(`Sent: ${extra.issued}${level >= 3 ? ' ' + makeTimes(level, R).time : ''}`);
      lines.push(`Subject: ${level >= 4 ? 'RE: ' : ''}${extra.subject}`);
      blocks.push(lines.join('\n'));
      blocks.push(level >= 3 ? `Dear ${r.title},` : `Hello ${r.first},`);
    } else if (kind === 'memo') {
      const lines = ['MEMORANDUM', `To: ${R.pick(AUDIENCES.memo)}`, `From: ${ctx.sender}, ${extra.senderTitle}`];
      if (level >= 3) lines.push(`Cc: ${extra.ccPerson.full}; ${extra.ccPerson2.full}`);
      lines.push(`Date: ${extra.issued}`);
      if (level >= 3) lines.push(`File: ${ctx.ref}`);
      lines.push(`Re: ${extra.subject}`);
      if (level >= 3) blocks.push(ctx.org);
      blocks.push(lines.join('\n'));
    } else if (kind === 'report') {
      const lines = [ctx.org];
      // Public-safety scenarios (id prefix "d") are call/occurrence records.
      const label = scenario.id.charAt(0) === 'd' ? 'OCCURRENCE REPORT' : 'REPORT';
      lines.push(level >= 3 ? `${label} - ${extra.subject}` : extra.subject);
      if (level >= 3) lines.push(`File No.: ${ctx.ref}${level >= 4 ? ` (related: ${ctx.ref2})` : ''}`);
      lines.push(`Date of Report: ${extra.issued}`);
      if (level >= 3) lines.push(`Location: ${ctx.street}, ${ctx.city}, BC`);
      lines.push(`Prepared by: ${ctx.sender}, ${extra.senderTitle}`);
      if (level >= 4) lines.push(`Contact: ${ctx.phone}; ${ctx.email}`);
      blocks.push(lines.join('\n'));
    } else if (kind === 'notice') {
      const lines = [ctx.org];
      if (level >= 3) lines.push(`${extra.orgStreet}, ${extra.orgCity}, BC ${extra.orgPostal}`);
      lines.push(`PUBLIC NOTICE: ${extra.subject}`);
      lines.push(`To: ${R.pick(AUDIENCES.notice)}${level >= 3 ? ` of ${ctx.city} and Area` : ''}`);
      lines.push(`Issued: ${extra.issued}`);
      if (level >= 3) lines.push(`Reference: ${ctx.ref}`);
      blocks.push(lines.join('\n'));
    } else { // article
      const lines = [`${ctx.org}${level >= 3 ? ' Newsletter' : ''}`];
      if (level >= 3) lines.push(`Volume ${R.int(3, 41)}, Issue ${R.int(1, 12)} - ${extra.issued}`);
      else lines.push(extra.issued);
      lines.push(extra.subject);
      lines.push(`By ${ctx.sender}${level >= 3 ? ', ' + extra.senderTitle : ''}`);
      blocks.push(lines.join('\n'));
    }
    return { header: blocks.join('\n\n') };
  }

  function buildSignoff(scenario, level, ctx, extra, R) {
    const kind = scenario.kind;
    if (level <= 1) return '';
    const lines = [];
    if (kind === 'letter') {
      lines.push(level >= 3 ? R.pick(['Yours truly,', 'Sincerely,', 'Respectfully,']) : 'Sincerely,');
      lines.push('');
      lines.push(ctx.sender, extra.senderTitle);
      if (level >= 3) lines.push(ctx.org);
      if (level >= 4) lines.push(`Direct: ${ctx.phone}`);
      let tail = '';
      if (level >= 3) {
        tail += `\n\ncc: ${extra.ccPerson.full}${level >= 4 ? `, ${R.pick(RECIPIENT_JOBS)} (${makeEmail(extra.ccPerson, ctx.org, level, R)})` : ''}`;
        if (level >= 4) tail += `\n    ${extra.ccPerson2.full}, ${extra.recipientCompany}\nEncl. (${R.int(2, 4)})`;
      }
      return lines.join('\n') + tail;
    }
    if (kind === 'email') {
      lines.push(R.pick(['Thanks,', 'Kind regards,', 'Best regards,']), ctx.sender, extra.senderTitle);
      if (level >= 3) lines.push(ctx.org, ctx.phone);
      return lines.join('\n');
    }
    if (kind === 'notice') {
      return `For more information, contact ${ctx.org} at ${extra.orgPhone}${level >= 3 ? ` or ${ctx.email}` : ''}.`;
    }
    if (kind === 'report' && level >= 3) {
      return `Report reviewed by: ${extra.ccPerson.full}, Supervisor\nDistribution: ${extra.ccPerson2.full}; File ${ctx.ref}`;
    }
    return '';
  }

  // ---------- Assembly ----------

  function assemble(scenario, level, R) {
    const { ctx, extra } = buildContext(scenario, level, R);
    const { header } = buildHeader(scenario, level, ctx, extra, R);
    const signoff = buildSignoff(scenario, level, ctx, extra, R);

    let paras = scenario.sections.map(sec => fill(R.pick(sec), ctx));

    // Append detail sentences to random middle paragraphs.
    const nDetails = DETAILS_PER_LEVEL[level] || 0;
    const details = R.shuffle(scenario.details).slice(0, nDetails).map(d => fill(d, ctx));
    details.forEach(d => {
      const i = R.int(1, paras.length - 2);
      paras[i] = paras[i] + ' ' + d;
    });

    // Keep the passage in the target length range by dropping middle
    // paragraphs (never the first or last) if it runs long.
    const total = () => wordCount(header) + wordCount(signoff) + paras.reduce((n, p) => n + wordCount(p), 0);
    while (total() > MAX_WORDS && paras.length > 5) {
      const i = R.int(1, paras.length - 2);
      paras.splice(i, 1);
    }

    const parts = [header, ...paras];
    if (signoff) parts.push(signoff);
    const text = parts.join('\n\n').replace(/[ \t]+$/gm, '');
    return { text, words: wordCount(text) };
  }

  function chooseScenario(R, avoidIds) {
    const avoid = new Set(avoidIds || []);
    let pool = SCENARIO_LIST.filter(s => !avoid.has(s.id));
    if (!pool.length) pool = SCENARIO_LIST;
    return R.pick(pool);
  }

  /**
   * Generate a passage.
   * @param {object} opts
   *   level: 1-4, or 'mixed' for a random level
   *   avoid: scenario ids to skip (recently seen)
   *   seed:  optional integer for reproducible output
   *   scenarioId: optional specific scenario
   */
  function generate(opts = {}) {
    const R = tools(makeRng(opts.seed));
    const level = opts.level === 'mixed' || !opts.level ? R.int(1, 4) : Number(opts.level);
    const scenario = opts.scenarioId
      ? SCENARIO_LIST.find(s => s.id === opts.scenarioId)
      : chooseScenario(R, opts.avoid);
    let best = assemble(scenario, level, R);
    // Rare short draws: retry a few times for one that reaches the minimum.
    for (let i = 0; i < 4 && best.words < MIN_WORDS; i++) {
      const next = assemble(scenario, level, R);
      if (next.words > best.words) best = next;
    }
    return {
      text: best.text,
      words: best.words,
      level,
      levelName: LEVELS[level - 1].name,
      scenarioId: scenario.id,
      kind: scenario.kind,
      title: scenario.title
    };
  }

  /**
   * Generate a header-only exercise.
   * Level 1 is the classic four-line record (Name / Address / City / Postal Code);
   * higher levels are the real header block of a generated passage at that level.
   */
  function generateHeader(opts = {}) {
    const R = tools(makeRng(opts.seed));
    const level = opts.level === 'mixed' || !opts.level ? R.int(1, 4) : Number(opts.level);
    if (level <= 1) {
      const usedLast = new Set();
      const p = makePerson(2, R, usedLast);
      const text = `${p.full}\n${makeStreet(2, R)}\n${R.pick(CITIES)}\n${makePostal(R)}`;
      return { text, words: wordCount(text), level, levelName: LEVELS[0].name, scenarioId: null, kind: 'record', title: 'Name / Address / City / Postal Code' };
    }
    // Prefer letters for header practice; they carry the fullest headers.
    const avoid = new Set(opts.avoid || []);
    const lettersOnly = R.chance(0.6);
    const preferred = SCENARIO_LIST.filter(s => !avoid.has(s.id) && (!lettersOnly || s.kind === 'letter'));
    const scenario = R.pick(preferred.length ? preferred : SCENARIO_LIST);
    const { ctx, extra } = buildContext(scenario, level, R);
    const { header } = buildHeader(scenario, level, ctx, extra, R);
    return { text: header, words: wordCount(header), level, levelName: LEVELS[level - 1].name, scenarioId: scenario.id, kind: scenario.kind, title: scenario.title };
  }

  const api = { LEVELS, generate, generateHeader, scenarioCount: SCENARIO_LIST.length, _fill: fill };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PassageGen = api;
})(typeof window !== 'undefined' ? window : globalThis);
