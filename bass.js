/**
 * =================================================================
 * BAAS.LK - PRO TRADESMAN REGISTRATION ENGINE (bass.js)
 * Multi-Step Form Wizard, 25 Districts & Towns Engine, Live Card Sync,
 * Trade Sub-skills Generator, Image Upload, Phone OTP & Local Storage
 * =================================================================
 */

// =================================================================
// 1. SRI LANKA 25 DISTRICTS & TOWNS DATABASE
// =================================================================
const SRI_LANKA_LOCATIONS = [
  {
    province: "බස්නාහිර පළාත (Western Province)",
    districts: [
      {
        id: "colombo",
        name: "කොළඹ (Colombo)",
        towns: ["කොළඹ 1-15", "දෙහිවල", "ගල්කිස්ස", "මොරටුව", "ශ්‍රී ජයවර්ධනපුර කෝට්ටේ", "මහරගම", "නුගේගොඩ", "කඩුවෙල", "හෝමාගම", "මාලබේ", "බත්තරමුල්ල", "අවිස්සාවේල්ල", "පාදුක්ක", "අතුරුගිරිය", "පිළියන්දල", "කොට්ටාව", "රත්මලාන"]
      },
      {
        id: "gampaha",
        name: "ගම්පහ (Gampaha)",
        towns: ["ගම්පහ", "මීගමුව", "වත්තල", "ජා-ඇල", "කඳාන", "රාගම", "කැලණිය", "කිරිබත්ගොඩ", "කඩවත", "බියගම", "මිනුවංගොඩ", "නිට්ටඹුව", "මීරිගම", "වේයන්ගොඩ", "දිවුලපිටිය", "දෙල්ගොඩ"]
      },
      {
        id: "kalutara",
        name: "කළුතර (Kalutara)",
        towns: ["කළුතර", "පානදුර", "හොරණ", "බණ්ඩාරගම", "බේරුවල", "අලුත්ගම", "මතුගම", "අගලවත්ත", "ඉංගිරිය", "වාද්දූව", "දොඩංගොඩ"]
      }
    ]
  },
  {
    province: "මධ්‍යම පළාත (Central Province)",
    districts: [
      {
        id: "kandy",
        name: "මහනුවර (Kandy)",
        towns: ["මහනුවර", "පේරාදෙණිය", "කටුගස්තොට", "ගම්පොළ", "නාවලපිටිය", "කුන්ඩසාලේ", "දිගන", "තෙල්දෙණිය", "අකුරණ", "වත්තේගම", "මැණික්හින්න"]
      },
      {
        id: "matale",
        name: "මාතලේ (Matale)",
        towns: ["මාතලේ", "දඹුල්ල", "සීගිරිය", "ගලේවෙල", "උකුවෙල", "රත්තොට", "නාලන්ද", "පල්ලේපොල"]
      },
      {
        id: "nuwaraeliya",
        name: "නුවරඑළිය (Nuwara Eliya)",
        towns: ["නුවරඑළිය", "හැටන්", "තලවාකැලේ", "රගල", "ගිනිගත්හේන", "වලපනේ", "මස්කෙළිය", "අගරපතන", "කොටගල"]
      }
    ]
  },
  {
    province: "දකුණු පළාත (Southern Province)",
    districts: [
      {
        id: "galle",
        name: "ගාල්ල (Galle)",
        towns: ["ගාල්ල", "අම්බලන්ගොඩ", "හික්කඩුව", "කරාපිටිය", "ඇල්පිටිය", "බද්දේගම", "අහංගම", "බෙන්තොට", "පිටිගල", "උණවටුන", "නෙළුව"]
      },
      {
        id: "matara",
        name: "මාතර (Matara)",
        towns: ["මාතර", "වැලිගම", "අකුරැස්සා", "දෙනියාය", "කඹුරුපිටිය", "හක්මන", "දික්වැල්ල", "කැකණදුර", "මිරීස්ස"]
      },
      {
        id: "hambantota",
        name: "හම්බන්තොට (Hambantota)",
        towns: ["හම්බන්තොට", "තංගල්ල", "තිස්සමහාරාමය", "අම්බලන්තොට", "වීරකැටිය", "බෙලිඅත්ත", "සූරියවැව", "වලස්මුල්ල"]
      }
    ]
  },
  {
    province: "වයඹ පළාත (North Western Province)",
    districts: [
      {
        id: "kurunegala",
        name: "කුරුණෑගල (Kurunegala)",
        towns: ["කුරුණෑගල", "කුලියාපිටිය", "මාවතගම", "නාරම්මල", "ගිරිඋල්ල", "පන්නල", "වාරියපොල", "හෙට්ටිපොල", "නිකවැරටිය", "මහව", "ගල්ගමුව", "අලව්ව", "ඉබ්බාගමුව"]
      },
      {
        id: "puttalam",
        name: "පුත්තලම (Puttalam)",
        towns: ["පුත්තලම", "හලාවත", "මාරවිල", "වෙන්නප්පුව", "ආණමඩුව", "කල්පිටිය", "දංකොටුව", "නාත්තන්ඩිය", "මාදම්පේ"]
      }
    ]
  },
  {
    province: "උතුරු මැද පළාත (North Central Province)",
    districts: [
      {
        id: "anuradhapura",
        name: "අනුරාධපුරය (Anuradhapura)",
        towns: ["අනුරාධපුරය", "එප්පාවල", "තඹුත්තේගම", "කැකිරාව", "මැදවච්චිය", "ගල්නෑව", "මිහින්තලේ", "නොච්චියාගම", "පදවිය", "හබරණ"]
      },
      {
        id: "polonnaruwa",
        name: "පොළොන්නරුව (Polonnaruwa)",
        towns: ["පොළොන්නරුව", "කඩුරුවෙල", "හිඟුරක්ගොඩ", "මැදිරිගිරිය", "මින්නේරිය", "වැලිකන්ද", "අරලගංවිල"]
      }
    ]
  },
  {
    province: "උතුරු පළාත (Northern Province)",
    districts: [
      {
        id: "jaffna",
        name: "යාපනය (Jaffna)",
        towns: ["යාපනය", "චාවකච්චේරිය", "පේදුරුතුඩුව", "කයිට්ස්", "නල්ලූර්", "කරවැඩ්ඩි", "පලාලි", "චුන්නාකම්"]
      },
      {
        id: "kilinochchi",
        name: "කිලිනොච්චිය (Kilinochchi)",
        towns: ["කිලිනොච්චිය", "පලෙයි", "පරන්තන්", "පුනරින්"]
      },
      {
        id: "mannar",
        name: "මන්නාරම (Mannar)",
        towns: ["මන්නාරම", "මඩු", "තලෙයිමන්නාරම", "මුරුන්කන්"]
      },
      {
        id: "vavuniya",
        name: "වවුනියාව (Vavuniya)",
        towns: ["වවුනියාව", "නැදුන්කේණි", "චෙට්ටිකුලම්", "පූවරසන්කුලම්"]
      },
      {
        id: "mullaitivu",
        name: "මුලතිව් (Mullaitivu)",
        towns: ["මුලතිව්", "පුදුකුඩියිරුප්පු", "වැලිඔය", "මල්ලාවි", "තුනුක්කායි"]
      }
    ]
  },
  {
    province: "නැගෙනහිර පළාත (Eastern Province)",
    districts: [
      {
        id: "batticaloa",
        name: "මඩකලපුව (Batticaloa)",
        towns: ["මඩකලපුව", "කාත්තන්කුඩි", "එරාවූර්", "වාලච්චේන", "කළුවංචිකුඩි"]
      },
      {
        id: "trincomalee",
        name: "ත්‍රිකුණාමලය (Trincomalee)",
        towns: ["ත්‍රිකුණාමලය", "කන්තලේ", "කිණ්ණියා", "මුතූර්", "නිලාවැලි", "ගෝමරන්කඩවල"]
      },
      {
        id: "ampara",
        name: "අම්පාර (Ampara)",
        towns: ["අම්පාර", "කල්මුණේ", "සමන්තුරේ", "අක්කරේපත්තුව", "පොතුවිල්", "සයින්දමරුදු", "දෙහිඅත්තකණ්ඩිය"]
      }
    ]
  },
  {
    province: "ඌව පළාත (Uva Province)",
    districts: [
      {
        id: "badulla",
        name: "බදුල්ල (Badulla)",
        towns: ["බදුල්ල", "බණ්ඩාරවෙල", "වැලිමඩ", "ඇල්ල", "දියතලාව", "හාලිඇළ", "මහියංගණය", "පස්සර", "හපුතලේ"]
      },
      {
        id: "monaragala",
        name: "මොනරාගල (Monaragala)",
        towns: ["මොනරාගල", "වැල්ලවාය", "බිබිල", "කතරගම", "තනමල්විල", "සියඹලාණ්ඩුව", "බුත්තල"]
      }
    ]
  },
  {
    province: "සබරගමුව පළාත (Sabaragamuwa Province)",
    districts: [
      {
        id: "ratnapura",
        name: "රත්නපුරය (Ratnapura)",
        towns: ["රත්නපුරය", "ඇඹිලිපිටිය", "බලංගොඩ", "පැල්මඩුල්ල", "කහවත්ත", "කුරුවිට", "ඇහැලියගොඩ", "ගොඩකවෙල", "කලවාන"]
      },
      {
        id: "kegalle",
        name: "කෑගල්ල (Kegalle)",
        towns: ["කෑගල්ල", "මාවනැල්ල", "වරකපොල", "රඹුක්කන", "දෙහිඕවිට", "දැරණියගල", "යටියන්තොට", "රුවන්වැල්ල"]
      }
    ]
  }
];

