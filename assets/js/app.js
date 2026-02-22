const STORAGE_PREFIX = 'ramadan_web_v1_';
const KAABA_LAT = 21.4225;
const KAABA_LON = 39.8262;
const DEFAULT_CITY_NAME = 'Pune';

function getBasePath() {
  const p = window.location.pathname;
  const parts = p.split('/').filter(Boolean);
  if (parts.length >= 1) return `/${parts[0]}/`;
  return '/';
}

const BASE = getBasePath();
const $id = (id) => document.getElementById(id);
const setText = (id, v) => {
  const el = $id(id);
  if (!el) return false;
  el.textContent = v ?? '';
  return true;
};
const setHTML = (id, v) => {
  const el = $id(id);
  if (!el) return false;
  el.innerHTML = v ?? '';
  return true;
};

function setGeoStatus(message, kind = '') {
  const el = $id('geoCityStatus');
  if (!el) return;
  el.classList.remove('is-loading', 'is-success', 'is-error');
  if (kind === 'loading') el.classList.add('is-loading');
  if (kind === 'success') el.classList.add('is-success');
  if (kind === 'error') el.classList.add('is-error');
  el.textContent = message || '';
}

function setGeoButtonLoading(isLoading) {
  const btn = $id('geoCityBtn');
  if (!btn) return;
  btn.disabled = isLoading;
  btn.setAttribute('aria-busy', String(isLoading));
}

function isGeoSecureContext() {
  return window.isSecureContext || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => deg * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function findNearestCity(userLat, userLon, cityList) {
  if (!Array.isArray(cityList) || !cityList.length) return null;
  let nearest = null;
  cityList.forEach((city, index) => {
    const lat = Number(city.lat);
    const lon = Number(city.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
    const distanceKm = haversineKm(userLat, userLon, lat, lon);
    if (!nearest || distanceKm < nearest.distanceKm) {
      nearest = { index, name: city.name, distanceKm };
    }
  });
  return nearest;
}

function findCityIndexByName(cityName) {
  if (!cityName) return -1;
  const target = String(cityName).trim().toLowerCase();
  return appData.findIndex((c) => String(c.name || '').trim().toLowerCase() === target);
}

function getDefaultCityIndex() {
  const defaultIndex = findCityIndexByName(DEFAULT_CITY_NAME);
  return defaultIndex >= 0 ? defaultIndex : 0;
}

function resolveStoredCityIndex(storedValue) {
  if (storedValue === null || storedValue === undefined || storedValue === '') return null;
  const numeric = Number(storedValue);
  if (Number.isInteger(numeric) && numeric >= 0 && numeric < appData.length) return numeric;
  const byName = findCityIndexByName(storedValue);
  if (byName >= 0) return byName;
  return null;
}

function setCityByIndex(index) {
  if (!citySelect) return false;
  const normalized = Number(index);
  if (!Number.isInteger(normalized) || normalized < 0 || normalized >= appData.length) return false;
  citySelect.value = String(normalized);
  citySelect.dispatchEvent(new Event('change', { bubbles: true }));
  return true;
}

const body = document.body;
const root = document.documentElement;
const citySelect = $id('citySelect');
let appData = [];
let cityPickerState = {
  isOpen: false,
  filtered: [],
  activePos: -1,
  outsideHandler: null
};
let geoCityBtnBound = false;

document.addEventListener('DOMContentLoaded', async () => {
  const ml = $id('manifestLink');
  if (ml) ml.setAttribute('href', `${BASE}manifest.json`);

  initUIState();
  setupNavigation();
  await loadRamadanData();
  initTasbeeh();
  initTaraweeh();
  initQuran();
  initCalculators();
  initSadqa();
  initResetData();
  initCurrentLocation();
  registerServiceWorker();
});

function initUIState() {
  const savedTheme = localStorage.getItem(`${STORAGE_PREFIX}theme`) || 'dark';
  const savedCompact = localStorage.getItem(`${STORAGE_PREFIX}compact`) || '0';

  applyTheme(savedTheme);
  applyCompact(savedCompact);
  syncUIStateControls();

  const themeToggles = [$id('themeToggle'), $id('themeSwitch')].filter(Boolean);
  themeToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      syncUIStateControls();
    });
  });

  const compactToggles = [$id('compactToggle'), $id('compactSwitch')].filter(Boolean);
  compactToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextCompact = root.dataset.compact === '1' ? '0' : '1';
      applyCompact(nextCompact);
      syncUIStateControls();
    });
  });
}

