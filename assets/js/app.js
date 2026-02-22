// Data Keys & Constants
const STORAGE_PREFIX = 'ramadan_web_v1_';
const KAABA_LAT = 21.4225;
const KAABA_LON = 39.8262;

function getBasePath() {
  const p = window.location.pathname;
  const parts = p.split("/").filter(Boolean);
  if (parts.length >= 1) return `/${parts[0]}/`;
  return "/";
}

const BASE = getBasePath();

// DOM Safeguards
const $id = (id) => document.getElementById(id);
const setText = (id, v) => { const el=$id(id); if(!el) return false; el.textContent = v ?? ""; return true; };
const setHTML = (id, v) => { const el=$id(id); if(!el) return false; el.innerHTML = v ?? ""; return true; };

const body = document.body;
const citySelect = $id('citySelect');
let appData = [];

document.addEventListener('DOMContentLoaded', async () => {
    const ml = $id('manifestLink');
    if (ml) ml.setAttribute('href', `${BASE}manifest.json`);
    
    initTheme();
    setupNavigation();
    await loadRamadanData(); 
    initTasbeeh();
    initTaraweeh();
    initQuran();
    initCalculators();
    initSadqa();
    registerServiceWorker();
});

function initTheme() {
    const savedTheme = localStorage.getItem(`${STORAGE_PREFIX}theme`) || 'dark'; // Force dark by default since layout is strict dark
    body.className = `theme-${savedTheme}`;
    const tgl = $id('themeToggle');
    if(tgl) {
        tgl.addEventListener('click', () => {
            const newTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
            body.className = `theme-${newTheme}`;
            localStorage.setItem(`${STORAGE_PREFIX}theme`, newTheme);
        });
    }
}

function setupNavigation() {
    const tabs = document.querySelectorAll('.b-nav-item');
    const sections = document.querySelectorAll('.module-section');
    
    // Fallback: If modules aren't one long scroll, just hide/show like before. Next implementation handles single-page display if preferred, but reference uses hide/show for distinct modules. We will keep standard display block mode to ensure scrolling works as requested by user ("Clicking scrolls to section").
    // To allow scrolling, we make all sections display block.
    sections.forEach(s => s.classList.add('active')); // Shows all to enable scroll spy
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;
            const targetSec = $id(targetId);
            if (targetSec) {
                const navHeight = document.querySelector('.bottom-nav').offsetHeight;
                window.scrollTo({
                    top: targetSec.offsetTop - navHeight, 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.target === current) {
                tab.classList.add('active');
            }
        });
    });
}

async function loadRamadanData() {
  const urls = [
    `${BASE}assets/data/ramadan_2026_india.json`,
    `assets/data/ramadan_2026_india.json`,
    `./assets/data/ramadan_2026_india.json`
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) continue; // Try next fallback if ok is false
      appData = await res.json();
      populateCities();
      return;
    } catch (e) {
      console.warn("Fetch failed:", url, e);
    }
  }
  // All failed
  if(citySelect) citySelect.innerHTML = '<option value="">Unable to load data. Refresh to retry.</option>';
}

function populateCities() {
    if(!citySelect) return;
    citySelect.innerHTML = appData.map((c, i) => `<option value="${i}">${c.name}</option>`).join('');
    
    // Quick chips
    const chipContainer = $id('cityChips');
    if (chipContainer) {
        chipContainer.innerHTML = appData.slice(0, 4).map((c, i) => `<button class="city-chip" data-idx="${i}">${c.name}</button>`).join('');
        chipContainer.querySelectorAll('.city-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                citySelect.value = e.target.dataset.idx;
                citySelect.dispatchEvent(new Event('change'));
            });
        });
    }

    const savedCity = localStorage.getItem(`${STORAGE_PREFIX}city`);
    if (savedCity && savedCity < appData.length) citySelect.value = savedCity;
    
    const updateChipState = () => {
        if(chipContainer) {
            chipContainer.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
            const activeChip = chipContainer.querySelector(`.city-chip[data-idx="${citySelect.value}"]`);
            if (activeChip) activeChip.classList.add('active');
        }
    };
    
    citySelect.addEventListener('change', (e) => {
        localStorage.setItem(`${STORAGE_PREFIX}city`, e.target.value);
        updateSchedule();
        updateQibla();
        updateChipState();
    });
    
    updateSchedule();
    updateQibla();
    updateChipState();
}

function updateSchedule() {
    if (!citySelect || !citySelect.value) return;
    const schedule = appData[citySelect.value].schedule;
    const todayStr = new Date().toISOString().split('T')[0];
    let todayData = schedule.find(d => d.date === todayStr) || schedule[0]; // fallback
    
    setText('todayDate', new Date(todayData.date).toDateString());
    
    setText('ptFajr', todayData.fajr);
    setText('ptDhuhr', todayData.dhuhr);
    setText('ptAsr', todayData.asr);
    setText('ptMaghrib', todayData.maghrib);
    setText('ptIsha', todayData.isha);

    setHTML('scheduleBody', schedule.map((day, i) => `
        <tr class="${day.date === todayData.date ? 'today-row' : ''}">
            <td>${i + 1}</td>
            <td>${new Date(day.date).toLocaleDateString()}</td>
            <td>${day.sehri}</td>
            <td>${day.iftar}</td>
        </tr>
    `).join(''));

    // Update Hero UI
    setText('heroSehri', todayData.sehri);
    setText('heroIftar', todayData.iftar);
    
    const rozaIndex = schedule.findIndex(d => d.date === todayData.date) + 1;
    if (rozaIndex > 0) {
        setText('heroRozaLabel', `${rozaIndex}${getOrdinal(rozaIndex)} ROZA`);
    } else {
        setText('heroRozaLabel', "RAMADAN");
    }
}

