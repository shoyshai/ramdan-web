const FALLBACK_CITIES=[
{n:"PUNE",def:true,s:[[5,42,18,40],[5,41,18,40],[5,41,18,40],[5,40,18,41],[5,40,18,41],[5,39,18,41],[5,38,18,42],[5,38,18,42],[5,37,18,42],[5,37,18,42],[5,36,18,43],[5,35,18,43],[5,34,18,43],[5,33,18,44],[5,33,18,44],[5,32,18,44],[5,32,18,44],[5,31,18,44],[5,30,18,45],[5,29,18,45],[5,28,18,45],[5,27,18,46],[5,26,18,46],[5,25,18,46],[5,25,18,46],[5,24,18,47],[5,23,18,47],[5,22,18,47],[5,21,18,47],[5,20,18,48]],dh:[12,49],as:[16,8],is:[19,50]},
{n:"MUMBAI",s:[[5,51,18,40],[5,51,18,41],[5,50,18,41],[5,50,18,42],[5,49,18,42],[5,48,18,42],[5,48,18,43],[5,47,18,43],[5,47,18,43],[5,46,18,44],[5,45,18,44],[5,44,18,44],[5,44,18,45],[5,43,18,45],[5,42,18,45],[5,42,18,46],[5,41,18,46],[5,40,18,46],[5,39,18,47],[5,39,18,47],[5,38,18,47],[5,37,18,47],[5,36,18,48],[5,35,18,48],[5,35,18,48],[5,34,18,49],[5,33,18,49],[5,32,18,49],[5,31,18,49],[5,30,18,50]],dh:[12,51],as:[16,10],is:[19,53]},
{n:"DELHI",s:[[5,37,18,14],[5,36,18,15],[5,36,18,15],[5,35,18,16],[5,34,18,17],[5,33,18,18],[5,32,18,18],[5,31,18,19],[5,30,18,20],[5,29,18,20],[5,28,18,21],[5,27,18,21],[5,26,18,22],[5,25,18,23],[5,24,18,23],[5,23,18,24],[5,22,18,25],[5,21,18,25],[5,20,18,26],[5,19,18,26],[5,17,18,27],[5,16,18,28],[5,15,18,28],[5,14,18,29],[5,13,18,29],[5,12,18,30],[5,10,18,31],[5,9,18,31],[5,8,18,32],[5,7,18,32]],dh:[12,36],as:[15,47],is:[19,31]},
{n:"HYDERABAD",s:[[5,28,18,19],[5,27,18,20],[5,27,18,20],[5,26,18,20],[5,26,18,21],[5,25,18,21],[5,25,18,21],[5,24,18,22],[5,24,18,22],[5,23,18,22],[5,22,18,23],[5,22,18,23],[5,21,18,23],[5,20,18,23],[5,20,18,24],[5,19,18,24],[5,18,18,24],[5,18,18,24],[5,17,18,25],[5,16,18,25],[5,16,18,25],[5,15,18,25],[5,14,18,26],[5,13,18,26],[5,12,18,26],[5,12,18,26],[5,11,18,26],[5,10,18,27],[5,9,18,27],[5,8,18,27]],dh:[12,31],as:[15,50],is:[19,32]},
{n:"LUCKNOW",s:[[5,22,18,1],[5,21,18,2],[5,20,18,3],[5,19,18,3],[5,18,18,4],[5,17,18,5],[5,16,18,5],[5,15,18,6],[5,14,18,7],[5,13,18,7],[5,12,18,8],[5,11,18,8],[5,10,18,9],[5,9,18,10],[5,8,18,10],[5,7,18,11],[5,5,18,12],[5,4,18,12],[5,3,18,13],[5,2,18,13],[5,0,18,14],[4,59,18,15],[4,58,18,15],[4,57,18,16],[4,55,18,16],[4,54,18,17],[4,52,18,17],[4,51,18,18],[4,50,18,18],[4,48,18,19]],dh:[12,21],as:[15,34],is:[19,20]},
{n:"BANGALORE",s:[[5,29,18,26],[5,29,18,27],[5,28,18,27],[5,28,18,27],[5,28,18,27],[5,27,18,28],[5,27,18,28],[5,26,18,28],[5,26,18,28],[5,25,18,28],[5,25,18,28],[5,24,18,29],[5,24,18,29],[5,23,18,29],[5,23,18,29],[5,22,18,29],[5,22,18,29],[5,21,18,29],[5,20,18,29],[5,20,18,30],[5,19,18,30],[5,19,18,30],[5,18,18,30],[5,17,18,30],[5,17,18,30],[5,16,18,30],[5,16,18,30],[5,15,18,30],[5,14,18,30],[5,14,18,30]],dh:[12,34],as:[15,54],is:[19,38]},
{n:"CHENNAI",s:[[5,18,18,16],[5,18,18,16],[5,18,18,16],[5,17,18,16],[5,17,18,17],[5,16,18,17],[5,16,18,17],[5,16,18,17],[5,15,18,17],[5,15,18,17],[5,14,18,18],[5,14,18,18],[5,13,18,18],[5,13,18,18],[5,12,18,18],[5,12,18,18],[5,11,18,19],[5,10,18,19],[5,10,18,19],[5,9,18,19],[5,9,18,19],[5,8,18,19],[5,7,18,19],[5,7,18,19],[5,6,18,19],[5,5,18,19],[5,5,18,20],[5,4,18,20],[5,3,18,20],[5,3,18,20]],dh:[12,24],as:[15,44],is:[19,27]},
{n:"KOLKATA",s:[[4,51,17,35],[4,50,17,36],[4,49,17,36],[4,49,17,37],[4,48,17,37],[4,47,17,38],[4,47,17,38],[4,46,17,39],[4,45,17,39],[4,44,17,40],[4,44,17,40],[4,43,17,40],[4,42,17,41],[4,41,17,41],[4,40,17,42],[4,39,17,42],[4,39,17,43],[4,38,17,43],[4,37,17,43],[4,36,17,44],[4,35,17,44],[4,34,17,45],[4,33,17,45],[4,32,17,45],[4,31,17,46],[4,30,17,46],[4,29,17,46],[4,28,17,47],[4,27,17,47],[4,26,17,48]],dh:[11,51],as:[15,9],is:[18,50]},
];
let CITY_DATA = FALLBACK_CITIES;
const VERSES=[
{a:"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",t:"The month of Ramadan in which the Quran was revealed — a guidance for mankind.",r:"Al-Baqarah 2:185"},
{a:"وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",t:"When My servants ask you about Me — indeed I am near.",r:"Al-Baqarah 2:186"},
{a:"إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",t:"Indeed, Allah is with the patient ones.",r:"Al-Baqarah 2:153"},
{a:"وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",t:"Seek help through patience and prayer.",r:"Al-Baqarah 2:45"},
{a:"إِنَّ مَعَ الْعُسْرِ يُسْرًا",t:"Indeed, with hardship will be ease.",r:"Al-Inshirah 94:6"},
{a:"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي",t:"Remember Me and I will remember you. Be grateful to Me.",r:"Al-Baqarah 2:152"},
{a:"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",t:"Whoever fears Allah — He will make for him a way out.",r:"At-Talaq 65:2"},
{a:"إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",t:"The believers are but brothers.",r:"Al-Hujurat 49:10"},
{a:"إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",t:"And Allah loves the doers of good.",r:"Ali Imran 3:134"},
{a:"إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",t:"Allah loves those who repent and those who purify themselves.",r:"Al-Baqarah 2:222"},
{a:"وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",t:"We have not sent you except as a mercy to the worlds.",r:"Al-Anbiya 21:107"},
{a:"لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",t:"The Night of Decree is better than a thousand months.",r:"Al-Qadr 97:3"},
{a:"تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم",t:"The angels and the Spirit descend therein by permission of their Lord.",r:"Al-Qadr 97:4"},
{a:"سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",t:"Peace it is — until the emergence of dawn.",r:"Al-Qadr 97:5"},
{a:"وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ",t:"In the hours before dawn, they would seek forgiveness.",r:"Adh-Dhariyat 51:18"},
{a:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",t:"Our Lord, grant us good in this world and good in the Hereafter.",r:"Al-Baqarah 2:201"},
{a:"إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ",t:"Indeed, good deeds remove evil deeds.",r:"Hud 11:114"},
{a:"وَأَنفِقُوا فِي سَبِيلِ اللَّهِ",t:"And spend in the way of Allah.",r:"Al-Baqarah 2:195"},
{a:"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",t:"Establish prayer and give Zakat.",r:"Al-Baqarah 2:43"},
{a:"ادْعُونِي أَسْتَجِبْ لَكُمْ",t:"Call upon Me — I will respond to you.",r:"Ghafir 40:60"},
{a:"وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",t:"Whoever does an atom's weight of good will see it.",r:"Az-Zalzalah 99:7"},
{a:"يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا",t:"O believers, repent to Allah with sincere repentance.",r:"At-Tahrim 66:8"},
{a:"حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ",t:"Maintain carefully the obligatory prayers, especially the middle prayer.",r:"Al-Baqarah 2:238"},
{a:"وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",t:"And remind, for the reminder benefits the believers.",r:"Adh-Dhariyat 51:55"},
{a:"اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",t:"Allah is the protector of those who believe.",r:"Al-Baqarah 2:257"},
{a:"وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ",t:"And turn to Allah in repentance — all of you, O believers.",r:"An-Nur 24:31"},
{a:"إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا",t:"Indeed, Allah is with those who fear Him.",r:"An-Nahl 16:128"},
{a:"وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",t:"Whoever puts his trust in Allah — He is sufficient for him.",r:"At-Talaq 65:3"},
{a:"الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",t:"This day I have perfected your religion for you.",r:"Al-Ma'idah 5:3"},
{a:"وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",t:"Be grateful for Allah's favour if it is Him you worship.",r:"An-Nahl 16:114"},
];
const RDATES=[];const EID=new Date(2026,2,20);
for(let i=0;i<30;i++){const d=new Date(2026,1,19);d.setDate(d.getDate()+i);RDATES.push(d);}
const MONS=["January","February","March","April","May","June","July","August","September","October","November","December"];
const SM=["Jan","Feb","Mar"];
const SD=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const FD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const ORD=["","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th"];
let city=CITY_DATA[0]; // will be updated by geolocation
let sAlertShown=false,iAlertShown=false,remOn=true,lastSpoke="";
let sRFired=false,sPassedFired=false,iWarnFired=false;
let tsMode=0,tsCounts=[0,0,0],tsGoal=33;
const TS=[{a:"سُبْحَانَ اللَّهِ",e:"SUBHANALLAH"},{a:"الْحَمْدُ لِلَّهِ",e:"ALHAMDULILLAH"},{a:"اللَّهُ أَكْبَر",e:"ALLAHU AKBAR"}];
let rk=Array(20).fill(false);

function getBasePath(){
  const parts = location.pathname.split('/').filter(Boolean);
  return parts.length ? '/' + parts[0] + '/' : '/';
}
const BASE = getBasePath();

function h12(h,m){return`${h%12||12}:${String(m).padStart(2,"0")} ${h>=12?"PM":"AM"}`;}
function rIdx(d){const t=new Date(d.getFullYear(),d.getMonth(),d.getDate());for(let i=0;i<RDATES.length;i++)if(RDATES[i].getTime()===t.getTime())return i;return-1;}
function getTT(){const i=rIdx(new Date());if(i<0)return null;const sc=city.s[i];return{i,sh:sc[0],sm:sc[1],ih:sc[2],im:sc[3]};}
function $(id){return document.getElementById(id);}
function setText(id,v){const e=$(id);if(e)e.textContent=v;}
function setHTML(id,v){const e=$(id);if(e)e.innerHTML=v;}

function initStars(){
  const c=$("stars");
  for(let i=0;i<130;i++){const s=document.createElement("div");s.className="star";const sz=Math.random()*2.2+0.4;s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${1.8+Math.random()*4}s;--o:${0.3+Math.random()*0.7};animation-delay:${Math.random()*7}s`;c.appendChild(s);}
  for(let i=0;i<5;i++){const ss=document.createElement("div");ss.className="shoot";const a=(28+Math.random()*22)*Math.PI/180,dist=180+Math.random()*200;ss.style.cssText=`left:${5+Math.random()*55}%;top:${3+Math.random()*28}%;--sd:${7+Math.random()*9}s;--dl:${i*2.5+Math.random()*4}s;--dx:${Math.cos(a)*dist};--dy:${Math.sin(a)*dist};--tl:${35+Math.random()*55}px`;c.appendChild(ss);}
  for(let i=0;i<22;i++){const p=document.createElement("div");p.className="noor";p.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*50}%;--rd:${3+Math.random()*5}s;--rl:${Math.random()*7}s`;c.appendChild(p);}
}

function geoDetectCity(){
  if(!("geolocation"in navigator))return;
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat=pos.coords.latitude, lon=pos.coords.longitude;
    // City center coordinates for matching
    var CITY_COORDS={
      PUNE:{lat:18.5204,lon:73.8567},
      MUMBAI:{lat:19.0760,lon:72.8777},
      DELHI:{lat:28.7041,lon:77.1025},
      HYDERABAD:{lat:17.3850,lon:78.4867},
      LUCKNOW:{lat:26.8467,lon:80.9462},
      BANGALORE:{lat:12.9716,lon:77.5946},
      CHENNAI:{lat:13.0827,lon:80.2707},
      KOLKATA:{lat:22.5726,lon:88.3639}
    };
    // Find nearest city using simple distance
    var best=null, bestDist=999999;
    Object.keys(CITY_COORDS).forEach(function(name){
      var c=CITY_COORDS[name];
      var d=Math.sqrt(Math.pow(lat-c.lat,2)+Math.pow(lon-c.lon,2));
      if(d<bestDist){bestDist=d;best=name;}
    });
    // Only switch if city is within ~400km (roughly 3.5 degrees)
    if(best && bestDist < 3.5){
      var found=CITY_DATA.find(function(c){return c.n===best;});
      if(found && found.n!==city.n){
        city=found;
        buildCitySw("city");buildCitySw("sc");
        renderCities();renderSched();updatePrayers();
        setText("hi-city",city.n);setText("sc-city",city.n);
        // Update Qibla if already initialized
        qiblaInit=false; // reset so it re-runs with new city
      }
    }
  },function(){
    // Permission denied or error — keep default Pune
  },{timeout:6000,maximumAge:3600000});
}

