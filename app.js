const FORMAL_SECONDS = 300;
const TRAINER_DURATIONS = [120, 180, 240, 300];
const sourceEl=document.getElementById('sourceLetter'),entryEl=document.getElementById('entry'),timerEl=document.getElementById('timer'),startBtn=document.getElementById('start'),newBtn=document.getElementById('newLetter'),statusEl=document.getElementById('status'),resultsEl=document.getElementById('results');
const grossWpmEl=document.getElementById('grossWpm'),accuracyEl=document.getElementById('accuracy'),charsTypedEl=document.getElementById('charsTyped'),passFailEl=document.getElementById('passFail'),runLengthEl=document.getElementById('runLength'),correctCharsEl=document.getElementById('correctChars'),errorsEl=document.getElementById('errors'),marginEl=document.getElementById('margin'),resultNoteEl=document.getElementById('resultNote');
const formalModeBtn=document.getElementById('formalMode'),trainerModeBtn=document.getElementById('trainerMode'),headerModeBtn=document.getElementById('headerMode'),trainerStrip=document.getElementById('trainerStrip'),categoryBadge=document.getElementById('categoryBadge'),trainerDurationEl=document.getElementById('trainerDuration'),sourceHeader=document.getElementById('sourceHeader');
let mode='formal', currentIndex=-1, deck=[], remaining=FORMAL_SECONDS, runSeconds=FORMAL_SECONDS, interval=null,running=false,startedAt=null;

