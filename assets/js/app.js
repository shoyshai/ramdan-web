const STORAGE_PREFIX = 'ramadan_web_v1_';
const KAABA_LAT = 21.4225;
const KAABA_LON = 39.8262;

function getBasePath() {
    const p = window.location.pathname;
    const parts = p.split('/').filter(Boolean);
    if (parts.length > 0) return `/${parts[0]}/`;
    return '/'; // Local fallback
}

const BASE = getBasePath();

const body = document.body;
const citySelect = document.getElementById('citySelect');
let appData = [];

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('manifestLink').setAttribute('href', `${BASE}manifest.json`);
    
    initTheme();
    setupNavigation();
    await loadData();
    initTasbeeh();
    initTaraweeh();
    initQuran();
    initCalculators();
    registerServiceWorker();
});

function initTheme() {
    const savedTheme = localStorage.getItem(`${STORAGE_PREFIX}theme`) || 'light';
    body.className = `theme-${savedTheme}`;
    document.getElementById('themeToggle').addEventListener('click', () => {
        const newTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
        body.className = `theme-${newTheme}`;
        localStorage.setItem(`${STORAGE_PREFIX}theme`, newTheme);
    });
}

function setupNavigation() {
    const tabs = document.querySelectorAll('.b-nav-item');
    const sections = document.querySelectorAll('.module-section');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            sections.forEach(sec => sec.classList.toggle('active', sec.id === tab.dataset.target));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

async function loadData() {
    try {
        const response = await fetch(`${BASE}assets/data/ramadan_2026_india.json`, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to load via BASE");
        appData = await response.json();
        populateCities();
    } catch (e) {
        console.warn("Base fetch failed, trying relative fallback", e);
        try {
            const fbResponse = await fetch(`assets/data/ramadan_2026_india.json`);
            appData = await fbResponse.json();
            populateCities();
        } catch(fallbackErr) {
            citySelect.innerHTML = '<option value="">Unable to load data. Refresh to retry.</option>';
        }
    }
}

function populateCities() {
    citySelect.innerHTML = appData.map((c, i) => `<option value="${i}">${c.name}</option>`).join('');
    const savedCity = localStorage.getItem(`${STORAGE_PREFIX}city`);
    if (savedCity && savedCity < appData.length) citySelect.value = savedCity;
    citySelect.addEventListener('change', (e) => {
        localStorage.setItem(`${STORAGE_PREFIX}city`, e.target.value);
        updateSchedule();
        updateQibla();
    });
    updateSchedule();
    updateQibla();
}

function updateSchedule() {
    if (!citySelect.value) return;
    const schedule = appData[citySelect.value].schedule;
    const todayStr = new Date().toISOString().split('T')[0];
    let todayData = schedule.find(d => d.date === todayStr) || schedule[0]; // fallback
    
    document.getElementById('todayDate').textContent = new Date(todayData.date).toDateString();
    ['Sehri', 'Iftar', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(p => {
        document.getElementById(`today${p}`).textContent = todayData[p.toLowerCase()];
    });

    document.getElementById('scheduleTableBody').innerHTML = schedule.map((day, i) => `
        <tr class="${day.date === todayData.date ? 'today-row' : ''}">
            <td>${i + 1}</td>
            <td>${new Date(day.date).toLocaleDateString()}</td>
            <td>${day.sehri}</td>
            <td>${day.iftar}</td>
        </tr>
    `).join('');

    // Update Hero UI
    const heroSehri = document.getElementById('heroSehri');
    const heroIftar = document.getElementById('heroIftar');
    const heroRozaLabel = document.getElementById('heroRozaLabel');
    if (heroSehri) heroSehri.textContent = todayData.sehri;
    if (heroIftar) heroIftar.textContent = todayData.iftar;
    
    // Find index for Roza
    const rozaIndex = schedule.findIndex(d => d.date === todayData.date) + 1;
    if (heroRozaLabel) {
        if (rozaIndex > 0) {
            heroRozaLabel.textContent = `${rozaIndex}${getOrdinal(rozaIndex)} ROZA`;
        } else {
            heroRozaLabel.textContent = "RAMADAN";
        }
    }
}

function getOrdinal(n) {
    const s=["th","st","nd","rd"], v=n%100;
    return s[(v-20)%10]||s[v]||s[0];
}

function initTasbeeh() {
    let count = parseInt(localStorage.getItem(`${STORAGE_PREFIX}tasbeeh`) || '0');
    const disp = document.getElementById('tasbeehCount');
    disp.textContent = count;
    document.getElementById('btnTasbeehAdd').addEventListener('click', () => {
        disp.textContent = ++count;
        localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, count);
    });
    document.getElementById('btnTasbeehReset').addEventListener('click', () => {
        if(confirm('Reset?')) { count = 0; disp.textContent = count; localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, count); }
    });
}

function initTaraweeh() { setupGrid('taraweehGrid', `${STORAGE_PREFIX}taraweeh`, 30); }
function initQuran() { 
    setupGrid('juzGrid', `${STORAGE_PREFIX}quran`, 30, () => {
        const count = document.querySelectorAll('#juzGrid .done').length;
        document.getElementById('quranCompleted').textContent = count;
        document.getElementById('quranProgress').style.width = `${(count/30)*100}%`;
    }); 
}

function setupGrid(id, storageKey, total, callback) {
    const grid = document.getElementById(id);
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
    document.getElementById('btnCalculateZakat').addEventListener('click', () => {
        const getV = id => parseFloat(document.getElementById(id).value || 0);
        const nw = getV('zakatCash') + getV('zakatGold') + getV('zakatSilver') - getV('zakatDebts');
        document.getElementById('zakatAmount').textContent = `₹${nw > 0 ? (nw*0.025).toFixed(2) : 0}`;
        document.getElementById('zakatResult').classList.remove('hidden');
    });
    const updateFit = () => document.getElementById('fitranaAmount').textContent = `₹${(document.getElementById('fitranaMembers').value * document.getElementById('fitranaRate').value).toFixed(2)}`;
    document.getElementById('fitranaMembers').addEventListener('input', updateFit);
    document.getElementById('fitranaRate').addEventListener('input', updateFit);
}

function updateQibla() {
    if(!citySelect.value) return;
    const city = appData[citySelect.value];
    calcUI(city.lat, city.lon, city.name);
}

function calcUI(lat, lon, name) {
    const rad = d => d * Math.PI/180;
    const y = Math.sin(rad(KAABA_LON - lon)) * Math.cos(rad(KAABA_LAT));
    const x = Math.cos(rad(lat))*Math.sin(rad(KAABA_LAT)) - Math.sin(rad(lat))*Math.cos(rad(KAABA_LAT))*Math.cos(rad(KAABA_LON - lon));
    const bearing = (rad(Math.atan2(y, x)) * 180/Math.PI + 360) % 360;
    
    document.getElementById('qiblaInfo').textContent = `${name} • Bearing: ${bearing.toFixed(2)}°`;
    document.getElementById('compassArrow').style.transform = `rotate(${bearing}deg)`;
}

document.getElementById('btnCurrentLocation').addEventListener('click', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(p => calcUI(p.coords.latitude, p.coords.longitude, "Current Pos"), () => alert('Denied'));
    }
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register(`${BASE}sw.js`);
}