function showTab(id){
  document.querySelectorAll(".sec").forEach(s=>s.classList.remove("on"));
  document.querySelectorAll(".tb").forEach(t=>t.classList.remove("on"));
  $("sec-"+id).classList.add("on");
  $("tb-"+id).classList.add("on");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="sched")renderSched();
  if(id==="asma")asmaBuild();
  if(id==="tools"){
    // restore last active tool pill or default to ts
    var activePill=document.querySelector(".tpill.on");
    var activeId=activePill?activePill.id.replace("tp-",""):"ts";
    showTool(activeId);
    if(activeId==="qb")initQibla();
  }
}

function buildCitySw(pfx){
  const el=$(pfx+"-sw");if(!el)return;
  el.innerHTML=CITY_DATA.map(c=>`<div class="cbtn${c.n===city.n?" on":""}" onclick="switchCity('${c.n}','${pfx}')">${c.n}</div>`).join("");
}
function switchCity(name,pfx){
  city=CITY_DATA.find(c=>c.n===name)||CITY_DATA[0];
  buildCitySw("city");buildCitySw("sc");
  renderCities();renderSched();updatePrayers();
  setText("hi-city",city.n);setText("sc-city",city.n);
}

function renderCities(){
  const idx=Math.max(0,rIdx(new Date()));
  setHTML("cities-grid",CITY_DATA.map(c=>{
    const sc=c.s[idx];
    return`<div class="ccard${c.n===city.n?" on":""}" onclick="switchCity('${c.n}','city')">
      <div class="c-name">${c.n}${c.def?'<span class="def-tag">DEFAULT</span>':""}</div>
      <div class="c-row"><span style="color:var(--blue)">●</span>&nbsp;SEHRI<span class="c-time">${h12(sc[0],sc[1])}</span></div>
      <div class="c-row"><span style="color:var(--gold)">●</span>&nbsp;IFTAR<span class="c-time">${h12(sc[2],sc[3])}</span></div>
    </div>`;
  }).join(""));
}

function renderSched(){
  const now=new Date(),today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  let html="";
  RDATES.forEach((rd,i)=>{
    const rn=i+1,isT=rd.getTime()===today.getTime(),isP=rd<today;
    const dl=Math.max(0,Math.ceil((rd-today)/86400000));
    const sc=city.s[i],isJ=rd.getDay()===5,isQ=[21,23,25,27,29].includes(rn);
    html+=`<div class="srow${isT?" tod":""}${isP?" past":""}${isQ?" qadr":""}">
      <div class="sc"><span class="sc-d">${SD[rd.getDay()]}, ${rd.getDate()} ${["Jan","Feb","Mar"][rd.getMonth()]}</span>${isT?'<span class="t-pill">TODAY</span>':""}</div>
      <div class="sc"><span class="sc-day${isJ?" juma":""}">${FD[rd.getDay()]}</span></div>
      <div class="sc"><span class="sc-rn">${rn}</span></div>
      <div class="sc"><span class="sc-tm">${h12(sc[0],sc[1])}</span></div>
      <div class="sc"><span class="sc-tm">${h12(sc[2],sc[3])}</span></div>
      <div class="sc"><span class="sc-rm">${isP?"✓":dl===0?"TODAY":dl+"d"}</span></div>
    </div>`;
  });
  setHTML("sched-body",html);
}

function updatePrayers(){
  const t=getTT();if(!t)return;
  setText("t-fajr",h12(t.sh,t.sm));setText("t-maghrib",h12(t.ih,t.im));
  setText("t-dhuhr",h12(city.dh[0],city.dh[1]));setText("t-asr",h12(city.as[0],city.as[1]));
  setText("t-isha",h12(city.is[0],city.is[1]));
  const tm=city.is[1]+20;setText("t-tarawih",h12(city.is[0]+(tm>=60?1:0),tm%60));
}

function updateVerse(){
  const ri=rIdx(new Date());
  const idx=ri>=0?ri:Math.max(0,Math.min(29,Math.floor((Date.now()-new Date(2026,1,19))/86400000)));
  const v=VERSES[Math.min(idx,29)];
  setText("qv-ar",v.a);setText("qv-tr",v.t);setText("qv-ref",v.r);
}

function updateNights(){
  const t=new Date();const today=new Date(t.getFullYear(),t.getMonth(),t.getDate());
  [{id:"nb-15",d:new Date(2026,2,4)},{id:"nb-21",d:new Date(2026,2,10)},{id:"nb-23",d:new Date(2026,2,12)},{id:"nb-25",d:new Date(2026,2,14)},{id:"nb-27",d:new Date(2026,2,16)},{id:"nb-29",d:new Date(2026,2,18)}].forEach(n=>{
    const el=$(n.id);if(!el)return;
    if(n.d.getTime()===today.getTime()){el.textContent="TONIGHT";el.style.color="var(--green)";el.style.borderColor="var(--green)";}
    else if(n.d<today){el.textContent="PASSED";el.className="nbadge past";}
  });
}