const HEADER_PRACTICE = [
`JULIA GRAY
306 MENZIES AVENUE
COURTENAY, BC V9N 5Z5`,
`MARCUS THOMPSON
1847 CEDAR GROVE ROAD
NANAIMO, BC V9R 3K8`,
`EMILY CARTER
529 WILLOWBROOK LANE
ABBOTSFORD, BC V2T 6M4`,
`DANIEL MORRISON
742 FITZGERALD AVENUE
COURTENAY, BC V9N 2L6`,
`SARAH MCKENZIE
1639 ALDER STREET
CAMPBELL RIVER, BC V9W 4P2`,
`JONATHAN REID
2847 MEADOWBROOK DRIVE
COMOX, BC V9M 1H7`,
`NICOLE BOUCHARD
918 RIVERBEND ROAD
DUNCAN, BC V9L 5C3`,
`ANDREW WILSON
4518 MAPLE CRESCENT
PARKSVILLE, BC V9P 7N2`,
`STEPHANIE BOUDREAU
927 HAWTHORNE AVENUE
COURTENAY, BC V9N 8R1`,
`CHRISTOPHER MCKENZIE
2185 OAK BAY ROAD
VICTORIA, BC V8P 2G7`,
`ALEXANDRA WHITMORE
3741 CEDAR HILL ROAD
SAANICH, BC V8X 2L9`,
`GENEVIEVE MONTGOMERY
6158 SPRUCE STREET
NANAIMO, BC V9T 3A6`,
`AMANDA PELLETIER
103 ASPEN RIDGE ROAD
ABBOTSFORD, BC V2T A0C`,
`BRIAN HENDERSON
120 BIRCHWOOD CRESCENT
CAMPBELL RIVER, BC V9W D7H`,
`CAROLINE BEAULIEU
137 CEDAR GROVE LANE
CHILLIWACK, BC V2P G4N`,
`DAVID WHITAKER
154 CREEKSIDE AVENUE
COMOX, BC V9M K1V`,
`ELIZABETH FOSTER
171 EAGLE VIEW DRIVE
COURTENAY, BC V9N N8B`,
`FRANKLIN MORRIS
188 FERNDALE ROAD
DUNCAN, BC V9L S5G`,
`GRACE PATTERSON
205 GARDENIA STREET
KAMLOOPS, BC V2C W2M`,
`HENRY CAMPBELL
222 HARBOUR RIDGE DRIVE
KELOWNA, BC V1Y A9T`,
`ISABELLE TREMBLAY
239 IVY CREEK ROAD
NANAIMO, BC V9R D6A`,
`JAMES RICHARDSON
256 JUNIPER PARKWAY
PARKSVILLE, BC V9P G3F`,
`KAREN MCDONALD
273 LAUREL HEIGHTS CRESCENT
PRINCE GEORGE, BC V2L K0L`,
`LUCAS ANDERSON
290 MAPLE RIDGE AVENUE
SAANICH, BC V8X N7S`,
`MELANIE GAGNON
307 NORTHBROOK ROAD
VANCOUVER, BC V5K S4Y`,
`NATHAN ROBERTS
324 OAKRIDGE DRIVE
VICTORIA, BC V8P W1E`,
`OLIVIA MARTIN
341 PINEVIEW CRESCENT
ABBOTSFORD, BC V2T A8K`,
`PATRICK LEBLANC
358 QUARRY ROAD
CAMPBELL RIVER, BC V9W D5R`,
`QUINN HARRIS
375 RAVENWOOD STREET
CHILLIWACK, BC V2P G2X`,
`RACHEL THOMPSON
392 SEASIDE DRIVE
COMOX, BC V9M K9D`,
`SAMUEL CLARK
409 TIMBERLINE AVENUE
COURTENAY, BC V9N N6J`,
`TARA MURRAY
426 VALLEY VIEW ROAD
DUNCAN, BC V9L S3P`,
`VICTORIA BOUCHARD
443 WESTBROOK CRESCENT
KAMLOOPS, BC V2C W0W`,
`WILLIAM PARKER
460 YORKSHIRE DRIVE
KELOWNA, BC V1Y A7C`,
`YVETTE ROUSSEAU
477 ASPEN RIDGE ROAD
NANAIMO, BC V9R D4H`,
`ZACHARY BENNETT
494 BIRCHWOOD CRESCENT
PARKSVILLE, BC V9P G1N`,
`ALLISON FRASER
511 CEDAR GROVE LANE
PRINCE GEORGE, BC V2L K8V`,
`BRADLEY TURNER
528 CREEKSIDE AVENUE
SAANICH, BC V8X N5B`,
`CHLOE DESROCHERS
545 EAGLE VIEW DRIVE
VANCOUVER, BC V5K S2G`,
`DEREK JOHNSTON
562 FERNDALE ROAD
VICTORIA, BC V8P W9M`,
`ERIN MURPHY
579 GARDENIA STREET
ABBOTSFORD, BC V2T A6T`,
`FELIX LAMBERT
596 HARBOUR RIDGE DRIVE
CAMPBELL RIVER, BC V9W D3A`,
`GEORGIA HUGHES
613 IVY CREEK ROAD
CHILLIWACK, BC V2P G0F`,
`HARRISON PRICE
630 JUNIPER PARKWAY
COMOX, BC V9M K7L`,
`JULIANNE FONTAINE
647 LAUREL HEIGHTS CRESCENT
COURTENAY, BC V9N N4S`,
`KEVIN WALLACE
664 MAPLE RIDGE AVENUE
DUNCAN, BC V9L S1Y`,
`LAUREN MITCHELL
681 NORTHBROOK ROAD
KAMLOOPS, BC V2C W8E`,
`MATTHEW GRANT
698 OAKRIDGE DRIVE
KELOWNA, BC V1Y A5K`,
`NATALIE FOURNIER
715 PINEVIEW CRESCENT
NANAIMO, BC V9R D2R`,
`OWEN STEWART
732 QUARRY ROAD
PARKSVILLE, BC V9P G9X`,
`PENNY HART
749 RAVENWOOD STREET
PRINCE GEORGE, BC V2L K6D`,
`RYAN MACLEOD
766 SEASIDE DRIVE
SAANICH, BC V8X N3J`,
`SOPHIE MERCIER
783 TIMBERLINE AVENUE
VANCOUVER, BC V5K S0P`,
`THOMAS WALKER
800 VALLEY VIEW ROAD
VICTORIA, BC V8P W7W`,
`URSULA REID
817 WESTBROOK CRESCENT
ABBOTSFORD, BC V2T A4C`,
`VINCENT CARRIER
834 YORKSHIRE DRIVE
CAMPBELL RIVER, BC V9W D1H`,
`WENDY FLEMING
851 ASPEN RIDGE ROAD
CHILLIWACK, BC V2P G8N`,
`AARON MASON
868 BIRCHWOOD CRESCENT
COMOX, BC V9M K5V`,
`BELINDA CLARK
885 CEDAR GROVE LANE
COURTENAY, BC V9N N2B`,
`COLIN MACKENZIE
902 CREEKSIDE AVENUE
DUNCAN, BC V9L S9G`,
`DIANE ROY
919 EAGLE VIEW DRIVE
KAMLOOPS, BC V2C W6M`,
`EDWARD SULLIVAN
936 FERNDALE ROAD
KELOWNA, BC V1Y A3T`,
`FIONA ROSS
953 GARDENIA STREET
NANAIMO, BC V9R D0A`,
`GREGORY HALL
970 HARBOUR RIDGE DRIVE
PARKSVILLE, BC V9P G7F`,
`HANNAH SIMPSON
987 IVY CREEK ROAD
PRINCE GEORGE, BC V2L K4L`,
`IAN MONTGOMERY
1004 JUNIPER PARKWAY
SAANICH, BC V8X N1S`,
`JESSICA WATSON
1021 LAUREL HEIGHTS CRESCENT
VANCOUVER, BC V5K S8Y`,
`KYLE DONOVAN
1038 MAPLE RIDGE AVENUE
VICTORIA, BC V8P W5E`,
`LINDA WEBSTER
1055 NORTHBROOK ROAD
ABBOTSFORD, BC V2T A2K`,
`MICHAEL BROWN
1072 OAKRIDGE DRIVE
CAMPBELL RIVER, BC V9W D9R`,
`NICOLE FRASER
1089 PINEVIEW CRESCENT
CHILLIWACK, BC V2P G6X`,
`OSCAR MARTIN
1106 QUARRY ROAD
COMOX, BC V9M K3D`,
`PAIGE WILSON
1123 RAVENWOOD STREET
COURTENAY, BC V9N N0J`,
`ROBERT BLAIR
1140 SEASIDE DRIVE
DUNCAN, BC V9L S7P`,
`SANDRA PARENT
1157 TIMBERLINE AVENUE
KAMLOOPS, BC V2C W4W`,
`TIMOTHY COLLINS
1174 VALLEY VIEW ROAD
KELOWNA, BC V1Y A1C`,
`VANESSA REID
1191 WESTBROOK CRESCENT
NANAIMO, BC V9R D8H`,
`WALTER GRAHAM
1208 YORKSHIRE DRIVE
PARKSVILLE, BC V9P G5N`,
`ABIGAIL KING
1225 ASPEN RIDGE ROAD
PRINCE GEORGE, BC V2L K2V`,
`BRENDAN COLE
1242 BIRCHWOOD CRESCENT
SAANICH, BC V8X N9B`,
`CASSANDRA HUGHES
1259 CEDAR GROVE LANE
VANCOUVER, BC V5K S6G`,
`DANIELLE MOORE
1276 CREEKSIDE AVENUE
VICTORIA, BC V8P W3M`,
`ETHAN FLETCHER
1293 EAGLE VIEW DRIVE
ABBOTSFORD, BC V2T A0T`,
`FELICITY BROWN
1310 FERNDALE ROAD
CAMPBELL RIVER, BC V9W D7A`,
`GABRIELLE LECLERC
1327 GARDENIA STREET
CHILLIWACK, BC V2P G4F`,
`HUGO MARTIN
1344 HARBOUR RIDGE DRIVE
COMOX, BC V9M K1L`,
`JENNIFER ROSS
1361 IVY CREEK ROAD
COURTENAY, BC V9N N8S`,
`KIERAN MURPHY
1378 JUNIPER PARKWAY
DUNCAN, BC V9L S5Y`,
`LEAH THOMAS
1395 LAUREL HEIGHTS CRESCENT
KAMLOOPS, BC V2C W2E`,
`MARC DESJARDINS
1412 MAPLE RIDGE AVENUE
KELOWNA, BC V1Y A9K`,
`NOAH ROBINSON
1429 NORTHBROOK ROAD
NANAIMO, BC V9R D6R`,
`PAMELA GREEN
1446 OAKRIDGE DRIVE
PARKSVILLE, BC V9P G3X`,
`RICHARD EVANS
1463 PINEVIEW CRESCENT
PRINCE GEORGE, BC V2L K0D`,
`SHEILA CARTER
1480 QUARRY ROAD
SAANICH, BC V8X N7J`,
`TRAVIS MILLER
1497 RAVENWOOD STREET
VANCOUVER, BC V5K S4P`,
`VERONICA BAKER
1514 SEASIDE DRIVE
VICTORIA, BC V8P W1W`,
`WAYNE HARRISON
1531 TIMBERLINE AVENUE
ABBOTSFORD, BC V2T A8C`,
`ZOE RICHARD
1548 VALLEY VIEW ROAD
CAMPBELL RIVER, BC V9W D5H`,
`CLARE MONTGOMERY
1565 WESTBROOK CRESCENT
CHILLIWACK, BC V2P G2N`,
`DUNCAN FERGUSON
1582 YORKSHIRE DRIVE
COMOX, BC V9M K9V`
];