// =================================================================
// 2. TRADE PROFILES & DYNAMIC SUB-SKILLS DATA
// =================================================================
const TRADE_DATA = {
  electrical: {
    name: "විදුලි කාර්මික ශිල්පී",
    titleEn: "Electrician & House Wiring",
    icon: "fa-solid fa-bolt",
    color: "amber",
    subskills: [
      "ගෘහස්ථ වයරින් (House Wiring)",
      "ත්‍රි-ෆේස් කාර්මික (3-Phase Industrial)",
      "DB බෝඩ් සැකසුම් (Main DB Setup)",
      "සූර්ය බල පද්ධති (Solar Inverters)",
      "මෝටර් හා පම්ප් රෙපයාර් (Water Pump / Motor)",
      "කෙටි පරිපථ සෙවීම (Short Circuit Tracking)",
      "ජෙනරේටර් සම්බන්ධතා (Generators)",
      "Smart Home Automation"
    ]
  },
  plumbing: {
    name: "ජල නල කාර්මික ශිල්පී",
    titleEn: "Plumber & Pipe Fitting",
    icon: "fa-solid fa-wrench",
    color: "blue",
    subskills: [
      "PVC නල එළීම (PVC Pipe Laying)",
      "නාන කාමර සවි කිරීම් (Sanitaryware Fittings)",
      "ජල පොම්ප සවි කිරීම් (Pressure Pumps)",
      "ජල ටැංකි සවි කිරීම (Overhead Tanks)",
      "කාණු හා මල නල අවහිරතා (Drainage Unblocking)",
      "Hot Water Geyser / Solar Water",
      "Gutter & Rainwater Systems"
    ]
  },
  ac: {
    name: "AC සහ ශීතකරණ කාර්මික ශිල්පී",
    titleEn: "A/C & Refrigeration Technician",
    icon: "fa-solid fa-snowflake",
    color: "cyan",
    subskills: [
      "Inverter AC සවි කිරීම (Inverter AC Install)",
      "ගෑස් පිරවීම (Gas Top-up / Refill)",
      "සාමාන්‍ය සර්විස් කිරීම (Full Deep Clean)",
      "PCB Circuit පුවරු අලුත්වැඩියා",
      "වාණිජ ශීත කාමර (Commercial Cold Rooms)",
      "ශීතකරණ අලුත්වැඩියාව (Domestic Fridge)",
      "Washing Machine Repairs"
    ]
  },
  carpentry: {
    name: "වඩු කාර්මික ශිල්පී",
    titleEn: "Carpenter & Woodcraft",
    icon: "fa-solid fa-tree",
    color: "amber",
    subskills: [
      "වහල ගැසීම (Roofing & Truss)",
      "දොර ජනෙල් සවි කිරීම (Doors & Windows)",
      "පැන්ට්‍රි කබඩ් (Pantry Cupboards)",
      "ලී පොලිෂ් සහ වාර්නිෂ් (Wood Polishing)",
      "සිවිලිං ගැසීම (Ceiling Panels)",
      "ගෘහ භාණ්ඩ සාදා දීම (Custom Furniture)"
    ]
  },
  masonry: {
    name: "මේසන් කාර්මික ශිල්පී",
    titleEn: "Masonry & Tile Specialist",
    icon: "fa-solid fa-trowel-bricks",
    color: "orange",
    subskills: [
      "ටයිල් ඇල්ලීම (Floor & Wall Tiles)",
      "කොන්ක්‍රීට් සහ කණු දැමීම (Columns & Beams)",
      "ගඩොල් / බ්ලොක් බැඳීම (Brickwork)",
      "ප්ලාස්ටර් දැමීම (Plastering)",
      "Interlock ගල් ඇල්ලීම (Paving)",
      "වෝටර්පෲෆින් (Waterproofing Basements/Slabs)"
    ]
  },
  painting: {
    name: "තීන්ත සහ වෝටර්පෲෆින් ශිල්පී",
    titleEn: "Painting & Waterproofing",
    icon: "fa-solid fa-paint-roller",
    color: "purple",
    subskills: [
      "ඇතුළත බිත්ති තීන්ත (Interior Wall Emulsion)",
      "පිටත කාලගුණ ප්‍රතිරෝධී තීන්ත (Weather Shield)",
      "Waterproofing Coatings",
      "ස්ප්‍රේ පේන්ටින් (Spray Painting)",
      "Skim Coat & Putty Finish",
      "Texture & Wallpaper Designs"
    ]
  },
  cctv: {
    name: "CCTV සහ Smart Tech විශේෂඥ",
    titleEn: "CCTV & Security Tech",
    icon: "fa-solid fa-video",
    color: "emerald",
    subskills: [
      "IP කැමරා සවි කිරීම (IP Cameras)",
      "DVR / NVR Configuration",
      "WiFi & Networking Setup",
      "Alarm & Intercom Systems",
      "Smart Door Locks",
      "Fire Alarm Systems"
    ]
  },
  auto: {
    name: "වාහන කාර්මික ශිල්පී",
    titleEn: "Auto Mechanic & Hybrid Specialist",
    icon: "fa-solid fa-car-burst",
    color: "red",
    subskills: [
      "එන්ජින් ටියුනප් (Engine Tune-up)",
      "හයිබ්‍රිඩ් බැටරි සේවා (Hybrid Battery)",
      "බ්‍රේක් සහ සස්පෙන්ෂන් (Brakes & Suspension)",
      "වාහන ස්කෑන් කිරීම (OBD Diagnostics)",
      "Auto Electrical & Wiring",
      "Breakdown Rescue 24/7"
    ]
  },
  aluminium: {
    name: "ඇලුමිනියම් සහ වීදුරු ශිල්පී",
    titleEn: "Aluminium & Glass Fabricator",
    icon: "fa-solid fa-door-open",
    color: "slate",
    subskills: [
      "Sliding Doors & Windows",
      "Shower Cubicles (Toughened Glass)",
      "Aluminium Partitions",
      "Curtain Walls",
      "Cladding Panels",
      "Mosquito Nets"
    ]
  },
  general: {
    name: "සාමාන්‍ය කාර්මික සේවා (Handyman)",
    titleEn: "General Handyman & Repairs",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "yellow",
    subskills: [
      "වෙල්ඩින් වැඩ (Iron Works & Welding)",
      "ලොක් රෙපයාර් (Locks & Handles)",
      "Drill & Wall Mounting",
      "Roof Leak Repairs",
      "Gutter Cleaning",
      "Small Home Fixes"
    ]
  }
};