function toggleRem(){
  const tog=$("rem-tog");remOn=!remOn;tog.classList.toggle("on",remOn);
  if(remOn&&"speechSynthesis"in window)speak("Voice reminders enabled.");
}
function speak(msg){
  if(!remOn||!("speechSynthesis"in window)||lastSpoke===msg)return;
  lastSpoke=msg;window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(msg);u.lang="en-IN";u.rate=0.9;u.volume=1;
  window.speechSynthesis.speak(u);setTimeout(()=>{lastSpoke="";},90000);
}

// TASBEEH
function setTs(m){
  tsMode=m;
  document.querySelectorAll(".ts-opt").forEach((b,i)=>b.classList.toggle("on",i===m));
  setText("ts-big-ar",TS[m].a);setText("ts-big-en",TS[m].e);updTs();
}
function tapTs(e){
  tsCounts[tsMode]++;saveState();
  if(navigator.vibrate)navigator.vibrate(30);
  const btn=$("ts-big");
  const r=document.createElement("div");r.className="ripple";
  const rc=btn.getBoundingClientRect();
  r.style.cssText=`left:${(e.clientX||rc.left+rc.width/2)-rc.left}px;top:${(e.clientY||rc.top+rc.height/2)-rc.top}px`;
  btn.appendChild(r);setTimeout(()=>r.remove(),700);
  if(tsCounts[tsMode]%33===0&&navigator.vibrate)navigator.vibrate([50,30,50,30,100]);
  updTs();
}
function updTs(){
  const c=tsCounts[tsMode];
  setText("ts-cnt",c);
  const inSet=c%tsGoal,sets=Math.floor(c/tsGoal);
  const tspf=$("ts-pf");if(tspf)tspf.style.width=(inSet===0&&c>0?100:Math.min(100,inSet*100/tsGoal))+"%";
  setText("ts-info",`${inSet} / ${tsGoal} · Sets: ${sets} · Total: ${c}`);
  for(let i=0;i<3;i++)setText("ts-t"+i,tsCounts[i]);
}
function tsUndo(){if(tsCounts[tsMode]>0){tsCounts[tsMode]--;updTs();}}
function tsReset(){tsCounts[tsMode]=0;updTs();}
function openTsGoal(){const g=parseInt(prompt("Set goal (e.g. 33, 100):",tsGoal));if(g>0){tsGoal=g;updTs();}}

// TARAWEEH
// buildRkGrid defined below
// toggleRk defined below
// twReset defined below

// ZAKAT
// Helper: format number in Indian style (e.g. 12,34,567)
function fmtINR(n){
  if(n===0)return"0";
  return Math.round(n).toLocaleString("en-IN");
}
// Helper: convert number to readable words (crore/lakh)
function numWords(n){
  if(n<=0)return"";
  if(n>=10000000)return(n/10000000).toFixed(2).replace(/\.?0+$/,"")+" Crore";
  if(n>=100000)return(n/100000).toFixed(2).replace(/\.?0+$/,"")+" Lakh";
  if(n>=1000)return(n/1000).toFixed(1).replace(/\.?0+$/,"")+" Thousand";
  return"₹"+fmtINR(n);
}

function calcZ(){
  // Read inputs — Cash & Bank
  var cash=parseFloat(document.getElementById("z-cash").value)||0;

  // Gold — 3 karats separately
  var g24Qty=parseFloat(document.getElementById("z-g24-qty").value)||0;
  var g24Rate=parseFloat(document.getElementById("z-g24-rate").value)||0;
  var g22Qty=parseFloat(document.getElementById("z-g22-qty").value)||0;
  var g22Rate=parseFloat(document.getElementById("z-g22-rate").value)||0;
  var g18Qty=parseFloat(document.getElementById("z-g18-qty").value)||0;
  var g18Rate=parseFloat(document.getElementById("z-g18-rate").value)||0;

  // Silver
  var sQty=parseFloat(document.getElementById("z-s-qty").value)||0;
  var sRate=parseFloat(document.getElementById("z-s-rate").value)||0;

  // Others
  var inv=parseFloat(document.getElementById("z-inv").value)||0;
  var recv=parseFloat(document.getElementById("z-recv").value)||0;

  // Validate: if qty entered but rate missing, warn user
  var showRateWarn=function(karat, qtyFilled, rateFilled){
    var warn=document.getElementById('z-g'+karat+'-rate-warn');
    var inp=document.getElementById('z-g'+karat+'-rate');
    if(warn) warn.style.display=(qtyFilled&&!rateFilled)?'inline':'none';
    if(inp) inp.style.borderColor=(qtyFilled&&!rateFilled)?'rgba(220,50,50,.7)':'';
  };
  showRateWarn('24', g24Qty>0, g24Rate>0);
  showRateWarn('22', g22Qty>0, g22Rate>0);
  showRateWarn('18', g18Qty>0, g18Rate>0);

  // Compute each gold karat value
  var g24Val=g24Qty*g24Rate;
  var g22Val=g22Qty*g22Rate;
  var g18Val=g18Qty*g18Rate;
  var goldVal=g24Val+g22Val+g18Val; // Total gold

  // Silver
  var silvVal=sQty*sRate;

  // Show/hide computed rows for each karat
  var show=function(id,val,label){
    var el=document.getElementById(id);
    if(el){el.style.display=(val>0?"flex":"none");}
    setText(id.replace("-computed","-val"),"₹"+fmtINR(val));
  };
  show("z-g24-computed",g24Val);
  show("z-g22-computed",g22Val);
  show("z-g18-computed",g18Val);

  // Total gold row — show only if any gold entered
  var gTotalRow=document.getElementById("z-g-total-row");
  if(gTotalRow){gTotalRow.style.display=(goldVal>0?"flex":"none");}
  setText("z-g-val","₹"+fmtINR(goldVal));

  // Silver computed row
  var sComp=document.getElementById("z-s-computed");
  if(sComp){sComp.style.display=(silvVal>0?"flex":"none");}
  setText("z-s-val","₹"+fmtINR(silvVal));

  // Total zakatable wealth
  var total=cash+goldVal+silvVal+inv+recv;
  var zakat=Math.round(total*0.025);

  // Nisab check — use highest entered gold rate for reference, or silver nisab
  // Best ref rate: use 24K rate if available, else 22K, else 18K
  var refGoldRate=g24Rate||g22Rate||g18Rate;
  var nisabEl=document.getElementById("zk-nisab-check");
  var nisabMet=false;
  var nisabLine="";
  if(total>0){
    if(refGoldRate>0){
      var goldNisab=85*refGoldRate;
      nisabMet=total>=goldNisab;
      var karatLabel=g24Rate?"24K":g22Rate?"22K":"18K";
      nisabLine="Gold Nisab (85g × ₹"+fmtINR(refGoldRate)+"/g "+karatLabel+") = ₹"+fmtINR(goldNisab);
    } else if(sRate>0){
      var silvNisab=595*sRate;
      nisabMet=total>=silvNisab;
      nisabLine="Silver Nisab (595g × ₹"+fmtINR(sRate)+"/g) = ₹"+fmtINR(silvNisab);
    } else {
      // No gold or silver rate entered — cannot verify Nisab, treat as unverified
      nisabMet=false;
      nisabLine="unverified";
    }
    // Also flag if ANY gold qty is entered without its rate
    var goldQtyWithoutRate=(g24Qty>0&&!g24Rate)||(g22Qty>0&&!g22Rate)||(g18Qty>0&&!g18Rate);
    if(goldQtyWithoutRate && nisabLine!=="unverified"){
      // Some gold has qty but no rate — Nisab calculation incomplete
      nisabMet=false;
      nisabLine="incomplete";
    }
    if(nisabEl){
      if(nisabLine==="incomplete"){
        nisabEl.className="zk-nisab-check not-eligible";
        nisabEl.innerHTML='<div class="zk-nc-icon">⚠️</div>'
          +'<div class="zk-nc-title" style="color:#f0a030">GOLD RATE MISSING</div>'
          +'<div class="zk-nc-sub">You have entered a gold quantity but no rate. Please enter <strong style="color:var(--cream)">today&#39;s gold rate (&#8377;/gram)</strong> for each karat you own — required to calculate Nisab and Zakat correctly.</div>';
      } else if(nisabLine==="unverified"){
        // Special state: assets entered but no rate to check Nisab against
        nisabEl.className="zk-nisab-check not-eligible";
        nisabEl.innerHTML='<div class="zk-nc-icon">⚠️</div>'
          +'<div class="zk-nc-title" style="color:#f0a030">NISAB NOT VERIFIED</div>'
          +'<div class="zk-nc-sub">Please enter today&#39;s <strong style="color:var(--cream)">gold or silver rate</strong> in the fields above so we can check if your wealth meets the Nisab threshold before calculating Zakat.</div>';
      } else if(nisabMet){
        nisabEl.className="zk-nisab-check eligible";
        nisabEl.innerHTML='<div class="zk-nc-icon">✅</div>'
          +'<div class="zk-nc-title" style="color:var(--green)">ZAKAT IS DUE ON YOU</div>'
          +'<div class="zk-nc-sub">'+nisabLine+'<br>Your wealth <strong style="color:var(--cream)">₹'+fmtINR(total)+'</strong> meets the Nisab threshold.</div>';
      } else {
        nisabEl.className="zk-nisab-check not-eligible";
        nisabEl.innerHTML='<div class="zk-nc-icon">ℹ️</div>'
          +'<div class="zk-nc-title" style="color:#f0a030">NISAB NOT YET MET</div>'
          +'<div class="zk-nc-sub">'+nisabLine+'<br>Your wealth <strong style="color:var(--cream)">₹'+fmtINR(total)+'</strong> is below the Nisab. No Zakat due this year.</div>';
      }
    }
  } else {
    if(nisabEl){
      nisabEl.className="zk-nisab-check empty";
      nisabEl.innerHTML='<div class="zk-nc-icon">⚖️</div>'
        +'<div class="zk-nc-title" style="color:var(--muted)">NISAB STATUS</div>'
        +'<div class="zk-nc-sub">Fill in your assets above to check if Zakat is due on you</div>';
    }
  }

  // Display total
  setText("zk-total",(nisabMet&&total>0)?fmtINR(zakat):"0");
  setText("zk-total-words",(nisabMet&&zakat>0)?"₹ "+numWords(zakat)+" due":"");

  // Breakdown — show each gold karat separately
  var items=[];
  if(cash>0)items.push({l:"💵 Cash & Bank",v:Math.round(cash*0.025),w:fmtINR(cash)});
  if(g24Val>0)items.push({l:"🥇 Gold 24K ("+g24Qty+"g × ₹"+fmtINR(g24Rate)+")",v:Math.round(g24Val*0.025),w:fmtINR(g24Val)});
  if(g22Val>0)items.push({l:"🥇 Gold 22K ("+g22Qty+"g × ₹"+fmtINR(g22Rate)+")",v:Math.round(g22Val*0.025),w:fmtINR(g22Val)});
  if(g18Val>0)items.push({l:"🥇 Gold 18K ("+g18Qty+"g × ₹"+fmtINR(g18Rate)+")",v:Math.round(g18Val*0.025),w:fmtINR(g18Val)});
  if(silvVal>0)items.push({l:"🥈 Silver ("+sQty+"g × ₹"+fmtINR(sRate)+")",v:Math.round(silvVal*0.025),w:fmtINR(silvVal)});
  if(inv>0)items.push({l:"📈 Investments",v:Math.round(inv*0.025),w:fmtINR(inv)});
  if(recv>0)items.push({l:"🤝 Receivables",v:Math.round(recv*0.025),w:fmtINR(recv)});

  var bd="";
  if(items.length>0){
    bd+="<div style=\"font-family:'Cinzel',serif;font-size:9px;letter-spacing:2px;color:var(--muted);text-align:center;margin-bottom:8px;margin-top:4px\">BREAKDOWN</div>";
    for(var i=0;i<items.length;i++){
      bd+="<div class=\"zk-bl\">"
        +"<span class=\"zk-bl-l\" style=\"font-size:11px\">"+items[i].l+"</span>"
        +"<span style=\"display:flex;flex-direction:column;align-items:flex-end\">"
        +"<span class=\"zk-bl-v\">₹"+fmtINR(items[i].v)+"</span>"
        +"<span style=\"font-family:'Cinzel',serif;font-size:9px;color:var(--muted)\">on ₹"+items[i].w+"</span>"
        +"</span></div>";
    }
    bd+="<div class=\"zk-bl\" style=\"border-top:1px solid rgba(76,175,125,.3);margin-top:4px\">"
      +"<span class=\"zk-bl-l\" style=\"color:var(--green)\">TOTAL WEALTH</span>"
      +"<span class=\"zk-bl-v\" style=\"color:var(--green)\">₹"+fmtINR(total)+"</span>"
      +"</div>";
  }
  setHTML("zk-bd",bd);
}