function applyTheme(theme) {
  const next = theme === 'light' ? 'light' : 'dark';
  root.dataset.theme = next;
  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(`theme-${next}`);
  localStorage.setItem(`${STORAGE_PREFIX}theme`, next);
}

function applyCompact(compact) {
  const next = compact === '1' ? '1' : '0';
  root.dataset.compact = next;
  localStorage.setItem(`${STORAGE_PREFIX}compact`, next);
}

function syncUIStateControls() {
  const isDark = (root.dataset.theme || 'dark') === 'dark';
  const isCompact = (root.dataset.compact || '0') === '1';

  const themeHeaderBtn = $id('themeToggle');
  if (themeHeaderBtn) themeHeaderBtn.textContent = isDark ? '🌙' : '☀️';

  const compactHeaderBtn = $id('compactToggle');
  if (compactHeaderBtn) compactHeaderBtn.textContent = isCompact ? '⇵' : '↕';

  const themeSwitch = $id('themeSwitch');
  if (themeSwitch) themeSwitch.setAttribute('aria-checked', String(!isDark));

  const compactSwitch = $id('compactSwitch');
  if (compactSwitch) compactSwitch.setAttribute('aria-checked', String(isCompact));
}

function setupNavigation() {
  const tabs = document.querySelectorAll('.b-nav-item');
  const sections = document.querySelectorAll('.module-section');

  sections.forEach((s) => s.classList.add('active'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      const targetSec = $id(targetId);
      if (targetSec) {
        const nav = document.querySelector('.bottom-nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        window.scrollTo({
          top: targetSec.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.target === current);
    });
  });
}

async function loadRamadanData() {
  const urls = [
    `${BASE}assets/data/ramadan_2026_india.json`,
    'assets/data/ramadan_2026_india.json',
    './assets/data/ramadan_2026_india.json'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) continue;
      appData = await res.json();
      populateCities();
      return;
    } catch (e) {
      console.warn('Fetch failed:', url, e);
    }
  }

  if (citySelect) citySelect.innerHTML = '<option value="">Unable to load data. Refresh to retry.</option>';
}