// =================================================================
// 3. REGISTRATION STATE & FORM MODEL
// =================================================================
let currentStep = 1;
const totalSteps = 5;
let selectedTradeKey = 'electrical';
let selectedWorkLocations = new Set();
let uploadedProfilePhotoData = '';
let uploadedNicFrontData = '';
let uploadedNicBackData = '';
let otpCountdownTimer = null;

// =================================================================
// 4. INITIALIZATION
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  populateDistrictSelect();
  renderTradeCards();
  renderTradeSubSkills('electrical');
  attachRealtimePreviewListeners();

  // Set default district & town
  const distSelect = document.getElementById('baas-district');
  if (distSelect) {
    distSelect.value = 'colombo';
    onDistrictChanged('colombo');
  }

  // Pre-fill trade if URL parameter exists e.g. ?trade=plumbing
  const urlParams = new URLSearchParams(window.location.search);
  const tradeParam = urlParams.get('trade');
  if (tradeParam && TRADE_DATA[tradeParam]) {
    selectTrade(tradeParam);
  }

  updateLivePreview();
});

// =================================================================
// 5. THEME & LANGUAGE MANAGEMENT
// =================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('baas_theme');
  const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('baas_theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
  showToast(isDark ? 'Dark Mode ක්‍රියාත්මකයි 🌙' : 'Light Mode ක්‍රියාත්මකයි ☀️', 'info');
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.className = isDark ? 'fa-solid fa-sun text-amber-400 rotate-180 transition-transform' : 'fa-solid fa-moon text-slate-400 rotate-0 transition-transform';
}