function zReset(){
  ["z-cash","z-g24-qty","z-g24-rate","z-g22-qty","z-g22-rate","z-g18-qty","z-g18-rate","z-s-qty","z-s-rate","z-inv","z-recv"].forEach(function(id){
    var e=$(id);if(e)e.value="";
  });
  calcZ();
}

// MAIN TICK
function tick(){
  const now=new Date();
  setText("clock",`${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`);
  setText("td-date",`${FD[now.getDay()]}, ${now.getDate()} ${MONS[now.getMonth()]} ${now.getFullYear()}`);

  const ri=rIdx(now);
  if(ri>=0){
    const rn=ri+1;
    setText("roza-lbl",`TODAY · ${rn}${["","ST","ND","RD"][rn]||"TH"} ROZA · RAMADAN 1447 AH`);
    setText("rh-num",ORD[rn]);
    const pct=Math.round((rn/30)*100);
    setText("rh-pct",`${pct}% complete`);
    // mfill removed
  }else{
    setText("roza-lbl","RAMADAN 1447 AH · INDIA");
    setText("rh-num","--");
  }

  // eid countdown removed

  const t=getTT();if(!t)return;
  const{sh,sm,ih,im}=t;
  const nowS=now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
  const sS=sh*3600+sm*60,iS=ih*3600+im*60;
  const pastS=nowS>=sS,pastI=nowS>=iS;

  setText("s-time",h12(sh,sm));setText("i-time",h12(ih,im));
  $("s-st").textContent=pastS?"PASSED":"UPCOMING";$("s-st").className="stag "+(pastS?"tag-p":"tag-u");
  $("i-st").textContent=pastI?"PASSED":"UPCOMING";$("i-st").className="stag "+(pastI?"tag-p":"tag-u");

  // Hero info
  setText("hi-sh",h12(sh,sm));setText("hi-if",h12(ih,im));
  setText("hi-roza",ri>=0?`${ri+1}${["","ST","ND","RD"][ri+1]||"TH"} ROZA`:"-- ROZA");
  const shSt=$("hi-sh-st"),ifSt=$("hi-if-st");
  if(shSt){shSt.textContent=pastS?"PASSED":"UPCOMING";shSt.className="ht-st "+(pastS?"pa":"up");}
  if(ifSt){ifSt.textContent=pastI?"PASSED":"UPCOMING";ifSt.className="ht-st "+(pastI?"pa":"up");}

  // Countdown
  let diff=0,lbl="";
  if(!pastS){diff=sS-nowS;lbl="🌙 SEHRI ENDS IN";}
  else if(!pastI){diff=iS-nowS;lbl="☀️ TIME UNTIL IFTAR";}
  else{diff=0;lbl="🌙 ALHAMDULILLAH · ROZA COMPLETE";}
  setText("cd-lbl",lbl);
  setText("cd-h",String(Math.floor(diff/3600)).padStart(2,"0"));
  setText("cd-m",String(Math.floor((diff%3600)/60)).padStart(2,"0"));
  setText("cd-s",String(diff%60).padStart(2,"0"));

  // Active prayer highlight
  const dS=city.dh[0]*3600+city.dh[1]*60,aS=city.as[0]*3600+city.as[1]*60,isS=city.is[0]*3600+city.is[1]*60;
  [{id:"pt-fajr",from:sS,to:dS},{id:"pt-dhuhr",from:dS,to:aS},{id:"pt-asr",from:aS,to:iS},{id:"pt-maghrib",from:iS,to:isS},{id:"pt-isha",from:isS,to:86400}].forEach(p=>{
    const el=$(p.id);if(el)el.className="pt"+(nowS>=p.from&&nowS<p.to?" ap":"");
  });

  // SEHRI alert — 10 min warning
  const fMin=(sS-nowS)/60;
  if(fMin>0&&fMin<=10&&!sAlertShown){
    $("alert-s").classList.remove("hidden");sAlertShown=true;
    if(!sRFired){speak(`Sehri ends in ${Math.ceil(fMin)} minutes. Please finish eating.`);sRFired=true;}
  }else if(fMin<=0){
    $("alert-s").classList.add("hidden");
    if(fMin<-3)sAlertShown=false;
    if(fMin>=-1&&fMin<0&&!sPassedFired){speak("Sehri time has finished. Your fast has now begun. May Allah accept your fast.");sPassedFired=true;}
  }

  // IFTAR alert
  const iMin=(iS-nowS)/60;
  if(iMin>0&&iMin<=5&&!iWarnFired){speak(`Iftar in ${Math.ceil(iMin)} minute${Math.ceil(iMin)>1?"s":""}. Prepare to break your fast.`);iWarnFired=true;}
  if(iMin<=0&&iMin>-2&&!iAlertShown){
    $("alert-i").classList.remove("hidden");iAlertShown=true;
    speak("Alhamdulillah! Iftar time has arrived. You may now break your fast. Ramadan Mubarak!");
    setTimeout(()=>$("alert-i").classList.add("hidden"),120000);
  }
}

// ── TOOL PILL SWITCHER ────────────────────────────────────────────────────
function showTool(id){
  ["ts","tw","zk","qp","ft","qb"].forEach(function(t){
    var p=document.getElementById("tool-"+t);
    var b=document.getElementById("tp-"+t);
    if(p)p.style.display=(t===id?"block":"none");
    if(b){b.classList.remove("on");if(t===id)b.classList.add("on");}
  });
  if(id==="qb")initQibla();
}

// ── TARAWEEH TRACKER ─────────────────────────────────────────────────────
function buildRkGrid(){
  var h="";
  for(var i=0;i<20;i++){
    var cls="rk-circle"+(rk[i]?" rk-done":"");
    h+="<div class=\""+cls+"\" onclick=\"toggleRk("+i+")\"></div>";
  }
  setHTML("rk-grid",h);
}
function toggleRk(i){
  rk[i]=!rk[i];
  if(navigator.vibrate)navigator.vibrate(25);
  buildRkGrid();
  var c=rk.filter(Boolean).length;
  setText("tw-cnt",String(c));
  var pf=document.getElementById("tw-pf");
  if(pf)pf.style.width=Math.min(100,c*5)+"%";
  saveState();
}
function twAdd(n){
  var cur=rk.filter(Boolean).length;
  var nxt=Math.max(0,Math.min(20,cur+n));
  rk=rk.map(function(_,i){return i<nxt;});
  if(navigator.vibrate)navigator.vibrate(n>0?[30,20,30]:15);
  buildRkGrid();
  var c=rk.filter(Boolean).length;
  setText("tw-cnt",String(c));
  var pf=document.getElementById("tw-pf");
  if(pf)pf.style.width=Math.min(100,c*5)+"%";
  saveState();
}
function twReset(){
  rk=Array(20).fill(false);
  buildRkGrid();
  setText("tw-cnt","0");
  var pf=document.getElementById("tw-pf");
  if(pf)pf.style.width="0%";
  saveState();
}

