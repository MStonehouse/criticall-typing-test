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
NANAIMO, BC V9T 3A6`
];

function pool(){return mode==='formal'?LETTERS:TRAINER_PASSAGES;}
function refillDeck(){const p=pool();deck=Array.from({length:p.length},(_,i)=>i);for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck[deck.length-1]===currentIndex)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];}
function currentText(){return mode==='formal'?LETTERS[currentIndex].text:mode==='header'?HEADER_PRACTICE[currentIndex]:TRAINER_PASSAGES[currentIndex].text;}
function normalizeForScoring(t){return t.replace(/[ \t]+(?=\n)/g,'').replace(/[ \t]+$/g,'');}
function syncSourceToTypingProgress(){if(!running)return;const s=currentText(),t=normalizeForScoring(entryEl.value);if(!s.length)return;const progress=Math.max(0,Math.min(1,t.length/s.length)),max=Math.max(0,sourceEl.scrollHeight-sourceEl.clientHeight),target=Math.max(0,Math.min(max,max*progress-sourceEl.clientHeight*.18));sourceEl.scrollTo({top:target,behavior:'smooth'});}
function formatTime(total){return String(Math.floor(total/60)).padStart(2,'0')+':'+String(total%60).padStart(2,'0');}
function choosePassage(){if(running)return;if(!deck.length)refillDeck();currentIndex=deck.pop();sourceEl.textContent=currentText();sourceEl.scrollTop=0;entryEl.value='';resultsEl.classList.remove('show');if(mode==='formal'){runSeconds=FORMAL_SECONDS;timerEl.textContent='05:00';timerEl.classList.remove('hidden');statusEl.textContent=`Choose Start when ready. ${LETTERS.length} formal letters available.`;}else if(mode==='header'){runSeconds=null;timerEl.textContent='NO TIME LIMIT';timerEl.classList.remove('hidden');statusEl.textContent=`Choose Start when ready. ${HEADER_PRACTICE.length} header drills available.`;}else{runSeconds=Number(trainerDurationEl.value);timerEl.textContent='TIME HIDDEN';timerEl.classList.add('hidden');categoryBadge.textContent=TRAINER_PASSAGES[currentIndex].category;statusEl.textContent=`Choose Start when ready. ${TRAINER_PASSAGES.length} trainer passages available.`;}}
function levenshtein(a,b){const n=a.length,m=b.length;if(!n)return m;if(!m)return n;let prev=new Uint32Array(m+1),curr=new Uint32Array(m+1);for(let j=0;j<=m;j++)prev[j]=j;for(let i=1;i<=n;i++){curr[0]=i;const ca=a.charCodeAt(i-1);for(let j=1;j<=m;j++){const cost=ca===b.charCodeAt(j-1)?0:1;curr[j]=Math.min(curr[j-1]+1,prev[j]+1,prev[j-1]+cost);}[prev,curr]=[curr,prev];}return prev[m];}
function endTest(){if(!running)return;running=false;clearInterval(interval);interval=null;entryEl.disabled=true;startBtn.disabled=false;newBtn.disabled=false;formalModeBtn.disabled=false;trainerModeBtn.disabled=false;const typedRaw=entryEl.value,typed=normalizeForScoring(typedRaw),source=normalizeForScoring(currentText()),expected=source.slice(0,typed.length),distance=levenshtein(typed,expected),correctLike=Math.max(0,typed.length-distance),accuracy=typed.length?Math.max(0,Math.min(100,correctLike/typed.length*100)):0,if(mode==='header'&&typed===source){stopBtn.click();return;}elapsedMinutes=runSeconds/60,wpmChars=typed.replace(/\n/g,'').length,grossWpm=(wpmChars/5)/elapsedMinutes,passed=grossWpm>=40&&accuracy>=95;
 grossWpmEl.textContent=grossWpm.toFixed(1);accuracyEl.textContent=accuracy.toFixed(1)+'%';charsTypedEl.textContent=typedRaw.length;runLengthEl.textContent=(runSeconds/60)+' min';correctCharsEl.textContent=correctLike;errorsEl.textContent=distance;marginEl.textContent=(grossWpm-40>=0?'+':'')+(grossWpm-40).toFixed(1)+' WPM';passFailEl.textContent=passed?'PASS':'NOT YET';passFailEl.className='value '+(passed?'pass':'fail');statusEl.textContent=mode==='trainer'?'Run complete. Nice work—take a moment, then go again when ready.':'Time expired. Test complete.';resultNoteEl.textContent=mode==='trainer'?`Trainer category: ${TRAINER_PASSAGES[currentIndex].category}. The timer stayed hidden for the entire run. Practice threshold shown only as a reference: 40 WPM and 95% accuracy.`:'Formal benchmark: five minutes, 40 WPM / 95% practice threshold. No speed or accuracy feedback was shown while the test was running.';timerEl.textContent=formatTime(0);timerEl.classList.remove('hidden');resultsEl.classList.add('show');}
function startTest(){if(running)return;running=true;remaining=runSeconds;startedAt=Date.now();entryEl.value='';entryEl.disabled=false;entryEl.focus();startBtn.disabled=true;newBtn.disabled=true;formalModeBtn.disabled=true;trainerModeBtn.disabled=true;resultsEl.classList.remove('show');statusEl.textContent=mode==='trainer'?'Trainer run in progress. Forget the clock and keep moving.':'Formal test in progress.';if(mode==='trainer'){timerEl.textContent='TIME HIDDEN';timerEl.classList.add('hidden');}else timerEl.textContent=formatTime(remaining);interval=setInterval(()=>{const elapsed=Math.floor((Date.now()-startedAt)/1000);remaining=Math.max(0,runSeconds-elapsed);if(mode==='formal')timerEl.textContent=formatTime(remaining);if(remaining<=0)endTest();},250);}
function setMode(next){if(running||mode===next)return;mode=next;currentIndex=-1;deck=[];formalModeBtn.classList.toggle('active',mode==='formal');trainerModeBtn.classList.toggle('active',mode==='trainer');trainerStrip.classList.toggle('show',mode==='trainer');sourceHeader.textContent=mode==='formal'?'Source Letter':'Practice Passage';choosePassage();}
entryEl.addEventListener('input',syncSourceToTypingProgress);entryEl.addEventListener('paste',e=>e.preventDefault());entryEl.addEventListener('drop',e=>e.preventDefault());entryEl.addEventListener('beforeinput',e=>{if(!running)e.preventDefault();});startBtn.addEventListener('click',startTest);newBtn.addEventListener('click',choosePassage);formalModeBtn.addEventListener('click',()=>setMode('formal'));trainerModeBtn.addEventListener('click',()=>setMode('trainer'));trainerDurationEl.addEventListener('change',()=>{if(!running&&mode==='trainer'){runSeconds=Number(trainerDurationEl.value);timerEl.textContent='TIME HIDDEN';}});choosePassage();