function initLanguage() {
  const savedLang = localStorage.getItem('baas_lang') || 'si';
  setLanguage(savedLang, false);
}

function setLanguage(lang, notify = true) {
  localStorage.setItem('baas_lang', lang);
  ['si', 'en', 'ta'].forEach(l => {
    const btn = document.getElementById(`btn-lang-${l}`);
    if (btn) {
      if (l === lang) {
        btn.className = "px-3 py-1 rounded-full text-xs font-black bg-brandOrange-500 text-slate-950 shadow-sm transition";
      } else {
        btn.className = "px-3 py-1 rounded-full text-xs font-bold text-slate-400 hover:text-white transition";
      }
    }
  });

  // Update text based on language
  const dict = {
    si: {
      step1: "මූලික තොරතුරු",
      step2: "වෘත්තිය & කුසලතා",
      step3: "සේවා ප්‍රදේශය",
      step4: "හැඳුනුම්පත & සත්‍යාපනය",
      step5: "තහවුරු කිරීම",
      next: "ඉදිරියට (Next) →",
      back: "← ආපසු (Back)"
    },
    en: {
      step1: "Personal Info",
      step2: "Trade & Skills",
      step3: "Service Area",
      step4: "ID & Verification",
      step5: "Confirm & OTP",
      next: "Continue →",
      back: "← Back"
    },
    ta: {
      step1: "தனிப்பட்ட விவரங்கள்",
      step2: "தொழில் மற்றும் திறன்கள்",
      step3: "சேவை பகுதி",
      step4: "அடையாள அட்டை",
      step5: "உறுதிப்படுத்தல்",
      next: "தொடரவும் →",
      back: "← பின்செல்"
    }
  };

  const d = dict[lang] || dict.si;
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`step-label-${i}`);
    if (el && d[`step${i}`]) el.innerText = d[`step${i}`];
  }

  if (notify) {
    const msgs = { si: "භාෂාව සිංහල ලෙස මාරු කරන ලදී", en: "Language switched to English", ta: "மொழி தமிழாக மாற்றப்பட்டது" };
    showToast(msgs[lang] || msgs.si, "info");
  }
}

// =================================================================
// 6. DISTRICTS & TOWNS DROPDOWNS & CHIPS
// =================================================================
function populateDistrictSelect() {
  const select = document.getElementById('baas-district');
  if (!select) return;

  select.innerHTML = '<option value="" disabled selected>දිස්ත්‍රික්කය තෝරන්න (Select District)</option>';
  
  SRI_LANKA_LOCATIONS.forEach(prov => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = prov.province;
    prov.districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = d.name;
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  });
}

function getDistrictData(distId) {
  for (const prov of SRI_LANKA_LOCATIONS) {
    const found = prov.districts.find(d => d.id === distId);
    if (found) return found;
  }
  return null;
}

function onDistrictChanged(distId) {
  const townSelect = document.getElementById('baas-base-town');
  const dObj = getDistrictData(distId);
  if (!dObj || !townSelect) return;

  townSelect.innerHTML = `<option value="" disabled selected>මූලික නගරය තෝරන්න (${dObj.name.split(' ')[0]})</option>`;
  dObj.towns.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    townSelect.appendChild(opt);
  });
  // Auto-select first town
  if (dObj.towns.length > 0) {
    townSelect.selectedIndex = 1;
  }

  renderTownChips(distId);
  updateLivePreview();
}

function renderTownChips(distId) {
  const container = document.getElementById('work-town-chips-container');
  const countEl = document.getElementById('town-chips-count');
  if (!container) return;

  const dObj = getDistrictData(distId);
  if (!dObj || !dObj.towns) {
    container.innerHTML = '<span class="text-xs text-slate-400 italic">පළමුව දිස්ත්‍රික්කය තෝරන්න</span>';
    if (countEl) countEl.innerText = '';
    return;
  }

  if (countEl) countEl.innerText = `(${dObj.towns.length} ක් ඇත)`;

  container.innerHTML = dObj.towns.map(t => {
    const isSel = selectedWorkLocations.has(t);
    const activeClass = isSel 
      ? 'bg-brandOrange-500 text-slate-950 border-brandOrange-500 font-black shadow-sm'
      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-brandOrange-400 font-bold';
    const icon = isSel ? '<i class="fa-solid fa-check text-[10px] mr-1"></i>' : '<i class="fa-solid fa-plus text-[10px] mr-1 text-brandOrange-500"></i>';

    return `<button type="button" onclick="toggleWorkTown('${t}')"
      class="text-xs px-3 py-1.5 rounded-xl border transition-all flex items-center active:scale-95 ${activeClass}">
      ${icon} ${t}
    </button>`;
  }).join('');

  renderSelectedTownBadges();
}

function toggleWorkTown(town) {
  if (selectedWorkLocations.has(town)) {
    selectedWorkLocations.delete(town);
  } else {
    selectedWorkLocations.add(town);
  }
  const currentDist = document.getElementById('baas-district')?.value || 'colombo';
  renderTownChips(currentDist);
  renderSelectedTownBadges();
  updateLivePreview();
}

function addCustomWorkLocation() {
  const input = document.getElementById('custom-work-input');
  if (!input) return;
  const town = input.value.trim();
  if (!town) return;
  selectedWorkLocations.add(town);
  input.value = '';
  renderSelectedTownBadges();
  updateLivePreview();
  showToast(`"${town}" සේවා ප්‍රදේශ වලට එක් කරන ලදී`, 'info');
}