function getOrdinal(n) {
    const s=["th","st","nd","rd"], v=n%100;
    return s[(v-20)%10]||s[v]||s[0];
}

function initTasbeeh() {
    let count = parseInt(localStorage.getItem(`${STORAGE_PREFIX}tasbeeh`) || '0');
    setText('tasbeehCount', count);
    
    const btnAdd = $id('btnTasbeehAdd');
    const btnReset = $id('btnTasbeehReset');
    
    if(btnAdd) {
        btnAdd.addEventListener('click', () => {
            setText('tasbeehCount', ++count);
            localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, count);
        });
    }
    if(btnReset) {
        btnReset.addEventListener('click', () => {
            if(confirm('Reset?')) { count = 0; setText('tasbeehCount', count); localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, count); }
        });
    }
}

function initTaraweeh() { setupGrid('taraweehGrid', `${STORAGE_PREFIX}taraweeh`, 30); }
function initQuran() { 
    setupGrid('juzGrid', `${STORAGE_PREFIX}quran`, 30, () => {
        const grid = $id('juzGrid');
        if(!grid) return;
        const count = grid.querySelectorAll('.done').length;
        setText('quranCompleted', count);
        const prog = $id('quranProgress');
        if(prog) prog.style.width = `${(count/30)*100}%`;
    }); 
}

function setupGrid(id, storageKey, total, callback) {
    const grid = $id(id);
    if (!grid) return;

    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    for(let i=1; i<=total; i++) {
        const btn = document.createElement('button');
        btn.className = `toggle-btn ${saved.includes(i) ? 'done' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            btn.classList.toggle('done');
            const done = Array.from(grid.querySelectorAll('.done')).map(b => parseInt(b.textContent));
            localStorage.setItem(storageKey, JSON.stringify(done));
            if(callback) callback();
        });
        grid.appendChild(btn);
    }
    if(callback) callback();
}

function initCalculators() {
    const btnZk = $id('btnCalculateZakat');
    if (btnZk) {
        btnZk.addEventListener('click', () => {
            const getV = id => { const el = $id(id); return el ? parseFloat(el.value || 0) : 0; };
            const nw = getV('zakatCash') + getV('zakatGold') + getV('zakatSilver') - getV('zakatDebts');
            setText('zakatAmount', `₹${nw > 0 ? (nw*0.025).toFixed(2) : 0}`);
            const res = $id('zakatResult');
            if(res) res.classList.remove('hidden');
        });
    }
    
    const fm = $id('fitranaMembers');
    const fr = $id('fitranaRate');    
    const updateFit = () => {
        if(!fm || !fr) return;
        setText('fitranaAmount', `₹${(fm.value * fr.value).toFixed(2)}`);
    }
    if (fm) fm.addEventListener('input', updateFit);
    if (fr) fr.addEventListener('input', updateFit);
}

function initSadqa() {
    const btnYes = $id('btnSadqaYes');
    if(btnYes) {
        btnYes.addEventListener('click', () => {
            const tk = $id('sadqaThanks');
            if(tk) tk.classList.remove('hidden');
            btnYes.blur();
        });
    }
}

function updateQibla() {
    if(!citySelect || !citySelect.value) return;
    const city = appData[citySelect.value];
    if(city) calcUI(city.lat, city.lon, city.name);
}

function calcUI(lat, lon, name) {
    const rad = d => d * Math.PI/180;
    const y = Math.sin(rad(KAABA_LON - lon)) * Math.cos(rad(KAABA_LAT));
    const x = Math.cos(rad(lat))*Math.sin(rad(KAABA_LAT)) - Math.sin(rad(lat))*Math.cos(rad(KAABA_LAT))*Math.cos(rad(KAABA_LON - lon));
    const bearing = (rad(Math.atan2(y, x)) * 180/Math.PI + 360) % 360;
    
    setText('qiblaInfo', `${name} • Bearing: ${bearing.toFixed(2)}°`);
    const arr = $id('compassArrow');
    if(arr) arr.style.transform = `rotate(${bearing}deg)`;
}

const btnLoc = $id('btnCurrentLocation');
if (btnLoc) {
    btnLoc.addEventListener('click', () => {
        if(navigator.geolocation) {
            setText('qiblaInfo', "Locating...");
            navigator.geolocation.getCurrentPosition(p => calcUI(p.coords.latitude, p.coords.longitude, "Current Pos"), () => {
                setText('qiblaInfo', "Location access denied.");
            });
        }
    });
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register(`${BASE}sw.js`);
}