function populateCities() {
  if (!citySelect) return;

  citySelect.innerHTML = appData.map((c, i) => `<option value="${i}">${c.name}</option>`).join('');

  const chipContainer = $id('cityChips');
  if (chipContainer) {
    chipContainer.innerHTML = appData.slice(0, 4).map((c, i) => `<button class="city-chip" data-idx="${i}">${c.name}</button>`).join('');
    chipContainer.querySelectorAll('.city-chip').forEach((chip) => {
      chip.addEventListener('click', (e) => {
        citySelect.value = e.currentTarget.dataset.idx;
        citySelect.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  }

  const savedCityRaw = localStorage.getItem(`${STORAGE_PREFIX}city`) ?? localStorage.getItem(`${STORAGE_PREFIX}city_index`);
  const hasSavedCity = savedCityRaw !== null && savedCityRaw !== '';
  const savedCityIndex = resolveStoredCityIndex(savedCityRaw);
  citySelect.value = String(savedCityIndex !== null ? savedCityIndex : getDefaultCityIndex());

  const updateChipState = () => {
    if (!chipContainer) return;
    chipContainer.querySelectorAll('.city-chip').forEach((c) => c.classList.remove('active'));
    const activeChip = chipContainer.querySelector(`.city-chip[data-idx="${citySelect.value}"]`);
    if (activeChip) activeChip.classList.add('active');
  };

  citySelect.addEventListener('change', (e) => {
    localStorage.setItem(`${STORAGE_PREFIX}city_index`, e.target.value);
    const selectedCity = appData[Number(e.target.value)];
    localStorage.setItem(`${STORAGE_PREFIX}city`, selectedCity ? selectedCity.name : e.target.value);
    if (selectedCity) localStorage.setItem(`${STORAGE_PREFIX}city_name`, selectedCity.name);
    updateSchedule();
    updateQibla();
    syncCityPickerValue();
    updateChipState();
  });

  initCityPicker();
  initGeoCityButton();
  updateSchedule();
  updateQibla();
  syncCityPickerValue();
  updateChipState();

  if (!hasSavedCity) {
    attemptGeolocationAndSelectCity({ silent: true, fallbackToDefault: true });
  } else {
    setGeoStatus('');
  }
}

function initGeoCityButton() {
  const btn = $id('geoCityBtn');
  if (!btn || geoCityBtnBound) return;
  geoCityBtnBound = true;
  btn.addEventListener('click', () => {
    attemptGeolocationAndSelectCity({ silent: false, fallbackToDefault: false });
  });
}

function attemptGeolocationAndSelectCity({ silent = false, fallbackToDefault = false } = {}) {
  if (!citySelect || !Array.isArray(appData) || !appData.length) return;

  if (!isGeoSecureContext()) {
    setGeoStatus('Location works on HTTPS or localhost.', 'error');
    if (fallbackToDefault) setCityByIndex(getDefaultCityIndex());
    return;
  }

  if (!navigator.geolocation) {
    setGeoStatus('Geolocation is not available in this browser.', 'error');
    if (fallbackToDefault) setCityByIndex(getDefaultCityIndex());
    return;
  }

  if (!silent) {
    setGeoStatus('Locating...', 'loading');
  } else {
    setGeoStatus('');
  }
  setGeoButtonLoading(true);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const nearest = findNearestCity(position.coords.latitude, position.coords.longitude, appData);
      if (!nearest) {
        setGeoStatus('Could not match your location to a city.', 'error');
        if (fallbackToDefault) setCityByIndex(getDefaultCityIndex());
        setGeoButtonLoading(false);
        return;
      }

      setCityByIndex(nearest.index);
      setGeoStatus(`\u{1F4CD} Auto-selected: ${nearest.name} (${nearest.distanceKm.toFixed(1)} km away)`, 'success');
      setGeoButtonLoading(false);
    },
    (error) => {
      if (error && error.code === 1) {
        setGeoStatus('Location permission denied. Choose city manually.', 'error');
      } else if (error && error.code === 2) {
        setGeoStatus('Location unavailable. Try again.', 'error');
      } else if (error && error.code === 3) {
        setGeoStatus('Location timed out. Try again.', 'error');
      } else {
        setGeoStatus('Could not get your location.', 'error');
      }
      if (fallbackToDefault) setCityByIndex(getDefaultCityIndex());
      setGeoButtonLoading(false);
    },
    { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
  );
}

function initCityPicker() {
  const picker = $id('cityPicker');
  const btn = $id('cityPickerBtn');
  const panel = $id('cityPickerPanel');
  const search = $id('cityPickerSearch');
  if (!picker || !btn || !panel || !search || !citySelect) return;

  cityPickerState.filtered = appData.map((_, i) => String(i));
  renderCityPickerList('');

  btn.addEventListener('click', () => {
    if (cityPickerState.isOpen) closeCityPicker();
    else openCityPicker();
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!cityPickerState.isOpen) openCityPicker();
      moveActiveOption(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!cityPickerState.isOpen) openCityPicker();
      moveActiveOption(-1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!cityPickerState.isOpen) openCityPicker();
      else chooseActiveOption();
    } else if (e.key === 'Escape') {
      closeCityPicker();
    }
  });

  search.addEventListener('input', () => {
    renderCityPickerList(search.value || '');
  });

  search.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveActiveOption(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveActiveOption(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      chooseActiveOption();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeCityPicker();
      btn.focus();
    }
  });

  panel.addEventListener('click', (e) => {
    const option = e.target.closest('.city-picker__option');
    if (!option) return;
    selectCity(option.dataset.value);
  });
}

function openCityPicker() {
  const btn = $id('cityPickerBtn');
  const panel = $id('cityPickerPanel');
  const search = $id('cityPickerSearch');
  if (!btn || !panel || !search) return;

  panel.hidden = false;
  btn.classList.add('is-open');
  btn.setAttribute('aria-expanded', 'true');
  cityPickerState.isOpen = true;
  search.value = '';
  renderCityPickerList('');
  search.focus();

  cityPickerState.outsideHandler = (e) => {
    const picker = $id('cityPicker');
    if (picker && !picker.contains(e.target)) closeCityPicker();
  };
  document.addEventListener('mousedown', cityPickerState.outsideHandler);
}