function renderSelectedTownBadges() {
  const container = document.getElementById('selected-work-badges');
  const countEl = document.getElementById('selected-towns-count');
  const clearBtn = document.getElementById('btn-clear-towns');
  if (!container) return;

  if (countEl) countEl.innerText = selectedWorkLocations.size;
  if (clearBtn) {
    if (selectedWorkLocations.size > 0) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }

  if (selectedWorkLocations.size === 0) {
    container.innerHTML = `<span class="text-xs text-slate-400 dark:text-slate-500 italic">කිසිදු නගරයක් තෝරා නැත. ඉහතින් නගර ක්ලික් කරන්න.</span>`;
    return;
  }

  container.innerHTML = Array.from(selectedWorkLocations).map(t => {
    return `<span class="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700/80 px-2.5 py-1 rounded-xl text-xs font-black shadow-xs">
      <i class="fa-solid fa-location-dot text-brandOrange-500 text-[10px]"></i>
      ${t}
      <button type="button" onclick="removeWorkTown('${t}')" class="ml-1 text-slate-400 hover:text-red-500 transition">
        <i class="fa-solid fa-xmark text-xs"></i>
      </button>
    </span>`;
  }).join('');
}

function removeWorkTown(town) {
  selectedWorkLocations.delete(town);
  const currentDist = document.getElementById('baas-district')?.value || 'colombo';
  renderTownChips(currentDist);
  renderSelectedTownBadges();
  updateLivePreview();
}

function clearAllWorkTowns() {
  selectedWorkLocations.clear();
  const currentDist = document.getElementById('baas-district')?.value || 'colombo';
  renderTownChips(currentDist);
  renderSelectedTownBadges();
  updateLivePreview();
}

function toggleAllDistrictCoverage(checked) {
  const currentDist = document.getElementById('baas-district')?.value || 'colombo';
  const dObj = getDistrictData(currentDist);
  if (!dObj) return;

  if (checked) {
    dObj.towns.forEach(t => selectedWorkLocations.add(t));
    showToast(`මුළු ${dObj.name.split(' ')[0]} දිස්ත්‍රික්කයේම නගර තෝරාගන්නා ලදී`, 'success');
  } else {
    dObj.towns.forEach(t => selectedWorkLocations.delete(t));
  }
  renderTownChips(currentDist);
  renderSelectedTownBadges();
  updateLivePreview();
}

// =================================================================
// 7. TRADE SELECTION & DYNAMIC SUB-SKILLS
// =================================================================
function renderTradeCards() {
  const container = document.getElementById('trade-cards-grid');
  if (!container) return;

  container.innerHTML = Object.keys(TRADE_DATA).map(key => {
    const t = TRADE_DATA[key];
    const isSelected = key === selectedTradeKey;
    return `
      <div onclick="selectTrade('${key}')" id="trade-card-${key}"
        class="trade-card p-4 rounded-2xl flex flex-col items-center text-center gap-2.5 transition relative ${isSelected ? 'selected' : ''}">
        
        <div class="check-badge absolute top-2 right-2 w-6 h-6 rounded-full bg-brandOrange-500 text-slate-950 items-center justify-center text-xs font-black shadow-md">
          <i class="fa-solid fa-check"></i>
        </div>

        <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-slate-800 text-brandOrange-500 flex items-center justify-center text-2xl shadow-inner border border-amber-200/60 dark:border-slate-700">
          <i class="${t.icon}"></i>
        </div>

        <div>
          <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">${t.name}</h5>
          <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">${t.titleEn}</p>
        </div>
      </div>
    `;
  }).join('');
}

function selectTrade(tradeKey) {
  if (!TRADE_DATA[tradeKey]) return;
  selectedTradeKey = tradeKey;

  // Update card selected visual
  Object.keys(TRADE_DATA).forEach(k => {
    const el = document.getElementById(`trade-card-${k}`);
    if (el) {
      if (k === tradeKey) el.classList.add('selected');
      else el.classList.remove('selected');
    }
  });

  renderTradeSubSkills(tradeKey);
  updateLivePreview();
}

function renderTradeSubSkills(tradeKey) {
  const container = document.getElementById('trade-subskills-container');
  const t = TRADE_DATA[tradeKey];
  if (!container || !t) return;

  container.innerHTML = t.subskills.map((skill, idx) => {
    const isChecked = idx < 3 ? 'checked' : '';
    return `
      <label class="skill-chip">
        <input type="checkbox" name="baas_subskills" value="${skill}" ${isChecked} class="sr-only" onchange="updateLivePreview()">
        <div class="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 hover:border-brandOrange-400">
          <i class="fa-solid fa-screwdriver text-[10px] text-brandOrange-500"></i>
          <span>${skill}</span>
        </div>
      </label>
    `;
  }).join('');
}

// =================================================================
// 8. PROFILE PHOTO UPLOAD & AVATAR CHOOSER
// =================================================================
function handlePhotoUpload(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];

  if (!file.type.startsWith('image/')) {
    showToast('කරුණාකර වලංගු ඡායාරූපයක් (JPG/PNG) තෝරන්න', 'danger');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    uploadedProfilePhotoData = e.target.result;
    setPhotoPreview(uploadedProfilePhotoData);
    showToast('ඡායාරූපය සාර්ථකව උඩුගත කරන ලදී!', 'success');
    updateLivePreview();
  };
  reader.readAsDataURL(file);
}

function setPhotoPreview(src) {
  const preview = document.getElementById('photo-preview-img');
  const placeholder = document.getElementById('photo-preview-placeholder');
  if (preview && placeholder) {
    preview.src = src;
    preview.classList.remove('hidden');
    placeholder.classList.add('hidden');
  }
  const sideCardImg = document.getElementById('card-pro-img');
  if (sideCardImg) sideCardImg.src = src;
}

function choosePresetAvatar(avatarUrl) {
  uploadedProfilePhotoData = avatarUrl;
  setPhotoPreview(avatarUrl);
  updateLivePreview();
  showToast('Avatar ඡායාරූපය තෝරාගන්නා ලදී', 'info');
}

// Drag & drop photo zone
function setupPhotoDropzone() {
  const dropzone = document.getElementById('photo-dropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      const fileInput = document.getElementById('baas-photo-input');
      if (fileInput) {
        fileInput.files = files;
        handlePhotoUpload(fileInput);
      }
    }
  }, false);
}