// ── QURAN PROGRESS TRACKER ────────────────────────────────────────────────
var qpData=Array(30).fill(false);
function qpBuild(){
  var h="";
  for(var i=0;i<30;i++){
    var done=qpData[i];
    h+="<div class=\"qp-juz"+(done?" qp-done":"")+"\" onclick=\"qpToggle("+i+")\">"
      +"<div class=\"qp-juz-n\">"+(i+1)+"</div>"
      +"<div class=\"qp-juz-lbl\">JUZ</div>"
      +(done?"<div class=\"qp-check\">✓</div>":"")
      +"</div>";
  }
  setHTML("qp-grid",h);
  var done=qpData.filter(Boolean).length;
  setText("qp-done",String(done));
  setText("qp-left",String(30-done));
  setText("qp-pct",Math.round(done/30*100)+"%");
  var pf=document.getElementById("qp-pf");
  if(pf)pf.style.width=Math.round(done/30*100)+"%";
}
function qpToggle(i){
  qpData[i]=!qpData[i];
  if(navigator.vibrate)navigator.vibrate(25);
  qpBuild();
  saveState();
}
function qpReset(){qpData=Array(30).fill(false);qpBuild();saveState();}

// ── FITRANA CALCULATOR ────────────────────────────────────────────────────
var ftMembers={self:1,spouse:0,child:0,dep:0};
var ftRate=75;
function ftChange(key,delta){
  ftMembers[key]=Math.max(0,ftMembers[key]+delta);
  if(key==="self"&&ftMembers[key]<1)ftMembers[key]=1;
  setText("ft-"+key,String(ftMembers[key]));
  if(navigator.vibrate)navigator.vibrate(20);
  ftCalc();
  saveState();
}
function ftSetRate(r){
  ftRate=r;
  ["ft-r1","ft-r2","ft-r3"].forEach(function(id){
    var el=document.getElementById(id);
    if(el)el.classList.remove("on");
  });
  var customRow=document.getElementById("ft-custom-row");
  if(r===75){var el=document.getElementById("ft-r1");if(el)el.classList.add("on");}
  else if(r===450){var el=document.getElementById("ft-r2");if(el)el.classList.add("on");}
  else{var el=document.getElementById("ft-r3");if(el)el.classList.add("on");}
  if(customRow)customRow.style.display=(r===0?"block":"none");
  ftCalc();
  saveState();
}
function ftCalc(){
  var rate=ftRate;
  if(rate===0){var inp=document.getElementById("ft-custom");rate=parseFloat(inp?inp.value:0)||0;}
  var total=ftMembers.self+ftMembers.spouse+ftMembers.child+ftMembers.dep;
  var due=total*rate;
  setText("ft-total",due.toLocaleString("en-IN"));
  var parts=[];
  if(ftMembers.self>0)parts.push(ftMembers.self+" Self");
  if(ftMembers.spouse>0)parts.push(ftMembers.spouse+" Spouse");
  if(ftMembers.child>0)parts.push(ftMembers.child+" Child"+(ftMembers.child>1?"ren":""));
  if(ftMembers.dep>0)parts.push(ftMembers.dep+" Dep"+(ftMembers.dep>1?"s":""));
  setText("ft-breakdown",parts.join(", ")+" x Rs."+rate+" = Rs."+due.toLocaleString("en-IN"));
}

// ── LOCAL STORAGE PERSISTENCE ─────────────────────────────────────────────
var LS_KEY="rm2026";
function saveState(){
  try{
    var b=document.getElementById("save-badge");if(b){b.classList.add("show");clearTimeout(b._t);b._t=setTimeout(function(){b.classList.remove("show");},1200);}
    localStorage.setItem(LS_KEY,JSON.stringify({
      qpData:qpData,
      rk:rk,
      tsCounts:tsCounts,
      tsMode:tsMode,
      tsGoal:tsGoal,
      ftMembers:ftMembers,
      ftRate:ftRate,
      cityName:city?city.n:null
    }));
  }catch(e){}
}
function loadState(){
  try{
    var raw=localStorage.getItem(LS_KEY);
    if(!raw)return;
    var s=JSON.parse(raw);
    if(s.qpData&&s.qpData.length===30)qpData=s.qpData;
    if(s.rk&&s.rk.length===20)rk=s.rk;
    if(s.tsCounts&&s.tsCounts.length===3)tsCounts=s.tsCounts;
    if(typeof s.tsMode==="number")tsMode=s.tsMode;
    if(typeof s.tsGoal==="number")tsGoal=s.tsGoal;
    if(s.ftMembers)ftMembers=s.ftMembers;
    if(typeof s.ftRate==="number")ftRate=s.ftRate;
    if(s.cityName){var found=CITY_DATA.find(function(c){return c.n===s.cityName;});if(found)city=found;}
  }catch(e){}
}



