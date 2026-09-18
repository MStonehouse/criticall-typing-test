const FORMAL_SECONDS = 300;
const TRAINER_DURATIONS = [120, 180, 240, 300];
const sourceEl=document.getElementById('sourceLetter'),entryEl=document.getElementById('entry'),timerEl=document.getElementById('timer'),startBtn=document.getElementById('start'),newBtn=document.getElementById('newLetter'),statusEl=document.getElementById('status'),resultsEl=document.getElementById('results');
const grossWpmEl=document.getElementById('grossWpm'),accuracyEl=document.getElementById('accuracy'),charsTypedEl=document.getElementById('charsTyped'),passFailEl=document.getElementById('passFail'),runLengthEl=document.getElementById('runLength'),correctCharsEl=document.getElementById('correctChars'),errorsEl=document.getElementById('errors'),marginEl=document.getElementById('margin'),resultNoteEl=document.getElementById('resultNote');
const formalModeBtn=document.getElementById('formalMode'),trainerModeBtn=document.getElementById('trainerMode'),headerModeBtn=document.getElementById('headerMode'),trainerStrip=document.getElementById('trainerStrip'),categoryBadge=document.getElementById('categoryBadge'),trainerDurationEl=document.getElementById('trainerDuration'),sourceHeader=document.getElementById('sourceHeader');
let mode='formal', currentIndex=-1, deck=[], remaining=FORMAL_SECONDS, runSeconds=FORMAL_SECONDS, interval=null,running=false,startedAt=null;