// =================================================================
// 9. NIC FRONT & BACK UPLOAD
// =================================================================
function handleNicUpload(input, side) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    if (side === 'front') {
      uploadedNicFrontData = data;
      const prev = document.getElementById('nic-front-preview');
      if (prev) {
        prev.src = data;
        prev.classList.remove('hidden');
      }
    } else {
      uploadedNicBackData = data;
      const prev = document.getElementById('nic-back-preview');
      if (prev) {
        prev.src = data;
        prev.classList.remove('hidden');
      }
    }
    showToast(`NIC ${side.toUpperCase()} සාර්ථකව ලබාගන්නා ලදී`, 'success');
  };
  reader.readAsDataURL(file);
}

// =================================================================
// 10. REAL-TIME LIVE BAAS CARD SYNC
// =================================================================
function attachRealtimePreviewListeners() {
  const inputs = [
    'baas-full-name',
    'baas-display-name',
    'baas-phone',
    'baas-experience',
    'baas-district',
    'baas-base-town',
    'baas-rate-type',
    'baas-rate-amount',
    'baas-emergency-toggle',
    'baas-transport'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateLivePreview);
      el.addEventListener('change', updateLivePreview);
    }
  });

  // WhatsApp checkbox sync
  const waSameChk = document.getElementById('baas-wa-same');
  if (waSameChk) {
    waSameChk.addEventListener('change', (e) => {
      const waInput = document.getElementById('baas-whatsapp');
      const phoneInput = document.getElementById('baas-phone');
      if (e.target.checked && waInput && phoneInput) {
        waInput.value = phoneInput.value;
      }
    });
  }

  // Password strength check
  const pwInput = document.getElementById('baas-password');
  if (pwInput) {
    pwInput.addEventListener('input', (e) => checkPasswordStrength(e.target.value));
  }
}

function updateLivePreview() {
  // Name
  const fullName = document.getElementById('baas-full-name')?.value.trim() || 'කස්සප බණ්ඩාර';
  const displayName = document.getElementById('baas-display-name')?.value.trim() || '';
  const finalName = displayName ? `${displayName} (${fullName})` : fullName;

  const cardName = document.getElementById('card-pro-name');
  if (cardName) cardName.innerText = finalName;

  // Trade Title & Icon
  const t = TRADE_DATA[selectedTradeKey] || TRADE_DATA.electrical;
  const cardTitle = document.getElementById('card-pro-title');
  if (cardTitle) cardTitle.innerText = t.name;

  const cardIcon = document.getElementById('card-pro-icon');
  if (cardIcon) cardIcon.className = `${t.icon} text-brandOrange-500`;

  // District & Town
  const distSelect = document.getElementById('baas-district');
  const distId = distSelect?.value || 'colombo';
  const dObj = getDistrictData(distId);
  const distName = dObj ? dObj.name.split(' ')[0] : 'කොළඹ';
  const townName = document.getElementById('baas-base-town')?.value || (dObj ? dObj.towns[0] : 'මහරගම');

  const cardLoc = document.getElementById('card-pro-location');
  if (cardLoc) {
    const townsCount = selectedWorkLocations.size > 0 ? ` + නගර ${selectedWorkLocations.size}ක්` : '';
    cardLoc.innerText = `${townName}, ${distName}${townsCount}`;
  }

  // Experience
  const expVal = document.getElementById('baas-experience')?.value || '5-10';
  const cardExp = document.getElementById('card-pro-exp');
  if (cardExp) cardExp.innerText = `වසර ${expVal} ක පළපුරුද්ද`;

  // Rate
  const rateType = document.getElementById('baas-rate-type')?.value || 'daily';
  const rateAmount = document.getElementById('baas-rate-amount')?.value.trim();
  const cardRate = document.getElementById('card-pro-rate');
  if (cardRate) {
    if (rateAmount) {
      cardRate.innerText = `රු. ${Number(rateAmount).toLocaleString()} / ${rateType === 'daily' ? 'දිනකට' : (rateType === 'hourly' ? 'පැයකට' : 'වැඩේට')}`;
    } else {
      cardRate.innerText = `සාකච්ඡා කර තීරණය කෙරේ`;
    }
  }

  // Emergency Badge
  const isEmergency = document.getElementById('baas-emergency-toggle')?.checked;
  const cardEmergency = document.getElementById('card-pro-emergency');
  if (cardEmergency) {
    if (isEmergency) cardEmergency.classList.remove('hidden');
    else cardEmergency.classList.add('hidden');
  }

  // Phone preview
  const phone = document.getElementById('baas-phone')?.value.trim() || '77 123 4567';
  const cardPhone = document.getElementById('card-pro-phone-display');
  if (cardPhone) cardPhone.innerText = `+94 ${phone}`;

  // Image preview
  const cardImg = document.getElementById('card-pro-img');
  if (cardImg && uploadedProfilePhotoData) {
    cardImg.src = uploadedProfilePhotoData;
  }
}

function checkPasswordStrength(pw) {
  const bar = document.getElementById('password-strength-fill');
  const label = document.getElementById('password-strength-label');
  if (!bar) return;

  if (!pw || pw.length === 0) {
    bar.className = 'strength-bar-fill';
    if (label) label.innerText = 'මුරපදය ඇතුළත් කරන්න';
    return;
  }

  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 8 && /[0-9]/.test(pw)) score++;
  if (pw.length >= 10 && /[^A-Za-z0-9]/.test(pw)) score++;

  if (score === 1) {
    bar.className = 'strength-bar-fill strength-weak';
    if (label) label.innerText = 'ශක්තිය: දුර්වලයි (අවම අකුරු 8ක් හෝ ඉලක්කම් යොදන්න)';
  } else if (score === 2) {
    bar.className = 'strength-bar-fill strength-medium';
    if (label) label.innerText = 'ශක්තිය: සාමාන්‍යයි (හොඳයි)';
  } else {
    bar.className = 'strength-bar-fill strength-strong';
    if (label) label.innerText = 'ශක්තිය: ඉතා ශක්තිමත්! 🛡️';
  }
}