// ── 99 NAMES OF ALLAH (ASMA UL HUSNA) ────────────────────────────────────
var ASMA=[
  // MERCY category
  {n:1,ar:"الرَّحْمَنُ",en:"Ar-Rahman",meaning:"The Most Gracious — His mercy encompasses all creation without exception",cat:"mercy"},
  {n:2,ar:"الرَّحِيمُ",en:"Ar-Raheem",meaning:"The Most Merciful — His special, ongoing mercy for the believers",cat:"mercy"},
  {n:3,ar:"الْبَرُّ",en:"Al-Barr",meaning:"The Source of All Goodness — the Doer of good, the Kindly",cat:"mercy"},
  {n:4,ar:"اللَّطِيفُ",en:"Al-Lateef",meaning:"The Subtle and Kind — so gentle His blessings reach without us noticing",cat:"mercy"},
  {n:5,ar:"الرَّؤُوفُ",en:"Ar-Ra'oof",meaning:"The Ever-Pitying — intensely compassionate and tender",cat:"mercy"},
  {n:6,ar:"الْوَدُودُ",en:"Al-Wadood",meaning:"The Most Loving — the only truly unconditional Love",cat:"mercy"},
  {n:7,ar:"الشَّكُورُ",en:"Ash-Shakoor",meaning:"The Appreciative — rewards even the smallest good deed greatly",cat:"mercy"},
  {n:8,ar:"الْحَلِيمُ",en:"Al-Haleem",meaning:"The Forbearing — never hastens punishment, always gives time to repent",cat:"mercy"},
  {n:9,ar:"التَّوَّابُ",en:"At-Tawwab",meaning:"The Acceptor of Repentance — returns to His servant with mercy again and again",cat:"mercy"},
  {n:10,ar:"الْغَفُورُ",en:"Al-Ghafoor",meaning:"The Oft-Forgiving — covers sins and erases them completely",cat:"mercy"},
  {n:11,ar:"الْعَفُوُّ",en:"Al-Afuww",meaning:"The Pardoner — wipes out sins as if they never existed",cat:"mercy"},
  {n:12,ar:"الْغَفَّارُ",en:"Al-Ghaffar",meaning:"The Constant Forgiver — forgives repeatedly no matter how many times",cat:"mercy"},
  // POWER category
  {n:13,ar:"الْقَادِرُ",en:"Al-Qadir",meaning:"The All-Powerful — capable of everything with no effort or limitation",cat:"power"},
  {n:14,ar:"الْقَوِيُّ",en:"Al-Qawiyy",meaning:"The All-Strong — strength that never weakens, never tires",cat:"power"},
  {n:15,ar:"الْعَزِيزُ",en:"Al-Azeez",meaning:"The Almighty — mighty and invincible, none can overpower Him",cat:"power"},
  {n:16,ar:"الْجَبَّارُ",en:"Al-Jabbar",meaning:"The Compeller — forces are subject to His will; also the One who heals the broken",cat:"power"},
  {n:17,ar:"الْمُتَكَبِّرُ",en:"Al-Mutakabbir",meaning:"The Supreme — all greatness belongs to Him alone",cat:"power"},
  {n:18,ar:"الْقَهَّارُ",en:"Al-Qahhar",meaning:"The Subduer — dominates everything, none can escape His decree",cat:"power"},
  {n:19,ar:"الْمُقْتَدِرُ",en:"Al-Muqtadir",meaning:"The Omnipotent — has complete power over all affairs",cat:"power"},
  {n:20,ar:"الْمَلِكُ",en:"Al-Malik",meaning:"The King — owner of the entire universe and all dominion",cat:"power"},
  {n:21,ar:"الْمَالِكُ",en:"Maalik ul-Mulk",meaning:"The Master of the Kingdom — gives and takes kingdoms as He wills",cat:"power"},
  {n:22,ar:"الْوَلِيُّ",en:"Al-Waliyy",meaning:"The Protecting Guardian — takes care of His servants and their affairs",cat:"power"},
  // KNOWLEDGE category
  {n:23,ar:"الْعَلِيمُ",en:"Al-Aleem",meaning:"The All-Knowing — knows everything: seen, unseen, past, present, and future",cat:"knowledge"},
  {n:24,ar:"الْخَبِيرُ",en:"Al-Khabeer",meaning:"The All-Aware — knows the inner reality and hidden details of all things",cat:"knowledge"},
  {n:25,ar:"الْحَكِيمُ",en:"Al-Hakeem",meaning:"The Perfectly Wise — every decision, decree, and command is full of wisdom",cat:"knowledge"},
  {n:26,ar:"الشَّهِيدُ",en:"Ash-Shaheed",meaning:"The Witness — witnesses everything that happens anywhere at any time",cat:"knowledge"},
  {n:27,ar:"الرَّقِيبُ",en:"Ar-Raqeeb",meaning:"The Watchful — ever-watchful over every thought, word, and action",cat:"knowledge"},
  {n:28,ar:"الْمُحِيطُ",en:"Al-Muheet",meaning:"The All-Encompassing — His knowledge surrounds all things completely",cat:"knowledge"},
  {n:29,ar:"السَّمِيعُ",en:"As-Samee",meaning:"The All-Hearing — hears every sound, whisper, and unspoken prayer",cat:"knowledge"},
  {n:30,ar:"الْبَصِيرُ",en:"Al-Baseer",meaning:"The All-Seeing — sees all things in darkness and in light",cat:"knowledge"},
  // CREATOR category
  {n:31,ar:"اللَّهُ",en:"Allah",meaning:"The One God — the name that encompasses all divine attributes; the supreme name",cat:"creator"},
  {n:32,ar:"الْخَالِقُ",en:"Al-Khaliq",meaning:"The Creator — creates from nothing, designs with perfect measure",cat:"creator"},
  {n:33,ar:"الْبَارِئُ",en:"Al-Bari",meaning:"The Originator — creates beings with distinct qualities and characteristics",cat:"creator"},
  {n:34,ar:"الْمُصَوِّرُ",en:"Al-Musawwir",meaning:"The Fashioner — gives every created thing its unique shape and form",cat:"creator"},
  {n:35,ar:"الْبَدِيعُ",en:"Al-Badee",meaning:"The Incomparable Originator — creates things without any prior example",cat:"creator"},
  {n:36,ar:"الْأَوَّلُ",en:"Al-Awwal",meaning:"The First — existed before everything; no beginning precedes Him",cat:"creator"},
  {n:37,ar:"الْآخِرُ",en:"Al-Akhir",meaning:"The Last — will remain after everything else ceases to exist",cat:"creator"},
  {n:38,ar:"الظَّاهِرُ",en:"Adh-Dhahir",meaning:"The Manifest — evident through the signs of creation all around us",cat:"creator"},
  {n:39,ar:"الْبَاطِنُ",en:"Al-Batin",meaning:"The Hidden — beyond human perception and comprehension",cat:"creator"},
  {n:40,ar:"الْحَيُّ",en:"Al-Hayy",meaning:"The Ever-Living — eternally alive, life itself originates from Him",cat:"creator"},
  {n:41,ar:"الْقَيُّومُ",en:"Al-Qayyoom",meaning:"The Self-Sustaining — sustains and upholds the entire creation",cat:"creator"},
  // GRACE / GENEROSITY
  {n:42,ar:"الْكَرِيمُ",en:"Al-Kareem",meaning:"The Most Generous — gives abundantly and without any cause or limit",cat:"grace"},
  {n:43,ar:"الْوَهَّابُ",en:"Al-Wahhab",meaning:"The Bestower — gives gifts continuously without expecting anything in return",cat:"grace"},
  {n:44,ar:"الرَّزَّاقُ",en:"Ar-Razzaq",meaning:"The Provider — sustains every living thing with exactly what it needs",cat:"grace"},
  {n:45,ar:"الْغَنِيُّ",en:"Al-Ghani",meaning:"The Self-Sufficient — needs nothing yet provides everything",cat:"grace"},
  {n:46,ar:"الْمُغْنِي",en:"Al-Mughni",meaning:"The Enricher — makes whoever He wills free from need",cat:"grace"},
  {n:47,ar:"الْفَتَّاحُ",en:"Al-Fattah",meaning:"The Opener — opens hearts, opens doors, opens ways when all seems closed",cat:"grace"},
  {n:48,ar:"الْمُعْطِي",en:"Al-Mu'ti",meaning:"The Giver — gives freely and unconditionally to all",cat:"grace"},
  {n:49,ar:"النَّافِعُ",en:"An-Nafi",meaning:"The Creator of Benefit — brings about all benefit and goodness",cat:"grace"},
  {n:50,ar:"الْمُجِيبُ",en:"Al-Mujeeb",meaning:"The Responsive — answers every prayer and call, never ignores",cat:"grace"},
  // Continue filling remaining 49...
  {n:51,ar:"الْحَقُّ",en:"Al-Haqq",meaning:"The Absolute Truth — His existence is certain, His word is truth, His promise is real",cat:"power"},
  {n:52,ar:"الْمُبِينُ",en:"Al-Mubeen",meaning:"The Manifest — clear and evident, makes the truth clear to all",cat:"knowledge"},
  {n:53,ar:"الْعَلِيُّ",en:"Al-Aliyy",meaning:"The Most High — exalted above all, nothing is above Him",cat:"power"},
  {n:54,ar:"الْكَبِيرُ",en:"Al-Kabeer",meaning:"The Most Great — greater than anything the mind can imagine",cat:"power"},
  {n:55,ar:"الْعَظِيمُ",en:"Al-Azeem",meaning:"The Magnificent — immense in greatness, perfection, and majesty",cat:"power"},
  {n:56,ar:"الْحَمِيدُ",en:"Al-Hameed",meaning:"The Praiseworthy — deserves all praise at all times regardless of circumstance",cat:"grace"},
  {n:57,ar:"الْمَجِيدُ",en:"Al-Majeed",meaning:"The Glorious — infinitely noble and generous",cat:"grace"},
  {n:58,ar:"الصَّمَدُ",en:"As-Samad",meaning:"The Eternal — the Master everyone depends on; He depends on none",cat:"power"},
  {n:59,ar:"الْأَحَدُ",en:"Al-Ahad",meaning:"The One and Only — uniquely singular; no partner, no equal, no likeness",cat:"power"},
  {n:60,ar:"الْوَاحِدُ",en:"Al-Wahid",meaning:"The Unique — one in essence, attributes, and actions",cat:"power"},
  {n:61,ar:"الْقُدُّوسُ",en:"Al-Quddoos",meaning:"The Perfectly Pure — free from every defect, flaw, or imperfection",cat:"grace"},
  {n:62,ar:"السَّلَامُ",en:"As-Salaam",meaning:"The Source of Peace — safety, security, and peace come only from Him",cat:"mercy"},
  {n:63,ar:"الْمُؤْمِنُ",en:"Al-Mu'min",meaning:"The Guardian of Faith — grants security and confirms the faith of His servants",cat:"mercy"},
  {n:64,ar:"الْمُهَيْمِنُ",en:"Al-Muhaymin",meaning:"The Overseer — watches, guards, and protects all things",cat:"power"},
  {n:65,ar:"الْبَاعِثُ",en:"Al-Baaith",meaning:"The Resurrector — will raise all of creation on the Day of Judgment",cat:"creator"},
  {n:66,ar:"الشَّاكِرُ",en:"Ash-Shakir",meaning:"The Grateful — acknowledges and rewards every deed, however small",cat:"grace"},
  {n:67,ar:"الْحَسِيبُ",en:"Al-Haseeb",meaning:"The Reckoner — takes precise account of all deeds and gives each its due",cat:"knowledge"},
  {n:68,ar:"الْجَلِيلُ",en:"Al-Jaleel",meaning:"The Majestic — possesses absolute majesty and supreme glory",cat:"power"},
  {n:69,ar:"الْمُكْرِمُ",en:"Al-Mukriam",meaning:"The Bestower of Honour — elevates and honours whoever He wills",cat:"grace"},
  {n:70,ar:"الْوَاسِعُ",en:"Al-Wasi",meaning:"The All-Encompassing — infinite in His capacity; no request is too great",cat:"mercy"},
  {n:71,ar:"الرَّشِيدُ",en:"Ar-Rasheed",meaning:"The Guide to the Right Path — leads everything toward its perfect purpose",cat:"knowledge"},
  {n:72,ar:"الصَّبُورُ",en:"As-Saboor",meaning:"The Patient — infinitely patient; never rushes, always at the right time",cat:"mercy"},
  {n:73,ar:"الْمُقَدِّمُ",en:"Al-Muqaddim",meaning:"The Expediter — brings forward and elevates whoever He wills",cat:"power"},
  {n:74,ar:"الْمُؤَخِّرُ",en:"Al-Mu'akhkhir",meaning:"The Delayer — keeps things back and in place according to His plan",cat:"power"},
  {n:75,ar:"الْقَابِضُ",en:"Al-Qabid",meaning:"The Withholder — contracts and withholds according to His wisdom",cat:"power"},
  {n:76,ar:"الْبَاسِطُ",en:"Al-Basit",meaning:"The Expander — expands sustenance, hearts, and blessings generously",cat:"grace"},
  {n:77,ar:"الْخَافِضُ",en:"Al-Khafid",meaning:"The Abaser — lowers the arrogant and the enemies of truth",cat:"power"},
  {n:78,ar:"الرَّافِعُ",en:"Ar-Rafi",meaning:"The Exalter — raises the humble and the faithful in rank and honour",cat:"grace"},
  {n:79,ar:"الْمُعِزُّ",en:"Al-Mu'izz",meaning:"The Honourer — gives honour and dignity to whoever He chooses",cat:"grace"},
  {n:80,ar:"الْمُذِلُّ",en:"Al-Mudhil",meaning:"The Dishonorer — humbles those who reject truth and spread corruption",cat:"power"},
  {n:81,ar:"الْعَدْلُ",en:"Al-Adl",meaning:"The Just — perfectly fair in every judgment; no one is wronged by Him",cat:"knowledge"},
  {n:82,ar:"الْحَكَمُ",en:"Al-Hakam",meaning:"The Judge — the only true and ultimate judge of all matters",cat:"knowledge"},
  {n:83,ar:"الْمُقْسِطُ",en:"Al-Muqsit",meaning:"The Equitable — deals with absolute fairness and justice in all things",cat:"knowledge"},
  {n:84,ar:"الْجَامِعُ",en:"Al-Jami",meaning:"The Gatherer — gathers all of creation on the Day of Judgment",cat:"creator"},
  {n:85,ar:"الْهَادِي",en:"Al-Hadi",meaning:"The Guide — guides hearts to truth, faith, and the right path",cat:"grace"},
  {n:86,ar:"الْوَكِيلُ",en:"Al-Wakeel",meaning:"The Trustee — the best One to rely on and entrust all affairs to",cat:"mercy"},
  {n:87,ar:"النُّورُ",en:"An-Noor",meaning:"The Light — His light illuminates hearts, the heavens, and the earth",cat:"grace"},
  {n:88,ar:"الْمُحْيِي",en:"Al-Muhyi",meaning:"The Giver of Life — brings the living from the dead and enlivens hearts",cat:"creator"},
  {n:89,ar:"الْمُمِيتُ",en:"Al-Mumeet",meaning:"The Causer of Death — causes death as part of the cycle He created",cat:"creator"},
  {n:90,ar:"الْحَيُّ",en:"Al-Hayy",meaning:"The Ever-Living — eternally alive with no beginning and no end",cat:"creator"},
  {n:91,ar:"الْمَاجِدُ",en:"Al-Majid",meaning:"The Noble and Glorious — magnificent in grace and generosity",cat:"grace"},
  {n:92,ar:"الصَّادِقُ",en:"As-Sadiq",meaning:"The Truthful — every promise He makes is kept; His word is absolute truth",cat:"knowledge"},
  {n:93,ar:"الشَّافِي",en:"Ash-Shafi",meaning:"The Healer — the ultimate cure for all illness, worry, and pain",cat:"mercy"},
  {n:94,ar:"الْمُعَافِي",en:"Al-Muafi",meaning:"The Pardoner of Sins — grants full pardon and restoration",cat:"mercy"},
  {n:95,ar:"الْمُنَّانُ",en:"Al-Mannan",meaning:"The Benefactor — bestows great favour continuously and spontaneously",cat:"grace"},
  {n:96,ar:"الدَّيَّانُ",en:"Ad-Dayyan",meaning:"The Rewarder of Good — repays every deed with perfect justice",cat:"knowledge"},
  {n:97,ar:"الرَّبُّ",en:"Ar-Rabb",meaning:"The Lord and Sustainer — nurtures, develops, and cares for all creation",cat:"creator"},
  {n:98,ar:"السُّبُّوحُ",en:"As-Subbooh",meaning:"The Glorified — absolutely free from any defect or imperfection",cat:"grace"},
  {n:99,ar:"ذُو الْجَلَالِ وَالْإِكْرَامِ",en:"Dhul Jalali wal Ikram",meaning:"Lord of Majesty and Bounty — combine ultimate greatness and infinite generosity",cat:"grace"},
];