const HEADER_PRACTICE = [
`Julia Gray
306 Menzies Avenue
Courtenay, BC V9N 5Z5`,
`Marcus Thompson
1847 Cedar Grove Road
Nanaimo, BC V9R 3K8`,
`Emily Carter
529 Willowbrook Lane
Abbotsford, BC V2T 6M4`,
`Daniel Morrison
742 Fitzgerald Avenue
Courtenay, BC V9N 2L6`,
`Sarah McKenzie
1639 Alder Street
Campbell River, BC V9W 4P2`,
`Jonathan Reid
2847 Meadowbrook Drive
Comox, BC V9M 1H7`,
`Nicole Bouchard
918 Riverbend Road
Duncan, BC V9L 5C3`,
`Andrew Wilson
4518 Maple Crescent
Parksville, BC V9P 7N2`,
`Stephanie Boudreau
927 Hawthorne Avenue
Courtenay, BC V9N 8R1`,
`Christopher McKenzie
2185 Oak Bay Road
Victoria, BC V8P 2G7`,
`Alexandra Whitmore
3741 Cedar Hill Road
Saanich, BC V8X 2L9`,
`Genevieve Montgomery
6158 Spruce Street
Nanaimo, BC V9T 3A6`,
`Amanda Pelletier
103 Aspen Ridge Road
Abbotsford, BC V2T A0C`,
`Brian Henderson
120 Birchwood Crescent
Campbell River, BC V9W D7H`,
`Caroline Beaulieu
137 Cedar Grove Lane
Chilliwack, BC V2P G4N`,
`David Whitaker
154 Creekside Avenue
Comox, BC V9M K1V`,
`Elizabeth Foster
171 Eagle View Drive
Courtenay, BC V9N N8B`,
`Franklin Morris
188 Ferndale Road
Duncan, BC V9L S5G`,
`Grace Patterson
205 Gardenia Street
Kamloops, BC V2C W2M`,
`Henry Campbell
222 Harbour Ridge Drive
Kelowna, BC V1Y A9T`,
`Isabelle Tremblay
239 Ivy Creek Road
Nanaimo, BC V9R D6A`,
`James Richardson
256 Juniper Parkway
Parksville, BC V9P G3F`,
`Karen McDonald
273 Laurel Heights Crescent
Prince George, BC V2L K0L`,
`Lucas Anderson
290 Maple Ridge Avenue
Saanich, BC V8X N7S`,
`Melanie Gagnon
307 Northbrook Road
Vancouver, BC V5K S4Y`,
`Nathan Roberts
324 Oakridge Drive
Victoria, BC V8P W1E`,
`Olivia Martin
341 Pineview Crescent
Abbotsford, BC V2T A8K`,
`Patrick LeBlanc
358 Quarry Road
Campbell River, BC V9W D5R`,
`Quinn Harris
375 Ravenwood Street
Chilliwack, BC V2P G2X`,
`Rachel Thompson
392 Seaside Drive
Comox, BC V9M K9D`,
`Samuel Clark
409 Timberline Avenue
Courtenay, BC V9N N6J`,
`Tara Murray
426 Valley View Road
Duncan, BC V9L S3P`,
`Victoria Bouchard
443 Westbrook Crescent
Kamloops, BC V2C W0W`,
`William Parker
460 Yorkshire Drive
Kelowna, BC V1Y A7C`,
`Yvette Rousseau
477 Aspen Ridge Road
Nanaimo, BC V9R D4H`,
`Zachary Bennett
494 Birchwood Crescent
Parksville, BC V9P G1N`,
`Allison Fraser
511 Cedar Grove Lane
Prince George, BC V2L K8V`,
`Bradley Turner
528 Creekside Avenue
Saanich, BC V8X N5B`,
`Chloe Desrochers
545 Eagle View Drive
Vancouver, BC V5K S2G`,
`Derek Johnston
562 Ferndale Road
Victoria, BC V8P W9M`,
`Erin Murphy
579 Gardenia Street
Abbotsford, BC V2T A6T`,
`Felix Lambert
596 Harbour Ridge Drive
Campbell River, BC V9W D3A`,
`Georgia Hughes
613 Ivy Creek Road
Chilliwack, BC V2P G0F`,
`Harrison Price
630 Juniper Parkway
Comox, BC V9M K7L`,
`Julianne Fontaine
647 Laurel Heights Crescent
Courtenay, BC V9N N4S`,
`Kevin Wallace
664 Maple Ridge Avenue
Duncan, BC V9L S1Y`,
`Lauren Mitchell
681 Northbrook Road
Kamloops, BC V2C W8E`,
`Matthew Grant
698 Oakridge Drive
Kelowna, BC V1Y A5K`,
`Natalie Fournier
715 Pineview Crescent
Nanaimo, BC V9R D2R`,
`Owen Stewart
732 Quarry Road
Parksville, BC V9P G9X`,
`Penny Hart
749 Ravenwood Street
Prince George, BC V2L K6D`,
`Ryan MacLeod
766 Seaside Drive
Saanich, BC V8X N3J`,
`Sophie Mercier
783 Timberline Avenue
Vancouver, BC V5K S0P`,
`Thomas Walker
800 Valley View Road
Victoria, BC V8P W7W`,
`Ursula Reid
817 Westbrook Crescent
Abbotsford, BC V2T A4C`,
`Vincent Carrier
834 Yorkshire Drive
Campbell River, BC V9W D1H`,
`Wendy Fleming
851 Aspen Ridge Road
Chilliwack, BC V2P G8N`,
`Aaron Mason
868 Birchwood Crescent
Comox, BC V9M K5V`,
`Belinda Clark
885 Cedar Grove Lane
Courtenay, BC V9N N2B`,
`Colin Mackenzie
902 Creekside Avenue
Duncan, BC V9L S9G`,
`Diane Roy
919 Eagle View Drive
Kamloops, BC V2C W6M`,
`Edward Sullivan
936 Ferndale Road
Kelowna, BC V1Y A3T`,
`Fiona Ross
953 Gardenia Street
Nanaimo, BC V9R D0A`,
`Gregory Hall
970 Harbour Ridge Drive
Parksville, BC V9P G7F`,
`Hannah Simpson
987 Ivy Creek Road
Prince George, BC V2L K4L`,
`Ian Montgomery
1004 Juniper Parkway
Saanich, BC V8X N1S`,
`Jessica Watson
1021 Laurel Heights Crescent
Vancouver, BC V5K S8Y`,
`Kyle Donovan
1038 Maple Ridge Avenue
Victoria, BC V8P W5E`,
`Linda Webster
1055 Northbrook Road
Abbotsford, BC V2T A2K`,
`Michael Brown
1072 Oakridge Drive
Campbell River, BC V9W D9R`,
`Nicole Fraser
1089 Pineview Crescent
Chilliwack, BC V2P G6X`,
`Oscar Martin
1106 Quarry Road
Comox, BC V9M K3D`,
`Paige Wilson
1123 Ravenwood Street
Courtenay, BC V9N N0J`,
`Robert Blair
1140 Seaside Drive
Duncan, BC V9L S7P`,
`Sandra Parent
1157 Timberline Avenue
Kamloops, BC V2C W4W`,
`Timothy Collins
1174 Valley View Road
Kelowna, BC V1Y A1C`,
`Vanessa Reid
1191 Westbrook Crescent
Nanaimo, BC V9R D8H`,
`Walter Graham
1208 Yorkshire Drive
Parksville, BC V9P G5N`,
`Abigail King
1225 Aspen Ridge Road
Prince George, BC V2L K2V`,
`Brendan Cole
1242 Birchwood Crescent
Saanich, BC V8X N9B`,
`Cassandra Hughes
1259 Cedar Grove Lane
Vancouver, BC V5K S6G`,
`Danielle Moore
1276 Creekside Avenue
Victoria, BC V8P W3M`,
`Ethan Fletcher
1293 Eagle View Drive
Abbotsford, BC V2T A0T`,
`Felicity Brown
1310 Ferndale Road
Campbell River, BC V9W D7A`,
`Gabrielle Leclerc
1327 Gardenia Street
Chilliwack, BC V2P G4F`,
`Hugo Martin
1344 Harbour Ridge Drive
Comox, BC V9M K1L`,
`Jennifer Ross
1361 Ivy Creek Road
Courtenay, BC V9N N8S`,
`Kieran Murphy
1378 Juniper Parkway
Duncan, BC V9L S5Y`,
`Leah Thomas
1395 Laurel Heights Crescent
Kamloops, BC V2C W2E`,
`Marc Desjardins
1412 Maple Ridge Avenue
Kelowna, BC V1Y A9K`,
`Noah Robinson
1429 Northbrook Road
Nanaimo, BC V9R D6R`,
`Pamela Green
1446 Oakridge Drive
Parksville, BC V9P G3X`,
`Richard Evans
1463 Pineview Crescent
Prince George, BC V2L K0D`,
`Sheila Carter
1480 Quarry Road
Saanich, BC V8X N7J`,
`Travis Miller
1497 Ravenwood Street
Vancouver, BC V5K S4P`,
`Veronica Baker
1514 Seaside Drive
Victoria, BC V8P W1W`,
`Wayne Harrison
1531 Timberline Avenue
Abbotsford, BC V2T A8C`,
`Zoe Richard
1548 Valley View Road
Campbell River, BC V9W D5H`,
`Clare Montgomery
1565 Westbrook Crescent
Chilliwack, BC V2P G2N`,
`Duncan Ferguson
1582 Yorkshire Drive
Comox, BC V9M K9V`
];

function pool(){return mode==='formal'?LETTERS:mode==='header'?HEADER_PRACTICE:TRAINER_PASSAGES;}
function refillDeck(){const p=pool();deck=Array.from({length:p.length},(_,i)=>i);for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck[deck.length-1]===currentIndex)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];}
function currentText(){return mode==='formal'?LETTERS[currentIndex]:mode==='header'?HEADER_PRACTICE[currentIndex]:TRAINER_PASSAGES[currentIndex].text;}
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