function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input || !icon) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// =================================================================
// 11. STEP NAVIGATION & VALIDATIONS
// =================================================================
function nextStep() {
  if (!validateCurrentStep(currentStep)) return;
  if (currentStep < totalSteps) {
    goToStep(currentStep + 1);
  } else {
    submitRegistration();
  }
}

function prevStep() {
  if (currentStep > 1) {
    goToStep(currentStep - 1);
  }
}

function goToStep(step) {
  if (step < 1 || step > totalSteps) return;
  currentStep = step;

  // Update panels visibility
  for (let i = 1; i <= totalSteps; i++) {
    const panel = document.getElementById(`step-panel-${i}`);
    const stepNav = document.getElementById(`step-item-${i}`);
    if (panel) {
      if (i === step) {
        panel.classList.remove('hidden');
        panel.classList.add('block');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('block');
      }
    }

    if (stepNav) {
      if (i < step) {
        stepNav.classList.remove('active');
        stepNav.classList.add('completed');
      } else if (i === step) {
        stepNav.classList.add('active');
        stepNav.classList.remove('completed');
      } else {
        stepNav.classList.remove('active', 'completed');
      }
    }
  }

  // Update progress bar
  const progressBar = document.getElementById('wizard-progress-bar');
  if (progressBar) {
    progressBar.style.width = `${((step - 1) / (totalSteps - 1)) * 100}%`;
  }

  // Special hooks on step entry
  if (step === 5) {
    prepareOtpVerification();
  }

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function validateCurrentStep(step) {
  if (step === 1) {
    const fullName = document.getElementById('baas-full-name')?.value.trim();
    const phone = document.getElementById('baas-phone')?.value.trim();
    const password = document.getElementById('baas-password')?.value;
    const confirmPw = document.getElementById('baas-confirm-password')?.value;

    if (!fullName || fullName.length < 3) {
      showToast('කරුණාකර ඔබගේ සම්පූර්ණ නම ඇතුළත් කරන්න', 'danger');
      document.getElementById('baas-full-name')?.focus();
      return false;
    }

    if (!phone || phone.replace(/[^0-9]/g, '').length < 9) {
      showToast('කරුණාකර වලංගු දුරකථන අංකයක් ඇතුළත් කරන්න (උදා: 77 123 4567)', 'danger');
      document.getElementById('baas-phone')?.focus();
      return false;
    }

    if (!password || password.length < 6) {
      showToast('මුරපදය සඳහා අවම වශයෙන් අකුරු 6ක් අවශ්‍යයි', 'danger');
      document.getElementById('baas-password')?.focus();
      return false;
    }

    if (password !== confirmPw) {
      showToast('මුරපද දෙක එකිනෙකට නොගැලපේ!', 'danger');
      document.getElementById('baas-confirm-password')?.focus();
      return false;
    }
  }

  if (step === 2) {
    if (!selectedTradeKey) {
      showToast('කරුණාකර ඔබගේ ප්‍රධාන වෘත්තීය ක්ෂේත්‍රය තෝරන්න', 'danger');
      return false;
    }
  }

  if (step === 3) {
    const dist = document.getElementById('baas-district')?.value;
    const town = document.getElementById('baas-base-town')?.value;
    if (!dist) {
      showToast('කරුණාකර ඔබගේ ප්‍රධාන දිස්ත්‍රික්කය තෝරන්න', 'danger');
      return false;
    }
    if (!town) {
      showToast('කරුණාකර ඔබගේ ප්‍රධාන නගරය තෝරන්න', 'danger');
      return false;
    }
  }

  return true;
}

// =================================================================
// 12. OTP VERIFICATION & COUNTDOWN
// =================================================================
function prepareOtpVerification() {
  const phone = document.getElementById('baas-phone')?.value.trim() || '77 123 4567';
  const displayEl = document.getElementById('otp-target-phone');
  if (displayEl) displayEl.innerText = `+94 ${phone}`;

  startOtpCountdown(60);
  setTimeout(() => {
    document.getElementById('otp-digit-1')?.focus();
  }, 200);
}

function handleOtpDigitInput(input, index) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value.length === 1 && index < 4) {
    const nextInput = document.getElementById(`otp-digit-${index + 1}`);
    if (nextInput) nextInput.focus();
  }
}

function handleOtpDigitKey(event, index) {
  if (event.key === 'Backspace') {
    const current = document.getElementById(`otp-digit-${index}`);
    if (current && current.value === '' && index > 1) {
      const prev = document.getElementById(`otp-digit-${index - 1}`);
      if (prev) {
        prev.focus();
        prev.value = '';
      }
    }
  }
}

function startOtpCountdown(seconds = 60) {
  let timeLeft = seconds;
  const timerEl = document.getElementById('otp-timer-display');
  const resendBtn = document.getElementById('btn-resend-otp');

  if (resendBtn) resendBtn.disabled = true;

  if (otpCountdownTimer) clearInterval(otpCountdownTimer);

  otpCountdownTimer = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.innerText = `(${timeLeft}s)`;

    if (timeLeft <= 0) {
      clearInterval(otpCountdownTimer);
      if (timerEl) timerEl.innerText = '';
      if (resendBtn) {
        resendBtn.disabled = false;
        resendBtn.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  }, 1000);
}

function resendOtp() {
  showToast('නව SMS OTP කේතයක් ඔබගේ දුරකථනයට එවන ලදී!', 'info');
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`otp-digit-${i}`);
    if (el) el.value = '';
  }
  document.getElementById('otp-digit-1')?.focus();
  startOtpCountdown(60);
}