function closeCityPicker() {
  const btn = $id('cityPickerBtn');
  const panel = $id('cityPickerPanel');
  if (!btn || !panel) return;

  panel.hidden = true;
  btn.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  cityPickerState.isOpen = false;

  if (cityPickerState.outsideHandler) {
    document.removeEventListener('mousedown', cityPickerState.outsideHandler);
    cityPickerState.outsideHandler = null;
  }
}

function renderCityPickerList(term) {
  const list = $id('cityPickerList');
  if (!list) return;

  const q = term.trim().toLowerCase();
  cityPickerState.filtered = appData
    .map((city, i) => ({ value: String(i), name: city.name }))
    .filter((row) => row.name.toLowerCase().includes(q));

  if (!cityPickerState.filtered.length) {
    list.innerHTML = '<li class="city-picker__empty">No matching city</li>';
    cityPickerState.activePos = -1;
    return;
  }

  const selectedValue = citySelect ? citySelect.value : '';
  list.innerHTML = cityPickerState.filtered.map((row) => {
    const isSelected = row.value === selectedValue;
    return `<li class="city-picker__option" role="option" data-value="${row.value}" aria-selected="${isSelected}">${row.name}</li>`;
  }).join('');

  const selectedIndex = cityPickerState.filtered.findIndex((row) => row.value === selectedValue);
  cityPickerState.activePos = selectedIndex >= 0 ? selectedIndex : 0;
  syncActiveOption();
}

function moveActiveOption(delta) {
  if (!cityPickerState.filtered.length) return;
  const max = cityPickerState.filtered.length - 1;
  let next = cityPickerState.activePos + delta;
  if (next < 0) next = max;
  if (next > max) next = 0;
  cityPickerState.activePos = next;
  syncActiveOption();
}

function syncActiveOption() {
  const list = $id('cityPickerList');
  if (!list) return;
  const options = list.querySelectorAll('.city-picker__option');
  options.forEach((el, i) => {
    el.classList.toggle('is-active', i === cityPickerState.activePos);
    if (i === cityPickerState.activePos) el.scrollIntoView({ block: 'nearest' });
  });
}

function chooseActiveOption() {
  if (!cityPickerState.filtered.length || cityPickerState.activePos < 0) return;
  const chosen = cityPickerState.filtered[cityPickerState.activePos];
  selectCity(chosen.value);
}

function selectCity(value) {
  if (!setCityByIndex(value)) return;
  closeCityPicker();
  const btn = $id('cityPickerBtn');
  if (btn) btn.focus();
}

function syncCityPickerValue() {
  const valueEl = $id('cityPickerValue');
  if (!valueEl || !citySelect) return;
  const selectedOption = citySelect.options[citySelect.selectedIndex];
  valueEl.textContent = selectedOption ? selectedOption.textContent : 'Select city';
}

function updateSchedule() {
  if (!citySelect || citySelect.value === '') return;
  const schedule = appData[citySelect.value].schedule;
  const todayStr = new Date().toISOString().split('T')[0];
  const todayData = schedule.find((d) => d.date === todayStr) || schedule[0];

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

  setText('heroSehri', todayData.sehri);
  setText('heroIftar', todayData.iftar);

  const rozaIndex = schedule.findIndex((d) => d.date === todayData.date) + 1;
  if (rozaIndex > 0) {
    setText('heroRozaLabel', `${rozaIndex}${getOrdinal(rozaIndex)} ROZA`);
  } else {
    setText('heroRozaLabel', 'RAMADAN');
  }
}

function getOrdinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function initTasbeeh() {
  let count = parseInt(localStorage.getItem(`${STORAGE_PREFIX}tasbeeh`) || '0', 10);
  setText('tasbeehCount', count);

  const btnAdd = $id('btnTasbeehAdd');
  const btnReset = $id('btnTasbeehReset');

  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      setText('tasbeehCount', ++count);
      localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, String(count));
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Reset?')) {
        count = 0;
        setText('tasbeehCount', count);
        localStorage.setItem(`${STORAGE_PREFIX}tasbeeh`, String(count));
      }
    });
  }
}