var asmaCurrentCat='all';
var asmaSearchTerm='';

function asmaBuild(){
  var grid=document.getElementById("asma-grid");
  if(!grid)return;
  var html='';
  var visible=0;
  ASMA.forEach(function(a){
    var matchCat=(asmaCurrentCat==='all'||a.cat===asmaCurrentCat);
    var term=asmaSearchTerm.toLowerCase();
    var matchSearch=!term||(a.en.toLowerCase().includes(term)||a.meaning.toLowerCase().includes(term)||a.ar.includes(term)||(a.n.toString()===term));
    if(matchCat&&matchSearch){
      visible++;
      html+='<div class="asma-card '+a.cat+'">'
        +'<div class="asma-num">'+a.n+'</div>'
        +'<div class="asma-ar">'+a.ar+'</div>'
        +'<div class="asma-en">'+a.en+'</div>'
        +'<div class="asma-meaning">'+a.meaning+'</div>'
        +'</div>';
    }
  });
  grid.innerHTML=html;
  var cnt=document.getElementById("asma-count");
  if(cnt)cnt.textContent=visible+(visible===99?' Names':' Found');
}

function asmaCat(cat,el){
  asmaCurrentCat=cat;
  document.querySelectorAll('.asma-cpill').forEach(function(p){p.classList.remove('on');});
  if(el)el.classList.add('on');
  asmaBuild();
}

function asmaFilter(){
  var inp=document.getElementById("asma-search");
  asmaSearchTerm=inp?inp.value:'';
  asmaBuild();
}

// ── DUA CATEGORIES ────────────────────────────────────────────────────────
function showDuaCat(id){
  ["ashra","daily","prayer","ramadan","life","parents","names"].forEach(function(c){
    var el=document.getElementById("dcat-"+c);
    var pill=document.getElementById("dp-"+c);
    if(el)el.style.display=(c===id?"block":"none");
    if(pill){pill.classList.remove("on");if(c===id)pill.classList.add("on");}
  });
}

// ── QIBLA COMPASS ─────────────────────────────────────────────────────────
var qiblaInit=false;
var qiblaAngle=285; // default Pune
var _smoothedHeading=null;
var _compassListening=false;

function calcQibla(lat,lon){
  var MAKKAH_LAT=21.4225*Math.PI/180;
  var MAKKAH_LON=39.8262*Math.PI/180;
  var latR=lat*Math.PI/180;
  var lonR=lon*Math.PI/180;
  var dLon=MAKKAH_LON-lonR;
  var y=Math.sin(dLon)*Math.cos(MAKKAH_LAT);
  var x=Math.cos(latR)*Math.sin(MAKKAH_LAT)-Math.sin(latR)*Math.cos(MAKKAH_LAT)*Math.cos(dLon);
  var bearing=(Math.atan2(y,x)*180/Math.PI+360)%360;
  var R=6371;
  var dLat=MAKKAH_LAT-latR;
  var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(latR)*Math.cos(MAKKAH_LAT)*Math.sin(dLon/2)*Math.sin(dLon/2);
  var dist=Math.round(R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));
  return{bearing:Math.round(bearing),dist:dist};
}

// Smooth angle interpolation to avoid jumping past 0/360 boundary
function smoothAngle(current, target, factor){
  if(current===null) return target;
  var diff=target-current;
  // Normalize diff to -180..180
  while(diff>180) diff-=360;
  while(diff<-180) diff+=360;
  return current+diff*factor;
}

function applyCompass(deviceHeading){
  // Smooth the heading to reduce jitter (low-pass filter)
  _smoothedHeading=smoothAngle(_smoothedHeading, deviceHeading, 0.25);
  var h=_smoothedHeading;
  var needle=document.getElementById('compass-needle');
  var rose=document.getElementById('compass-rose');
  if(!needle) return;
  // ROSE rotates opposite to device heading → N/S/E/W always show real geographic directions
  if(rose) rose.style.transform='rotate('+(-h)+'deg)';
  // NEEDLE rotates to Qibla relative to device heading
  var needleRot=(qiblaAngle - h + 360) % 360;
  needle.style.transform='rotate('+needleRot+'deg)';
  // Debug display (tap compass 3x to toggle)
  var dbg=document.getElementById('qb-debug');
  if(dbg&&dbg.style.display!=='none'){
    var src=dbg.getAttribute('data-src')||'?'; dbg.textContent='['+src+'] Raw: '+Math.round(deviceHeading)+'° | Smooth: '+Math.round(h)+'° | Qibla: '+qiblaAngle+'° | Needle: '+Math.round(needleRot)+'°';
  }
}

function setNeedleStatic(angle){
  // No device compass — show Qibla direction from North (rose stays fixed)
  var needle=document.getElementById('compass-needle');
  if(needle) needle.style.transform='rotate('+angle+'deg)';
}

function setupCompassListener(){
  if(_compassListening) return;
  _compassListening=true;

  // Track which source is active so we don't double-process
  var _usingAbsolute=false;

  var handleAbsolute=function(e){
    // deviceorientationabsolute — alpha referenced to True North, CCW positive
    // This is the BEST source on Android. Convert to CW compass bearing:
    if(e.alpha===null || e.alpha===undefined) return;
    var heading=((360-e.alpha)%360+360)%360;
    _usingAbsolute=true;
    // Update debug source indicator
    var dbg=document.getElementById('qb-debug');
    if(dbg&&dbg.style.display!=='none'){
      dbg.setAttribute('data-src','ABS');
    }
    applyCompass(heading);
  };

  var handleRelative=function(e){
    // Plain deviceorientation — skip if absolute is working
    if(_usingAbsolute) return;
    if(e.alpha===null || e.alpha===undefined) return;

    // iOS uses webkitCompassHeading (True North, CW) — use directly
    if(e.webkitCompassHeading!==undefined && e.webkitCompassHeading!==null){
      applyCompass(e.webkitCompassHeading);
      return;
    }

    // Android fallback: alpha is CCW from wherever phone pointed at page load.
    // We CANNOT get True North from this without a reference — but we apply
    // screen rotation correction at minimum so portrait/landscape is right:
    var screenAngle=0;
    if(screen.orientation && screen.orientation.angle!==undefined){
      screenAngle=screen.orientation.angle;
    } else if(window.orientation!==undefined){
      screenAngle=window.orientation;
    }
    // alpha CCW → CW, then compensate for screen rotation
    var heading=((360-e.alpha-screenAngle)%360+360)%360;
    applyCompass(heading);
  };

  // Register BOTH — absolute takes priority via _usingAbsolute flag
  // Some Android browsers only fire one or the other
  window.addEventListener('deviceorientationabsolute', handleAbsolute, {passive:true});
  window.addEventListener('deviceorientation', handleRelative, {passive:true});

  // After 2s, if no events at all, show warning
  setTimeout(function(){
    if(_smoothedHeading===null){
      setText('qb-status-txt','⚠️ Compass sensor unavailable on this browser — try Chrome or open via HTTPS');
    }
  }, 2000);
}

function requestIOSCompass(){
  if(typeof DeviceOrientationEvent!=='undefined' && typeof DeviceOrientationEvent.requestPermission==='function'){
    DeviceOrientationEvent.requestPermission().then(function(r){
      if(r==='granted'){
        setupCompassListener();
        setText('qb-status-txt','✅ Live compass active — turn to face 🕋 Makkah');
        var btn=document.getElementById('qb-enable-btn');
        if(btn) btn.style.display='none';
      } else {
        setText('qb-status-txt','⚠️ Permission denied — showing static Qibla direction');
      }
    }).catch(function(err){
      setText('qb-status-txt','⚠️ Could not enable compass: '+err.message);
    });
  }
}