function pool(){return mode==='formal'?LETTERS:mode==='header'?HEADER_PRACTICE:TRAINER_PASSAGES;}
function refillDeck(){const p=pool();deck=Array.from({length:p.length},(_,i)=>i);for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck[deck.length-1]===currentIndex)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];}
function currentText(){return mode==='formal'?LETTERS[currentIndex].text:mode==='header'?HEADER_PRACTICE[currentIndex]:TRAINER_PASSAGES[currentIndex].text;}
function normalizeForScoring(t){return t.replace(/[ \t]+(?=\n)/g,'').replace(/[ \t]+$/g,'');}
function syncSourceToTypingProgress(){if(!running)return;const s=currentText(),t=normalizeForScoring(entryEl.value);if(!s.length)return;const progress=Math.max(0,Math.min(1,t.length/s.length)),max=Math.max(0,sourceEl.scrollHeight-sourceEl.clientHeight),target=Math.max(0,Math.min(max,max*progress-sourceEl.clientHeight*.18));sourceEl.scrollTo({top:target,behavior:'smooth'});}
function formatTime(total){return String(Math.floor(total/60)).padStart(2,'0')+':'+String(total%60).padStart(2,'0');}
function choosePassage(){if(running)return;if(!deck.length)refillDeck();currentIndex=deck.pop();sourceEl.textContent=currentText();sourceEl.scrollTop=0;entryEl.value='';resultsEl.classList.remove('show');if(mode==='formal'){runSeconds=FORMAL_SECONDS;timerEl.textContent='05:00';timerEl.classList.remove('hidden');statusEl.textContent=`Choose Start when ready. ${LETTERS.length} formal letters available.`;}else if(mode==='header'){runSeconds=null;timerEl.textContent='NO TIME LIMIT';timerEl.classList.remove('hidden');statusEl.textContent=`Choose Start when ready. ${HEADER_PRACTICE.length} header drills available.`;}else{runSeconds=Number(trainerDurationEl.value);timerEl.textContent='TIME HIDDEN';timerEl.classList.add('hidden');categoryBadge.textContent=TRAINER_PASSAGES[currentIndex].category;statusEl.textContent=`Choose Start when ready. ${TRAINER_PASSAGES.length} trainer passages available.`;}}
function levenshtein(a,b){const n=a.length,m=b.length;if(!n)return m;if(!m)return n;let prev=new Uint32Array(m+1),curr=new Uint32Array(m+1);for(let j=0;j<=m;j++)prev[j]=j;for(let i=1;i<=n;i++){curr[0]=i;const ca=a.charCodeAt(i-1);for(let j=1;j<=m;j++){const cost=ca===b.charCodeAt(j-1)?0:1;curr[j]=Math.min(curr[j-1]+1,prev[j]+1,prev[j-1]+cost);}[prev,curr]=[curr,prev];}return prev[m];}
function endTest(){
  if(!running)return;
  running=false;
  clearInterval(interval); interval=null;
  entryEl.disabled=true;
  startBtn.disabled=false; newBtn.disabled=false;
  formalModeBtn.disabled=false; trainerModeBtn.disabled=false; headerModeBtn.disabled=false;
  const typedRaw=entryEl.value;
  const typed=normalizeForScoring(typedRaw);
  const source=normalizeForScoring(currentText());
  const expected=source.slice(0,typed.length);
  const distance=levenshtein(typed,expected);
  const correctLike=Math.max(0,typed.length-distance);
  const accuracy=typed.length?Math.max(0,Math.min(100,correctLike/typed.length*100)):0;
  const elapsedSeconds=startedAt?Math.max(0,(Date.now()-startedAt)/1000):0;
  const effectiveMinutes=mode==='header'?Math.max(elapsedSeconds/60,0.000001):runSeconds/60;
  const wpmChars=typed.replace(/\n/g,'').length;
  const grossWpm=(wpmChars/5)/effectiveMinutes;
  const passed=grossWpm>=40&&accuracy>=95;

  grossWpmEl.textContent=grossWpm.toFixed(1);
  accuracyEl.textContent=accuracy.toFixed(1)+'%';
  charsTypedEl.textContent=typedRaw.length;
  runLengthEl.textContent=mode==='header'?formatTime(Math.round(elapsedSeconds)):(runSeconds/60)+' min';
  correctCharsEl.textContent=correctLike;
  errorsEl.textContent=distance;
  marginEl.textContent=(grossWpm-40>=0?'+':'')+(grossWpm-40).toFixed(1)+' WPM';
  passFailEl.textContent=passed?'PASS':'NOT YET';
  passFailEl.className='value '+(passed?'pass':'fail');

  if(mode==='header'){
    statusEl.textContent='Header complete.';
    resultNoteEl.textContent='Header Practice: completed automatically when the full header was entered. No time limit.';
    timerEl.textContent=formatTime(Math.round(elapsedSeconds));
    timerEl.classList.remove('hidden');
  }else{
    statusEl.textContent=mode==='trainer'?'Run complete. Nice work—take a moment, then go again when ready.':'Time expired. Test complete.';
    resultNoteEl.textContent=mode==='trainer'?`Trainer category: ${TRAINER_PASSAGES[currentIndex].category}. The timer stayed hidden for the entire run. Practice threshold shown only as a reference: 40 WPM and 95% accuracy.`:'Formal benchmark: five minutes, 40 WPM / 95% practice threshold. No speed or accuracy feedback was shown while the test was running.';
    timerEl.textContent=formatTime(0);
    timerEl.classList.remove('hidden');
  }
  resultsEl.classList.add('show');
}