function initTaraweeh() {
  setupGrid('taraweehGrid', `${STORAGE_PREFIX}taraweeh`, 30);
}

function initQuran() {
  setupGrid('juzGrid', `${STORAGE_PREFIX}quran`, 30, () => {
    const grid = $id('juzGrid');
    if (!grid) return;
    const count = grid.querySelectorAll('.done').length;
    setText('quranCompleted', count);
    const prog = $id('quranProgress');
    if (prog) prog.style.width = `${(count / 30) * 100}%`;
  });
}

function setupGrid(id, storageKey, total, callback) {
  const grid = $id(id);
  if (!grid) return;

  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  for (let i = 1; i <= total; i += 1) {
    const btn = document.createElement('button');
    btn.className = `toggle-btn ${saved.includes(i) ? 'done' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      btn.classList.toggle('done');
      const done = Array.from(grid.querySelectorAll('.done')).map((b) => parseInt(b.textContent, 10));
      localStorage.setItem(storageKey, JSON.stringify(done));
      if (callback) callback();
    });
    grid.appendChild(btn);
  }

  if (callback) callback();
}

function initCalculators() {
  const btnZk = $id('btnCalculateZakat');
  if (btnZk) {
    btnZk.addEventListener('click', () => {
      const getV = (id) => {
        const el = $id(id);
        return el ? parseFloat(el.value || 0) : 0;
      };
      const nw = getV('zakatCash') + getV('zakatGold') + getV('zakatSilver') - getV('zakatDebts');
      setText('zakatAmount', `₹${nw > 0 ? (nw * 0.025).toFixed(2) : 0}`);
      const res = $id('zakatResult');
      if (res) res.classList.remove('hidden');
    });
  }

  const fm = $id('fitranaMembers');
  const fr = $id('fitranaRate');
  const updateFit = () => {
    if (!fm || !fr) return;
    const members = Number(fm.value || 0);
    const rate = Number(fr.value || 0);
    setText('fitranaAmount', `₹${(members * rate).toFixed(2)}`);
  };
  if (fm) fm.addEventListener('input', updateFit);
  if (fr) fr.addEventListener('input', updateFit);
}

function initSadqa() {
  const btnYes = $id('btnSadqaYes');
  if (btnYes) {
    btnYes.addEventListener('click', () => {
      const tk = $id('sadqaThanks');
      if (tk) tk.classList.remove('hidden');
      btnYes.blur();
    });
  }
}

function updateQibla() {
  if (!citySelect || citySelect.value === '') return;
  const city = appData[citySelect.value];
  if (city) calcUI(city.lat, city.lon, city.name);
}

function calcUI(lat, lon, name) {
  const rad = (d) => d * Math.PI / 180;
  const y = Math.sin(rad(KAABA_LON - lon)) * Math.cos(rad(KAABA_LAT));
  const x = Math.cos(rad(lat)) * Math.sin(rad(KAABA_LAT)) -
    Math.sin(rad(lat)) * Math.cos(rad(KAABA_LAT)) * Math.cos(rad(KAABA_LON - lon));
  const bearing = ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;

  setText('qiblaInfo', `${name} • Bearing: ${bearing.toFixed(2)}°`);
  const arr = $id('compassArrow');
  if (arr) arr.style.transform = `rotate(${bearing}deg)`;
}

function initCurrentLocation() {
  const btnLoc = $id('btnCurrentLocation');
  if (!btnLoc) return;

  btnLoc.addEventListener('click', () => {
    if (!navigator.geolocation) return;
    setText('qiblaInfo', 'Locating...');
    navigator.geolocation.getCurrentPosition(
      (p) => calcUI(p.coords.latitude, p.coords.longitude, 'Current Pos'),
      () => setText('qiblaInfo', 'Location access denied.')
    );
  });
}

function initResetData() {
  const btn = $id('resetDataBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!confirm('Reset all saved app data and preferences?')) return;

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) keysToRemove.push(key);
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`${BASE}sw.js`);
  }
}