function initQibla(){
  if(qiblaInit) return;
  qiblaInit=true;

  // Set defaults from selected city
  var cityQibla={PUNE:{b:285,d:4135},MUMBAI:{b:287,d:4161},DELHI:{b:277,d:3829},
    HYDERABAD:{b:282,d:4048},LUCKNOW:{b:278,d:3700},BANGALORE:{b:283,d:4210},
    CHENNAI:{b:284,d:4331},KOLKATA:{b:270,d:3818}};
  var cq=cityQibla[city.n]||{b:285,d:4135};
  qiblaAngle=cq.b;
  setText('qb-bearing',cq.b+'°');
  setText('qb-dist',cq.d.toLocaleString('en-IN')+' km');
  setText('qb-city',city.n);
  setNeedleStatic(qiblaAngle);

  var isIOS=typeof DeviceOrientationEvent!=='undefined' && typeof DeviceOrientationEvent.requestPermission==='function';
  var isAndroid='ondeviceorientationabsolute' in window || ('ondeviceorientation' in window && !/iphone|ipad|ipod/i.test(navigator.userAgent));

  // Step 1: Try GPS for precise bearing
  if('geolocation' in navigator){
    setText('qb-status-txt','📍 Getting your precise location...');
    navigator.geolocation.getCurrentPosition(function(pos){
      var result=calcQibla(pos.coords.latitude,pos.coords.longitude);
      qiblaAngle=result.bearing;
      setText('qb-bearing',result.bearing+'°');
      setText('qb-dist',result.dist.toLocaleString('en-IN')+' km');
      setText('qb-city','Your Location');
      setNeedleStatic(qiblaAngle);

      // Step 2: Enable live compass
      if(isIOS){
        // iOS needs user gesture to request permission - show button
        setText('qb-status-txt','📱 Tap button below to enable live compass');
        var btn=document.getElementById('qb-enable-btn');
        if(btn) btn.style.display='block';
      } else if(isAndroid || 'ondeviceorientation' in window){
        setupCompassListener();
        setText('qb-status-txt','✅ Live compass active — turn to face 🕋 Makkah');
      } else {
        setText('qb-status-txt','✅ Qibla: '+result.bearing+'° from North · '+result.dist.toLocaleString('en-IN')+' km to Makkah');
      }
    },function(){
      // GPS failed - use city data, still try compass
      setText('qb-city',city.n+' (City data)');
      if(isAndroid || 'ondeviceorientation' in window){
        setupCompassListener();
        setText('qb-status-txt','✅ Live compass active · GPS unavailable, using city data');
      } else if(isIOS){
        setText('qb-status-txt','📱 Tap button to enable live compass (using city data)');
        var btn=document.getElementById('qb-enable-btn');
        if(btn) btn.style.display='block';
      } else {
        setText('qb-status-txt','📍 Showing Qibla from '+city.n+' · Enable location for precision');
      }
    },{timeout:8000,enableHighAccuracy:true});
  } else {
    if(isAndroid || 'ondeviceorientation' in window){
      setupCompassListener();
      setText('qb-status-txt','✅ Live compass active — turn to face 🕋 Makkah');
    } else if(isIOS){
      var btn=document.getElementById('qb-enable-btn');
      if(btn) btn.style.display='block';
      setText('qb-status-txt','📱 Tap button to enable live compass');
    } else {
      setText('qb-status-txt','📍 Showing Qibla from '+city.n+' · '+cq.b+'° from North');
    }
  }
}




async function loadCityData(){
  const paths=[
    BASE + "assets/data/ramadan_2026_india.json",
    "assets/data/ramadan_2026_india.json",
    "./assets/data/ramadan_2026_india.json"
  ];
  for(const p of paths){
    try{
      const r=await fetch(p,{cache:"no-store"});
      if(!r.ok) continue;
      const d=await r.json();
      const cities=Array.isArray(d)?d:(Array.isArray(d.cities)?d.cities:[]);
      if(!cities.length) continue;
      CITY_DATA=cities.map((c,idx)=>{
        const days=Array.isArray(c.ramadan)?c.ramadan:[];
        const s=days.map(day=>{
          const parts1=(day.sehri_end||day.sehri||"05:00").split(":").map(Number);
          const parts2=(day.iftar||day.maghrib||"18:00").split(":").map(Number);
          return [parts1[0]||0,parts1[1]||0,parts2[0]||0,parts2[1]||0];
        });
        const dh=(days[0]?.dhuhr||"12:30").split(":").map(Number);
        const as=(days[0]?.asr||"15:45").split(":").map(Number);
        const is=(days[0]?.isha||"19:30").split(":").map(Number);
        return {n:(c.name||("CITY-"+(idx+1))).toUpperCase(),def:idx===0,s:s,dh:dh,as:as,is:is,lat:c.lat,lon:c.lon};
      });
      return;
    }catch(e){}
  }
}

// INIT
document.addEventListener("DOMContentLoaded",async function(){
  try{
    await loadCityData();
    city = CITY_DATA[0] || city;
    loadState();
    initStars();
    buildCitySw("city");buildCitySw("sc");
    renderCities();renderSched();updatePrayers();updateVerse();updateNights();
    showTool("ts");
    buildRkGrid();calcZ();
    geoDetectCity();
    tick();setInterval(function(){try{tick();}catch(e){console.error("tick error:",e);}},1000);
    qpBuild();ftCalc();
    var rt=document.getElementById("rem-tog");if(rt&&remOn)rt.classList.add("on");
  }catch(err){console.error("Init error:",err);}
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register(BASE + 'sw.js', { scope: BASE })
      .then(function(r){ console.log('[SW] registered', r.scope); })
      .catch(function(e){ console.warn('[SW] failed', e); });
  });
}

var _pwaPrompt = null;
var installBtn = document.getElementById("installBtn");

// Check if already running as installed PWA
function isRunningAsApp() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true ||
         document.referrer.includes('android-app://');
}

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  _pwaPrompt = e;
  if (installBtn) {
    installBtn.hidden = false;
    installBtn.style.display = "inline-block";
  }
  // Only show if not already installed and not dismissed recently
  if (!isRunningAsApp() && !sessionStorage.getItem('pwa-dismissed')) {
    setTimeout(showPWABanner, 2500);
  }
});

// Fallback show only if: not installed + not dismissed + on mobile
setTimeout(function(){
  if (!document.getElementById('pwa-bar') && !isRunningAsApp() && !sessionStorage.getItem('pwa-dismissed')) {
    // Only show on mobile browsers (not desktop)
    var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) showPWABanner();
  }
}, 5000);

function showPWABanner() {
  // Double-check not installed
  if (isRunningAsApp()) return;
  if (document.getElementById('pwa-bar')) return;
  var bar = document.createElement('div');
  bar.id = 'pwa-bar';
  bar.style.cssText = [
    'position:fixed;bottom:62px;left:50%;transform:translateX(-50%)',
    'width:calc(100% - 20px);max-width:460px',
    'background:linear-gradient(135deg,rgba(8,18,38,.99),rgba(4,10,22,.99))',
    'border:1.5px solid rgba(201,168,76,.6);border-radius:18px',
    'padding:13px 14px;display:flex;align-items:center;gap:10px',
    'z-index:9999;box-shadow:0 8px 36px rgba(0,0,0,.85)',
    'animation:pwaSlideUp .4s cubic-bezier(.25,.8,.25,1)'
  ].join(';');
  bar.innerHTML =
    '<style>@keyframes pwaSlideUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}</style>' +
    '<div style="font-size:24px;flex-shrink:0">📲</div>' +
    '<div style="flex:1;min-width:0">' +
      '<div style="font-family:Cinzel,serif;font-size:12px;letter-spacing:1.5px;color:#f0d080;margin-bottom:3px">INSTALL AS APP — FREE</div>' +
      '<div style="font-family:EB Garamond,serif;font-size:12px;color:rgba(255,255,255,.5)">Works offline · Home screen icon</div>' +
    '</div>' +
    '<button onclick="doPWAInstall()" style="background:linear-gradient(135deg,#c9a84c,#f0d080);border:none;border-radius:20px;padding:9px 14px;font-family:Cinzel,serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#040a14;cursor:pointer;flex-shrink:0">INSTALL</button>' +
    '<button onclick="closePWABar()" style="background:none;border:1px solid rgba(255,255,255,.15);border-radius:50%;min-width:28px;width:28px;height:28px;color:rgba(255,255,255,.4);cursor:pointer;font-size:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center">×</button>';
  document.body.appendChild(bar);
}

function doPWAInstall() {
  if (_pwaPrompt) {
    _pwaPrompt.prompt();
    _pwaPrompt.userChoice.then(function(){ _pwaPrompt = null; closePWABar(); });
  } else {
    alert('To install:\n\nAndroid: Tap ⋮ menu → "Add to Home screen"\n\niPhone: Tap Share ↑ → "Add to Home Screen"');
    closePWABar();
  }
}
function closePWABar() {
  // Session-only dismiss — banner comes back on next browser visit
  try { sessionStorage.setItem('pwa-dismissed', '1'); } catch(e){}
  var b = document.getElementById('pwa-bar');
  if (b) { b.style.transition='opacity .3s'; b.style.opacity='0'; setTimeout(function(){ b.remove(); }, 300); }
}

if (installBtn) {
  installBtn.addEventListener("click", async function() {
    if (!_pwaPrompt) return;
    _pwaPrompt.prompt();
    await _pwaPrompt.userChoice;
    _pwaPrompt = null;
    installBtn.hidden = true;
    installBtn.style.display = "none";
  });
}

window.addEventListener("appinstalled", function() {
  _pwaPrompt = null;
  if (installBtn) {
    installBtn.hidden = true;
    installBtn.style.display = "none";
  }
});