function startTest(){
  if(running)return;
  running=true;
  remaining=runSeconds;
  startedAt=Date.now();
  entryEl.value='';
  entryEl.disabled=false;
  entryEl.focus();
  startBtn.disabled=true; newBtn.disabled=true;
  formalModeBtn.disabled=true; trainerModeBtn.disabled=true; headerModeBtn.disabled=true;
  resultsEl.classList.remove('show');

  if(mode==='header'){
    statusEl.textContent='Header practice in progress.';
    timerEl.textContent='NO TIME LIMIT';
    timerEl.classList.remove('hidden');
    interval=null;
    return;
  }

  statusEl.textContent=mode==='trainer'?'Trainer run in progress. Forget the clock and keep moving.':'Formal test in progress.';
  if(mode==='trainer'){
    timerEl.textContent='TIME HIDDEN';
    timerEl.classList.add('hidden');
  }else{
    timerEl.classList.remove('hidden');
    timerEl.textContent=formatTime(remaining);
  }
  interval=setInterval(()=>{
    const elapsed=Math.floor((Date.now()-startedAt)/1000);
    remaining=Math.max(0,runSeconds-elapsed);
    if(mode==='formal')timerEl.textContent=formatTime(remaining);
    if(remaining<=0)endTest();
  },250);
}