// =================================================================
// 13. SUBMIT REGISTRATION & SAVE TO LOCALSTORAGE
// =================================================================
function submitRegistration() {
  // Get OTP digits
  let otp = '';
  for (let i = 1; i <= 4; i++) {
    otp += (document.getElementById(`otp-digit-${i}`)?.value || '');
  }

  if (otp.length < 4) {
    showToast('කරුණාකර අංක 4 කින් යුත් OTP කේතය ඇතුළත් කරන්න', 'danger');
    return;
  }

  // Generate Pro ID e.g. BAAS-PRO-8492
  const randomProNum = Math.floor(1000 + Math.random() * 9000);
  const proId = `BAAS-PRO-${randomProNum}`;

  const fullName = document.getElementById('baas-full-name')?.value.trim() || 'කස්සප බණ්ඩාර';
  const displayName = document.getElementById('baas-display-name')?.value.trim() || fullName;
  const phone = document.getElementById('baas-phone')?.value.trim() || '77 123 4567';
  const whatsapp = document.getElementById('baas-whatsapp')?.value.trim() || phone;
  const nic = document.getElementById('baas-nic')?.value.trim() || '';
  const experience = document.getElementById('baas-experience')?.value || '5-10';
  const district = document.getElementById('baas-district')?.value || 'colombo';
  const baseTown = document.getElementById('baas-base-town')?.value || 'මහරගම';
  const rateType = document.getElementById('baas-rate-type')?.value || 'daily';
  const rateAmount = document.getElementById('baas-rate-amount')?.value.trim() || '3500';
  const emergency = document.getElementById('baas-emergency-toggle')?.checked || false;
  const transport = document.getElementById('baas-transport')?.value || 'bike';
  const bio = document.getElementById('baas-bio')?.value.trim() || 'විශ්වාසනීය සහ කඩිනම් සේවය.';

  // Gather selected subskills
  const subskillEls = document.querySelectorAll('input[name="baas_subskills"]:checked');
  const subskills = Array.from(subskillEls).map(el => el.value);

  const t = TRADE_DATA[selectedTradeKey] || TRADE_DATA.electrical;

  const newProProfile = {
    id: proId,
    fullName,
    displayName,
    phone,
    whatsapp,
    nic,
    tradeKey: selectedTradeKey,
    tradeName: t.name,
    tradeTitleEn: t.titleEn,
    subskills,
    experienceYears: experience,
    district,
    baseTown,
    preferredTowns: Array.from(selectedWorkLocations),
    rateType,
    rateAmount,
    emergency,
    transport,
    bio,
    photoUrl: uploadedProfilePhotoData || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    registeredAt: new Date().toISOString(),
    isVerified: true,
    rating: '5.0',
    completedJobs: 0
  };

  // Save to localStorage
  try {
    let pros = JSON.parse(localStorage.getItem('baas_registered_pros') || '[]');
    pros.unshift(newProProfile);
    localStorage.setItem('baas_registered_pros', JSON.stringify(pros));
    localStorage.setItem('baas_logged_in_user', JSON.stringify({
      role: 'baas',
      name: displayName,
      proId: proId,
      phone: phone
    }));
  } catch (e) {
    console.error('Storage error', e);
  }

  // Trigger Celebration View
  showSuccessCelebration(newProProfile);
}

function showSuccessCelebration(pro) {
  // Hide form card and side preview
  const formCard = document.getElementById('main-registration-card');
  const previewCard = document.getElementById('side-preview-column');
  const stepsHeader = document.getElementById('wizard-steps-header');
  const celebrationPanel = document.getElementById('celebration-panel');

  if (formCard) formCard.classList.add('hidden');
  if (previewCard) previewCard.classList.add('hidden');
  if (stepsHeader) stepsHeader.classList.add('hidden');
  if (celebrationPanel) {
    celebrationPanel.classList.remove('hidden');
    celebrationPanel.classList.add('flex');
  }

  // Fill celebration ID card
  const proIdEl = document.getElementById('celebration-pro-id');
  const proNameEl = document.getElementById('celebration-pro-name');
  const proTradeEl = document.getElementById('celebration-pro-trade');
  const proLocEl = document.getElementById('celebration-pro-loc');
  const proImgEl = document.getElementById('celebration-pro-img');

  if (proIdEl) proIdEl.innerText = pro.id;
  if (proNameEl) proNameEl.innerText = pro.displayName;
  if (proTradeEl) proTradeEl.innerText = pro.tradeName;
  if (proLocEl) proLocEl.innerText = `${pro.baseTown}, ${pro.district.toUpperCase()}`;
  if (proImgEl) proImgEl.src = pro.photoUrl;

  triggerConfetti();
  showToast('සාදරයෙන් පිළිගනිමු! Baas.lk සමඟ ඔබගේ ලියාපදිංචිය සාර්ථකයි! 🚀', 'success');
}

function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const colors = ['#f59e0b', '#0066fe', '#10b981', '#fbbf24', '#ec4899', '#8b5cf6'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${-20 + Math.random() * 20}px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `scale(${0.5 + Math.random()})`;
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

// =================================================================
// 14. TOAST NOTIFICATIONS HELPER
// =================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const isDanger = type === 'danger';
  const isInfo = type === 'info';

  let bgBorder = 'bg-brandBlue-950 border-brandOrange-500 text-white';
  let icon = 'fa-circle-check text-emerald-400';

  if (isDanger) {
    bgBorder = 'bg-rose-950 border-rose-500 text-white';
    icon = 'fa-triangle-exclamation text-rose-400';
  } else if (isInfo) {
    bgBorder = 'bg-slate-900 border-cyan-400 text-white';
    icon = 'fa-circle-info text-cyan-300';
  }

  toast.className = `flex items-center gap-3 ${bgBorder} border-l-4 px-4 sm:px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold transition-all duration-300 transform translate-y-4 opacity-0 max-w-sm backdrop-blur-md z-[300]`;
  toast.innerHTML = `<i class="fa-solid ${icon} text-lg shrink-0"></i><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}