function setMode(next){
  if(running||mode===next)return;
  mode=next;
  currentIndex=-1;
  deck=[];
  formalModeBtn.classList.toggle('active',mode==='formal');
  trainerModeBtn.classList.toggle('active',mode==='trainer');
  headerModeBtn.classList.toggle('active',mode==='header');
  trainerStrip.classList.toggle('hidden',mode!=='trainer');
  const headerHint=document.getElementById('headerHint');
  headerHint.classList.toggle('hidden',mode!=='header');
  sourceHeader.textContent=mode==='formal'?'Source Letter':mode==='header'?'Header Practice':'Practice Passage';
  choosePassage();
}

function handleInput(){
  syncSourceToTypingProgress();
  if(running&&mode==='header'){
    const typed=normalizeForScoring(entryEl.value);
    const source=normalizeForScoring(currentText());
    if(typed===source) endTest();
  }
}

entryEl.addEventListener('input',handleInput);
entryEl.addEventListener('paste',e=>e.preventDefault());
entryEl.addEventListener('drop',e=>e.preventDefault());
entryEl.addEventListener('beforeinput',e=>{if(!running)e.preventDefault();});
startBtn.addEventListener('click',startTest);
newBtn.addEventListener('click',choosePassage);
formalModeBtn.addEventListener('click',()=>setMode('formal'));
trainerModeBtn.addEventListener('click',()=>setMode('trainer'));
headerModeBtn.addEventListener('click',()=>setMode('header'));
trainerDurationEl.addEventListener('change',()=>{
  if(!running&&mode==='trainer'){
    runSeconds=Number(trainerDurationEl.value);
    timerEl.textContent='TIME HIDDEN';
  }
});
choosePassage();
