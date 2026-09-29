/**
 * =================================================================
 * BAAS.LK - ENHANCED CORE JAVASCRIPT ENGINE
 * Multi-Language (Sinhala / English / Tamil), 3D Interactions,
 * Mobile Bottom Nav, Mobile Drawer, Live Ticker, Dark Mode,
 * Real-time Cost Estimator, Search/Filter, and Modals System
 * =================================================================
 */

// 1. Tailwind CSS Custom Theme Configuration
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Noto Sans Sinhala', 'Noto Sans Tamil', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
          brandBlue: {
            50: '#eef6ff',
            100: '#d9eaff',
            200: '#bcd9ff',
            300: '#8ec0ff',
            400: '#599cff',
            500: '#0066fe',
            600: '#004fe6',
            700: '#003eb8',
            800: '#022e86',
            900: '#021845',
            950: '#010c24',
          },
          brandOrange: {
            300: '#fde047',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
          darkSurface: {
            800: '#0b192e',
            900: '#071223',
            950: '#030a16',
          }
        },
        boxShadow: {
          '3d': '0 20px 40px -15px rgba(2, 24, 69, 0.25), 0 0 1px 1px rgba(255, 255, 255, 0.4) inset',
          '3d-hover': '0 30px 60px -15px rgba(0, 79, 230, 0.35), 0 0 2px 1px rgba(245, 158, 11, 0.6) inset',
          'neon-orange': '0 0 25px rgba(245, 158, 11, 0.45)',
          'neon-blue': '0 0 30px rgba(0, 102, 254, 0.35)',
          'inner-glow': 'inset 0 2px 6px rgba(255, 255, 255, 0.2), inset 0 -2px 6px rgba(0, 0, 0, 0.2)',
        },
        animation: {
          'float-slow': 'float 6s ease-in-out infinite',
          'float-medium': 'float 4s ease-in-out infinite',
          'float-fast': 'float 2.8s ease-in-out infinite',
          'pulse-glow': 'pulseGlow 2.5s infinite',
          'spin-slow': 'spin 18s linear infinite',
          'shine': 'shine 4s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-14px) rotate(1deg)' },
          },
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.7)' },
          },
          shine: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          }
        }
      }
    }
  };
}

// =================================================================
// 2. TRILINGUAL DICTIONARY DATA (SINHALA, ENGLISH, TAMIL)
// =================================================================
const i18n = {
  si: {
    onlineBaas: "🟢 ලංකාව පුරා පරීක්ෂා කළ බාස්ලා 1,482ක් සූදානමින්!",
    supportLabel: "ක්ෂණික පාරිභෝගික සහාය:",
    sosBtn: "හදිසි SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "මිල ගණනය",
    navPostJob: "නොමිලේ වැඩක් දාන්න",
    navSignIn: "ඇතුළු වන්න / ලියාපදිංචි",
    
    catAll: "සියලු සේවාවන්",
    catAc: "AC රෙපයාර්",
    catPlumbing: "නල සහ ජල වැඩ",
    catElectrical: "විදුලි කාර්මික",
    catVehicle: "වාහන රෙපයාර්",
    catCarpentry: "වඩු කාර්මික",
    catCctv: "CCTV & Tech",
    catPainting: "තීන්ත & වහල",
    catMasonry: "මේසන් & ගොඩනැගිලි",

    heroBadge: "ශ්‍රී ලංකාවේ අංක 1 පරීක්ෂිත බාස්ලාගේ Platform එක",
    heroTitle1: "ඔබට ආසන්නයෙන්ම විශ්වාසනීය",
    heroTitle2: "බාස් කෙනෙක් මිනිත්තු කිහිපයකින් හොයාගන්න!",
    heroDesc: "වෙනත් අයගෙන් දුරකථන අංක ඉල්ල ඉල්ලා රස්තියාදු වෙන්න එපා. දිවයිනේ ප්‍රමුඛතම ප්ලම්බර්ලා, ඉලෙක්ට්‍රීෂියන්ලා, AC සහ වාහන කාර්මිකයින් සෘජුවම සම්බන්ධ කරගන්න!",
    heroBtn: "බාස් කෙනෙක් හොයන්න",
    popularLabel: "ජනප්‍රිය සේවා:",
    
    statJobs: "සම්පූර්ණ කළ වැඩ",
    statPros: "ලියාපදිංචි බාස්ලා",
    statRating: "පාරිභෝගික තෘප්තිය",

    badge1: "ප්‍රාදේශීය පරීක්ෂිත බාස්ලා",
    badge2: "Verified & Recommended ✅",

    feat1Title: "NIC සහ Police Report පරීක්ෂිතයි",
    feat1Desc: "අපගේ ජාලයේ සෑම කාර්මික ශිල්පියෙකුගේම අනන්‍යතාවය සහ විශ්වාසනීයත්වය පරීක්ෂා කර ඇත.",
    feat2Title: "සාධාරණ සහ විනිවිද මිල ගණන්",
    feat2Desc: "වැඩේ පටන් ගන්න කලින් පැහැදිලි මිල ගණන්. අමතර සැඟවුණු ගාස්තු නොමැත.",
    feat3Title: "මිනිත්තු 30න් ස්ථානයට",
    feat3Desc: "ඔබේම නගරයේ සහ ගමේ සිටින බාස්ලා ක්ෂණිකව ඔබේ නිවසටම කැඳවා ගන්න.",
    feat4Title: "සේවා වගකීම් සහතිකය",
    feat4Desc: "සිදු කරන කාර්මික අලුත්වැඩියාවන් සඳහා දින 30ක පාරිභෝගික තෘප්තිමත් වගකීමක්.",

    tagVerified: "පරීක්ෂිත නාමාවලිය",
    servicesHeading: "ඉහළම ඇගයීම් ලත් ප්‍රාදේශීය බාස්ලා",
    servicesSub: "ඔබට ආසන්නතම කාර්මික ශිල්පීන් සෘජුවම සම්බන්ධ කරගන්න. සාධාරණ ගාස්තු සහ විශ්වාසනීය සේවය.",
    sortLabel: "පිළිවෙල:",

    estimatorBadge: "ස්වයංක්‍රීය මිල ගණනය කිරීම",
    estimatorHead: "ඔබේ වැඩේට යන ගාස්තුව කලින්ම බලාගන්න!",
    estimatorDesc: "බාස් කෙනෙක් පැමිණීමට පෙර ඔබේ අවශ්‍යතාවය අනුව ආසන්නතම සාධාරණ සේවා ගාස්තුව නිවැරදිව ගණනය කරගත හැක.",

    tagReviews: "පාරිභෝගික අත්දැකීම්",
    reviewsHeading: "ලංකාව පුරා පාරිභෝගිකයින් පවසන දේ",
    reviewsSub: "දිනපතා දහස් ගණනක් දෙනා Baas.lk හරහා සිය නිවෙස් සහ වාහන වැඩ සතුටින් විසඳා ගනී.",

    proJoinBadge: "කාර්මික ශිල්පීන් සඳහා",
    proJoinHead: "ඔබත් දක්ෂ බාස් කෙනෙක්ද? Baas.lk සමඟ එකතු වන්න!",
    proJoinDesc: "දිනපතා නව සේවා අවස්ථා ලබාගෙන ඔබේ ආදායම වැඩි කරගන්න. ලියාපදිංචිය නොමිලේ.",
    proJoinBtn: "බාස් කෙනෙක් ලෙස ලියාපදිංචි වන්න",

    mobileNavHome: "මුල් පිටුව",
    mobileNavExplore: "බාස්ලා",
    mobileNavSos: "හදිසි SOS",
    mobileNavCalc: "මිල ගණනය",
    mobileNavAccount: "ගිණුම",

    footerAbout: "ශ්‍රී ලංකාවේ නිවාස, කාර්යාල සහ වාහන අලුත්වැඩියා සඳහා පරීක්ෂිත ප්‍රාදේශීය බාස්ලා සෘජුවම සම්බන්ධ කරන අංක 1 පද්ධතිය.",
    footerServices: "ප්‍රධාන සේවාවන්",
    footerDistricts: "ආවරණය වන දිස්ත්‍රික්ක",
    footerTrust: "ආරක්ෂාව සහ සහාය"
  },

  en: {
    onlineBaas: "🟢 1,482 Sri Lankan Verified Technicians Online Now!",
    supportLabel: "Instant Support:",
    sosBtn: "Emergency SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "Cost Estimator",
    navPostJob: "Post Free Job",
    navSignIn: "Sign In / Register",
    
    catAll: "All Services",
    catAc: "AC Repair",
    catPlumbing: "Plumbing",
    catElectrical: "Electrical",
    catVehicle: "Vehicle Care",
    catCarpentry: "Carpentry",
    catCctv: "CCTV & Tech",
    catPainting: "Painting & Roof",
    catMasonry: "Masonry & Civil",

    heroBadge: "#1 Verified Technician Platform in Sri Lanka",
    heroTitle1: "Find Verified Local",
    heroTitle2: "Baas In Minutes, Stress-Free!",
    heroDesc: "No more asking around for contacts. Connect directly with vetted plumbers, electricians, mechanics, and technicians across Colombo, Kandy, Galle, Jaffna and islandwide!",
    heroBtn: "Find A Baas",
    popularLabel: "Popular Services:",
    
    statJobs: "Jobs Completed",
    statPros: "Registered Pros",
    statRating: "Satisfaction",

    badge1: "Vetted Local Technicians",
    badge2: "Verified & Recommended ✅",

    feat1Title: "NIC & Police Cleared",
    feat1Desc: "Every professional technician on our platform undergoes strict identity and background checks.",
    feat2Title: "Fair & Transparent Pricing",
    feat2Desc: "Upfront pricing before work begins. Absolutely zero hidden fees or unexpected costs.",
    feat3Title: "Arrives in 30 Minutes",
    feat3Desc: "Get local specialists from your own neighborhood right to your doorstep promptly.",
    feat4Title: "30-Day Work Warranty",
    feat4Desc: "Enjoy complete peace of mind with our 30-day workmanship guarantee on all repairs.",

    tagVerified: "Verified Directory",
    servicesHeading: "Top Rated Local Technicians",
    servicesSub: "Connect directly with local specialists. Transparent rates and verified workmanship.",
    sortLabel: "Sort By:",

    estimatorBadge: "Automated Cost Estimator",
    estimatorHead: "Estimate Your Repair Cost Upfront!",
    estimatorDesc: "Calculate fair, standard market rates in LKR before dispatching a technician.",

    tagReviews: "Customer Stories",
    reviewsHeading: "What Sri Lankans Say About Us",
    reviewsSub: "Thousands of homeowners and vehicle owners trust Baas.lk every single day.",

    proJoinBadge: "For Sri Lankan Tradesmen",
    proJoinHead: "Are You a Skilled Tradesman? Join Baas.lk Today!",
    proJoinDesc: "Get direct local customer leads daily and increase your earnings. Registration is completely free.",
    proJoinBtn: "Join as a Verified Baas",

    mobileNavHome: "Home",
    mobileNavExplore: "Pros",
    mobileNavSos: "SOS",
    mobileNavCalc: "Estimator",
    mobileNavAccount: "Account",

    footerAbout: "#1 Sri Lankan platform connecting verified local tradesmen directly for home, office, and vehicle repairs.",
    footerServices: "Main Services",
    footerDistricts: "Districts Covered",
    footerTrust: "Trust & Safety"
  },

  ta: {
    onlineBaas: "🟢 இலங்கை முழுவதும் சரிபார்க்கப்பட்ட 1,482 கைவினைஞர்கள் தயார்!",
    supportLabel: "உடனடி உதவி:",
    sosBtn: "அவசர SOS",
    logoSubtitle: "Verified Sri Lanka",
    navCalc: "கட்டணக் கணிப்பான்",
    navPostJob: "இலவச வேலை பதிவிடுங்கள்",
    navSignIn: "உள்நுழைக / பதிவு செய்க",
    
    catAll: "அனைத்து சேவைகளும்",
    catAc: "ஏசி பழுதுபார்த்தல்",
    catPlumbing: "குழாய் & நீர் வேலைகள்",
    catElectrical: "மின்சார வேலைகள்",
    catVehicle: "வாகன பழுதுபார்த்தல்",
    catCarpentry: "தச்சு வேலைகள்",
    catCctv: "CCTV & கணினி",
    catPainting: "வண்ணம் & கூரை",
    catMasonry: "மேசன் & கட்டிட வேலை",

    heroBadge: "இலங்கையின் முதன்மை சரிபார்க்கப்பட்ட கைவினைஞர்கள் தளம்",
    heroTitle1: "உங்களுக்கு அருகிலுள்ள நம்பகமான",
    heroTitle2: "கைவினைஞரை சில நிமிடங்களில் கண்டறியுங்கள்!",
    heroDesc: "மற்றவர்களிடம் தொலைபேசி எண்களைக் கேட்டு அலைய வேண்டாம். கொழும்பு, கண்டி, காலி, யாழ்ப்பாணம் மற்றும் நாடு தழுவிய பிளம்பர்கள், எலக்ட்ரீஷியன்களை உடனே தொடர்பு கொள்ளுங்கள்!",
    heroBtn: "கைவினைஞரைத் தேடுங்கள்",
    popularLabel: "பிரபலமான சேவைகள்:",
    
    statJobs: "முடிந்த வேலைகள்",
    statPros: "பதிவுசெய்த கைவினைஞர்கள்",
    statRating: "வாடிக்கையாளர் திருப்தி",

    badge1: "சரிபார்க்கப்பட்ட கைவினைஞர்கள்",
    badge2: "Verified & Recommended ✅",

    feat1Title: "தேசிய அடையாள அட்டை & காவல் சரிபார்ப்பு",
    feat1Desc: "எங்கள் தளத்தில் உள்ள ஒவ்வொரு கைவினைஞரும் முழுமையான அடையாள மற்றும் பின்னணி சரிபார்ப்புக்கு உட்படுத்தப்படுகிறார்கள்.",
    feat2Title: "நியாயமான வெளிப்படையான கட்டணங்கள்",
    feat2Desc: "வேலையைத் தொடங்குவதற்கு முன்பே தெளிவான கட்டணம். மறைமுகக் கட்டணங்கள் எதுவும் இல்லை.",
    feat3Title: "30 நிமிடங்களில் விரைவு வருகை",
    feat3Desc: "உங்கள் சொந்த நகரத்தில் உள்ள கைவினைஞர்களை விரைவாக உங்கள் வீட்டுக்கு வரவழைத்துக் கொள்ளுங்கள்.",
    feat4Title: "30 நாட்கள் சேவை உத்தரவாதம்",
    feat4Desc: "செய்யப்படும் அனைத்து தொழில்நுட்ப பழுதுபார்ப்புகளுக்கும் 30 நாட்கள் முழு உத்தரவாதம்.",

    tagVerified: "சரிபார்க்கப்பட்ட பட்டியல்",
    servicesHeading: "உயர் மதிப்பீடு பெற்ற உள்ளூர் கைவினைஞர்கள்",
    servicesSub: "உங்களுக்கு அருகிலுள்ள கைவினைஞர்களை நேரடியாக தொடர்பு கொள்ளுங்கள். நியாயமான கட்டணங்கள்.",
    sortLabel: "வரிசைப்படுத்துக:",

    estimatorBadge: "தானியங்கி கட்டணக் கணிப்பான்",
    estimatorHead: "உங்கள் வேலைக்கான கட்டணத்தை முன்கூட்டியே கணக்கிடுங்கள்!",
    estimatorDesc: "கைவினைஞர் வருவதற்கு முன் நியாயமான சேவை கட்டணத்தை துல்லியமாக கணக்கிடலாம்.",

    tagReviews: "வாடிக்கையாளர் அனுபவங்கள்",
    reviewsHeading: "வாடிக்கையாளர்கள் கூறுவது என்ன",
    reviewsSub: "தினமும் ஆயிரக்கணக்கான மக்கள் Baas.lk மூலம் தங்கள் தேவைகளை பூர்த்தி செய்கிறார்கள்.",

    proJoinBadge: "கைவினைஞர்களுக்காக",
    proJoinHead: "நீங்கள் திறமையான கைவினைஞரா? Baas.lk இல் இணையுங்கள்!",
    proJoinDesc: "தினசரி புதிய வேலை வாய்ப்புகளைப் பெற்று உங்கள் வருமானத்தை அதிகரிக்கவும். பதிவு இலவசம்.",
    proJoinBtn: "கைவினைஞராகப் பதிவு செய்யுங்கள்",

    mobileNavHome: "முகப்பு",
    mobileNavExplore: "கைவினைஞர்",
    mobileNavSos: "SOS",
    mobileNavCalc: "கணிப்பான்",
    mobileNavAccount: "கணக்கு",

    footerAbout: "இலங்கையில் வீடுகள், அலுவலகங்கள் மற்றும் வாகன பழுதுபார்ப்புகளுக்காக நம்பகமான கைவினைஞர்களை இணைக்கும் முதன்மை தளம்.",
    footerServices: "முக்கிய சேவைகள்",
    footerDistricts: "சேவை மாவட்டங்கள்",
    footerTrust: "பாதுகாப்பு & உதவி"
  }
};

let currentLang = 'si';

// Set Language Function
function setLang(lang, showNotification = true) {
  currentLang = lang;
  try {
    localStorage.setItem('baas_lang', lang);
  } catch (e) {}
  const dict = i18n[lang];
  if (!dict) return;

  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  // Announcement & Nav
  updateText('txt-online-baas', dict.onlineBaas);
  updateText('txt-support-label', dict.supportLabel);
  updateText('txt-sos-btn', dict.sosBtn);
  updateText('txt-logo-subtitle', dict.logoSubtitle);
  updateText('txt-nav-calc', dict.navCalc);
  updateText('txt-nav-postjob', dict.navPostJob);
  updateText('txt-nav-signin', dict.navSignIn);

  // Category Tabs
  updateText('cat-all', dict.catAll);
  updateText('cat-ac', dict.catAc);
  updateText('cat-plumbing', dict.catPlumbing);
  updateText('cat-electrical', dict.catElectrical);
  updateText('cat-vehicle', dict.catVehicle);
  updateText('cat-carpentry', dict.catCarpentry);
  updateText('cat-cctv', dict.catCctv);
  updateText('cat-painting', dict.catPainting);
  updateText('cat-masonry', dict.catMasonry);

  // Hero Section
  updateText('txt-hero-badge', dict.heroBadge);
  updateText('txt-hero-title-1', dict.heroTitle1);
  updateText('txt-hero-title-2', dict.heroTitle2);
  updateText('txt-hero-desc', dict.heroDesc);
  updateText('txt-hero-btn', dict.heroBtn);
  updateText('txt-popular-label', dict.popularLabel);

  updateText('txt-stat-jobs', dict.statJobs);
  updateText('txt-stat-pros', dict.statPros);
  updateText('txt-stat-rating', dict.statRating);

  updateText('txt-badge-1', dict.badge1);
  updateText('txt-badge-2', dict.badge2);

  // Pillars
  updateText('feat-1-title', dict.feat1Title);
  updateText('feat-1-desc', dict.feat1Desc);
  updateText('feat-2-title', dict.feat2Title);
  updateText('feat-2-desc', dict.feat2Desc);
  updateText('feat-3-title', dict.feat3Title);
  updateText('feat-3-desc', dict.feat3Desc);
  updateText('feat-4-title', dict.feat4Title);
  updateText('feat-4-desc', dict.feat4Desc);

  // Services Section
  updateText('txt-tag-verified', dict.tagVerified);
  updateText('txt-services-heading', dict.servicesHeading);
  updateText('txt-services-sub', dict.servicesSub);
  updateText('txt-sort-label', dict.sortLabel);

  // Estimator & Reviews
  updateText('txt-estimator-badge', dict.estimatorBadge);
  updateText('txt-estimator-head', dict.estimatorHead);
  updateText('txt-estimator-desc', dict.estimatorDesc);

  updateText('txt-tag-reviews', dict.tagReviews);
  updateText('txt-reviews-heading', dict.reviewsHeading);
  updateText('txt-reviews-sub', dict.reviewsSub);

  // Pro Onboarding
  updateText('txt-pro-badge', dict.proJoinBadge);
  updateText('txt-pro-head', dict.proJoinHead);
  updateText('txt-pro-desc', dict.proJoinDesc);
  updateText('txt-pro-btn', dict.proJoinBtn);

  // Mobile Nav items
  updateText('txt-mnav-home', dict.mobileNavHome);
  updateText('txt-mnav-explore', dict.mobileNavExplore);
  updateText('txt-mnav-sos', dict.mobileNavSos);
  updateText('txt-mnav-calc', dict.mobileNavCalc);
  updateText('txt-mnav-account', dict.mobileNavAccount);

  // Footer
  updateText('txt-footer-about', dict.footerAbout);
  updateText('txt-footer-services', dict.footerServices);
  updateText('txt-footer-districts', dict.footerDistricts);
  updateText('txt-footer-trust', dict.footerTrust);

  // Update button active styling for both top bar & mobile drawer
  const updateButtons = (prefix = 'lang-') => {
    ['si', 'en', 'ta'].forEach(l => {
      const el = document.getElementById(`${prefix}${l}`);
      if (!el) return;
      if (l === lang) {
        el.className = "px-3 py-1 rounded-full text-[11px] font-black transition-all bg-gradient-to-r from-brandOrange-500 to-amber-500 text-slate-950 shadow-md";
      } else {
        el.className = "px-3 py-1 rounded-full text-[11px] font-bold text-slate-400 hover:text-white transition-all";
      }
    });
  };

  updateButtons('lang-');
  updateButtons('drawer-lang-');

  if (showNotification) {
    const toastMsgs = {
      si: "භාෂාව සිංහල ලෙස මාරු කරන ලදී",
      en: "Switched language to English",
      ta: "மொழி தமிழாக மாற்றப்பட்டது"
    };
    showToast(toastMsgs[lang], "info");
  }
}

// =================================================================
// 3. DARK MODE SYSTEM
// =================================================================
function initTheme() {
  const saved = localStorage.getItem('baas_theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('baas_theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
  showToast(isDark ? 'Dark Mode ක්‍රියාත්මකයි 🌙' : 'Light Mode ක්‍රියාත්මකයි ☀️', 'info');
}

function updateThemeIcon(isDark) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(ic => {
    ic.className = isDark 
      ? 'fa-solid fa-sun text-amber-400 theme-toggle-icon transition-transform rotate-180' 
      : 'fa-solid fa-moon text-slate-300 theme-toggle-icon transition-transform rotate-0';
  });
}

// =================================================================
// 4. MOBILE DRAWER NAVIGATION
// =================================================================
function toggleMobileMenu() {
  const overlay = document.getElementById('mobile-drawer-overlay');
  const panel = document.getElementById('mobile-drawer-panel');
  if (!overlay || !panel) return;

  const isOpen = panel.classList.contains('active');
  if (isOpen) {
    closeMobileMenu();
  } else {
    overlay.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-drawer-overlay');
  const panel = document.getElementById('mobile-drawer-panel');
  if (overlay) overlay.classList.remove('active');
  if (panel) panel.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function scrollToSection(id) {
  closeMobileMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// =================================================================
// 5. 3D TILT EFFECT FOR CARDS (MOUSE PERSPECTIVE)
// =================================================================
function init3DTilt() {
  // Only enable on pointer-capable desktop screens to save mobile battery
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const heroCard = document.getElementById('hero-3d-card');
    if (!heroCard) return;
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

// =================================================================
// 6. SCROLL REVEAL & STAGGERED ANIMATIONS
// =================================================================
function initStaggeredCards() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.classList.add('reveal-elem');
    const staggerNum = (index % 4) + 1;
    card.classList.add(`stagger-${staggerNum}`);
  });
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal-elem");
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 40) {
      el.classList.add("active");
    }
  });
}

// =================================================================
// 7. TOAST NOTIFICATIONS SYSTEM
// =================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const isRose = type === 'danger';
  
  let bgBorder = 'bg-brandBlue-950 border-brandOrange-500';
  if (isRose) bgBorder = 'bg-rose-950 border-rose-500';
  if (type === 'info') bgBorder = 'bg-slate-900 border-cyan-400';

  toast.className = `pointer-events-auto flex items-center gap-3 ${bgBorder} text-white border-l-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl shadow-2xl text-xs font-bold transition-all duration-300 transform translate-y-4 opacity-0 max-w-sm backdrop-blur-md z-[300]`;
  
  let icon = 'fa-circle-check text-emerald-400';
  if (isRose) icon = 'fa-triangle-exclamation text-rose-400';
  if (type === 'info') icon = 'fa-circle-info text-cyan-300';

  toast.innerHTML = `<i class="fa-solid ${icon} text-lg shrink-0"></i><span>${message}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 350);
  }, 3600);
}

// =================================================================
// 8. SRI LANKA 25 DISTRICTS & TOWNS/CITIES FILTER ENGINE
// =================================================================

const SRI_LANKA_LOCATIONS = [
  {
    province: "බස්නාහිර පළාත (Western Province)",
    districts: [
      {
        id: "gampaha",
        name: "ගම්පහ (Gampaha)",
        towns: ["ගම්පහ", "මීගමුව", "වත්තල", "ජා-ඇල", "කඳාන", "රාගම", "කැලණිය", "කිරිබත්ගොඩ", "කඩවත", "බියගම", "මිනුවංගොඩ", "නිට්ටඹුව", "මීරිගම", "වේයන්ගොඩ", "දිවුලපිටිය"]
      },
      {
        id: "colombo",
        name: "කොළඹ (Colombo)",
        towns: ["කොළඹ 1-15", "දෙහිවල", "ගල්කිස්ස", "මොරටුව", "ශ්‍රී ජයවර්ධනපුර කෝට්ටේ", "මහරගම", "නුගේගොඩ", "කඩුවෙල", "හෝමාගම", "මාලබේ", "බත්තරමුල්ල", "අවිස්සාවේල්ල", "පාදුක්ක", "අතුරුගිරිය", "පිළියන්දල"]
      },
      {
        id: "kalutara",
        name: "කළුතර (Kalutara)",
        towns: ["කළුතර", "පානදුර", "හොරණ", "බණ්ඩාරගම", "බේරුවල", "අලුත්ගම", "මතුගම", "අගලවත්ත", "ඉංගිරිය", "වාද්දූව"]
      }
    ]
  },
  {
    province: "මධ්‍යම පළාත (Central Province)",
    districts: [
      {
        id: "kandy",
        name: "මහනුවර (Kandy)",
        towns: ["මහනුවර", "පේරාදෙණිය", "කටුගස්තොට", "ගම්පොළ", "නාවලපිටිය", "කුන්ඩසාලේ", "දිගන", "තෙල්දෙණිය", "අකුරණ", "වත්තේගම"]
      },
      {
        id: "matale",
        name: "මාතලේ (Matale)",
        towns: ["මාතලේ", "දඹුල්ල", "සීගිරිය", "ගලේවෙල", "උකුවෙල", "රත්තොට", "නාලන්ද"]
      },
      {
        id: "nuwaraeliya",
        name: "නුවරඑළිය (Nuwara Eliya)",
        towns: ["නුවරඑළිය", "හැටන්", "තලවාකැලේ", "රගල", "ගිනිගත්හේන", "වලපනේ", "මස්කෙළිය", "අගරපතන"]
      }
    ]
  },
  {
    province: "දකුණු පළාත (Southern Province)",
    districts: [
      {
        id: "galle",
        name: "ගාල්ල (Galle)",
        towns: ["ගාල්ල", "අම්බලන්ගොඩ", "හික්කඩුව", "කරාපිටිය", "ඇල්පිටිය", "බද්දේගම", "අහංගම", "බෙන්තොට", "පිටිගල"]
      },
      {
        id: "matara",
        name: "මාතර (Matara)",
        towns: ["මාතර", "වැලිගම", "අකුරැස්සා", "දෙනියාය", "කඹුරුපිටිය", "හක්මන", "දික්වැල්ල", "කැකණදුර"]
      },
      {
        id: "hambantota",
        name: "හම්බන්තොට (Hambantota)",
        towns: ["හම්බන්තොට", "තංගල්ල", "තිස්සමහාරාමය", "අම්බලන්තොට", "වීරකැටිය", "බෙලිඅත්ත", "සූරියවැව", "වලස්මුල්ල"]
      }
    ]
  },
  {
    province: "උතුරු පළාත (Northern Province)",
    districts: [
      {
        id: "jaffna",
        name: "යාපනය (Jaffna)",
        towns: ["යාපනය", "චාවකච්චේරිය", "පේදුරුතුඩුව", "කයිට්ස්", "නල්ලූර්", "කරවැඩ්ඩි", "පලාලි"]
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
    province: "වයඹ පළාත (North Western Province)",
    districts: [
      {
        id: "kurunegala",
        name: "කුරුණෑගල (Kurunegala)",
        towns: ["කුරුණෑගල", "කුලියාපිටිය", "මාවතගම", "නාරම්මල", "ගිරිඋල්ල", "පන්නල", "වාරියපොල", "හෙට්ටිපොල", "නිකවැරටිය", "මහව", "ගල්ගමුව"]
      },
      {
        id: "puttalam",
        name: "පුත්තලම (Puttalam)",
        towns: ["පුත්තලම", "හලාවත", "මාරවිල", "වෙන්නප්පුව", "ආණමඩුව", "කල්පිටිය", "දංකොටුව", "නාත්තන්ඩිය"]
      }
    ]
  },
  {
    province: "උතුරු මැද පළාත (North Central Province)",
    districts: [
      {
        id: "anuradhapura",
        name: "අනුරාධපුරය (Anuradhapura)",
        towns: ["අනුරාධපුරය", "එප්පාවල", "තඹුත්තේගම", "කැකිරාව", "මැදවච්චිය", "ගල්නෑව", "මිහින්තලේ", "නොච්චියාගම", "පදවිය"]
      },
      {
        id: "polonnaruwa",
        name: "පොළොන්නරුව (Polonnaruwa)",
        towns: ["පොළොන්නරුව", "කඩුරුවෙල", "හිඟුරක්ගොඩ", "මැදිරිගිරිය", "මින්නේරිය", "වැලිකන්ද", "අරලගංවිල"]
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
        towns: ["රත්නපුරය", "ඇඹිලිපිටිය", "බලංගොඩ", "පැල්මඩුල්ල", "කහවත්ත", "කුරුවිට", "ඇහැලියගොඩ", "ගොඩකවෙල"]
      },
      {
        id: "kegalle",
        name: "කෑගල්ල (Kegalle)",
        towns: ["කෑගල්ල", "මාවනැල්ල", "වරකපොල", "රඹුක්කන", "දෙහිඕවිට", "දැරණියගල", "යටියන්තොට", "රුවන්වැල්ල"]
      }
    ]
  }
];

let filterState = {
  district: 'all',
  town: 'all',
  category: 'all',
  keyword: ''
};

function getAllDistrictsFlat() {
  const list = [];
  SRI_LANKA_LOCATIONS.forEach(prov => {
    prov.districts.forEach(d => {
      list.push({ ...d, province: prov.province });
    });
  });
  return list;
}

function getDistrictObj(districtId) {
  for (const prov of SRI_LANKA_LOCATIONS) {
    const found = prov.districts.find(d => d.id === districtId);
    if (found) return found;
  }
  return null;
}

function initLocationFilterSystem() {
  populateDistrictDropdowns();
  populateTownDropdown('all');
  updateCategoryCounts();
  applyFilters();
}

function populateDistrictDropdowns() {
  const dropdownIds = ['hero-district-select', 'services-district-select', 'post-job-district', 'su-district'];

  dropdownIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const isHero = (id === 'hero-district-select');
    const isForm = (id === 'post-job-district' || id === 'su-district');

    let html = '';
    if (!isForm) {
      html += `<option value="all">සියලු දිස්ත්‍රික්ක 25 (All 25 Districts)</option>`;
    } else {
      html += `<option value="" disabled selected>දිස්ත්‍රික්කය තෝරන්න (Select District)</option>`;
    }

    SRI_LANKA_LOCATIONS.forEach(prov => {
      html += `<optgroup label="${prov.province}">`;
      prov.districts.forEach(d => {
        const isSelected = (isHero && d.id === 'colombo') ? 'selected' : '';
        html += `<option value="${d.id}" ${isSelected}>${d.name}</option>`;
      });
      html += `</optgroup>`;
    });

    el.innerHTML = html;
  });

  const heroSelect = document.getElementById('hero-district-select');
  if (heroSelect) {
    heroSelect.addEventListener('change', (e) => {
      onDistrictChange(e.target.value, false);
    });
  }

  const postJobSelect = document.getElementById('post-job-district');
  if (postJobSelect) {
    postJobSelect.addEventListener('change', (e) => {
      updateFormTownsDatalist(e.target.value, 'post-job-towns-datalist');
    });
  }

  const suSelect = document.getElementById('su-district');
  if (suSelect) {
    suSelect.addEventListener('change', (e) => {
      updateFormTownsDatalist(e.target.value, 'su-towns-datalist');
    });
  }
}

function updateFormTownsDatalist(districtId, datalistId) {
  let datalist = document.getElementById(datalistId);
  if (!datalist) {
    datalist = document.createElement('datalist');
    datalist.id = datalistId;
    document.body.appendChild(datalist);
  }
  const dist = getDistrictObj(districtId);
  if (dist && dist.towns) {
    datalist.innerHTML = dist.towns.map(t => `<option value="${t}">`).join('');
  } else {
    datalist.innerHTML = '';
  }
}

function populateTownDropdown(districtId) {
  const selects = [document.getElementById('services-town-select'), document.getElementById('hero-town-select')].filter(Boolean);
  if (!selects.length) return;

  let html = '';
  if (districtId === 'all') {
    html += `<option value="all">🏙️ සියලු ප්‍රධාන නගර (All Towns & Cities)</option>`;
    SRI_LANKA_LOCATIONS.forEach(prov => {
      html += `<optgroup label="${prov.province}">`;
      prov.districts.forEach(d => {
        d.towns.forEach(t => {
          html += `<option value="${t}">${t} (${d.name.split(' ')[0]})</option>`;
        });
      });
      html += `</optgroup>`;
    });
  } else {
    const dObj = getDistrictObj(districtId);
    if (dObj) {
      html += `<option value="all">🏙️ සියලු නගර (${dObj.name.split(' ')[0]} - All Towns)</option>`;
      html += `<optgroup label="${dObj.name}">`;
      dObj.towns.forEach(t => {
        html += `<option value="${t}">${t}</option>`;
      });
      html += `</optgroup>`;
    }
  }

  selects.forEach(sel => {
    sel.innerHTML = html;
    if (filterState.town && filterState.town !== 'all') {
      sel.value = filterState.town;
      if (sel.value !== filterState.town) {
        filterState.town = 'all';
        sel.value = 'all';
      }
    } else {
      sel.value = 'all';
    }
  });
}

function onDistrictChange(districtId, scrollDown = false) {
  filterState.district = districtId;
  filterState.town = 'all';

  // Sync Selects
  const heroSelect = document.getElementById('hero-district-select');
  if (heroSelect && heroSelect.value !== districtId) heroSelect.value = districtId;

  const servicesSelect = document.getElementById('services-district-select');
  if (servicesSelect && servicesSelect.value !== districtId) servicesSelect.value = districtId;

  // Update district badge
  const distBadge = document.getElementById('district-selected-badge');
  if (distBadge) {
    if (districtId === 'all') {
      distBadge.innerText = 'දිස්ත්‍රික්ක 25';
    } else {
      const dObj = getDistrictObj(districtId);
      distBadge.innerText = dObj ? dObj.name.split(' ')[0] : districtId;
    }
  }

  // Populate dynamic town selects (both Hero & Services)
  populateTownDropdown(districtId);

  // Update hero towns datalist if exists
  updateFormTownsDatalist(districtId, 'hero-towns-datalist');

  // Update badge
  const badge = document.getElementById('active-location-badge');
  if (badge) {
    if (districtId === 'all') {
      badge.innerText = 'සියලු නගර';
    } else {
      const dObj = getDistrictObj(districtId);
      badge.innerText = dObj ? `${dObj.name.split(' ')[0]} නගර` : districtId;
    }
  }

  applyFilters();

  if (districtId !== 'all') {
    const dObj = getDistrictObj(districtId);
    showToast(`දිස්ත්‍රික්කය: ${dObj ? dObj.name : districtId}`, 'info');
  }

  if (scrollDown) {
    const sec = document.getElementById('services-section');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }
}

function onTownSelectChange(townVal) {
  filterState.town = townVal;

  // Sync both town dropdowns
  const heroTown = document.getElementById('hero-town-select');
  if (heroTown && heroTown.value !== townVal) heroTown.value = townVal;

  const servicesTown = document.getElementById('services-town-select');
  if (servicesTown && servicesTown.value !== townVal) servicesTown.value = townVal;

  const badge = document.getElementById('active-location-badge');
  if (badge) {
    const dObj = getDistrictObj(filterState.district);
    const dName = dObj ? dObj.name.split(' ')[0] : 'සියලු දිස්ත්‍රික්ක';
    if (townVal === 'all') {
      badge.innerText = (filterState.district === 'all') ? 'සියලු නගර' : `${dName} නගර`;
    } else {
      badge.innerText = `${townVal}`;
    }
  }

  applyFilters();

  if (townVal !== 'all') {
    showToast(`නගරය: ${townVal}`, 'info');
  }
}

// Hero Search Dropdown Event Handlers
function onHeroCategoryChange(val) {
  selectCategoryFilter(val);
}

function onHeroDistrictChange(val) {
  onDistrictChange(val, false);
}

function onHeroTownChange(val) {
  onTownSelectChange(val);
}

// Backward compatibility helpers
function selectDistrictChip(districtId, btn) {
  onDistrictChange(districtId, false);
}

function renderTownChips(districtId) {
  populateTownDropdown(districtId);
}

function selectTownChip(townVal, btn) {
  onTownSelectChange(townVal);
}

function executeHeroSearch() {
  applyFilters();
  const sec = document.getElementById('services-section');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });

  const dObj = getDistrictObj(filterState.district);
  const distText = (filterState.district === 'all') ? 'සියලු දිස්ත්‍රික්ක' : (dObj ? dObj.name.split(' ')[0] : filterState.district);
  const catInfo = BAAS_CATEGORY_NAMES[filterState.category];
  const catText = (filterState.category === 'all') ? 'සියලු සේවා' : (catInfo ? catInfo.si : filterState.category);
  showToast(`සෙවුම: ${catText} | ${distText}`, 'success');
}

function quickFilter(term) {
  const termLower = (term || '').toLowerCase();
  let matchedCat = 'all';

  if (termLower.includes('ac')) matchedCat = 'ac';
  else if (termLower.includes('plumb') || termLower.includes('pipe') || termLower.includes('leak')) matchedCat = 'plumbing';
  else if (termLower.includes('elect') || termLower.includes('wiring')) matchedCat = 'electrical';
  else if (termLower.includes('auto') || termLower.includes('vehicle')) matchedCat = 'vehicle';
  else if (termLower.includes('carpent')) matchedCat = 'carpentry';
  else if (termLower.includes('mason')) matchedCat = 'masonry';
  else if (termLower.includes('paint')) matchedCat = 'painting';
  else if (termLower.includes('cctv')) matchedCat = 'cctv';

  if (matchedCat !== 'all') {
    selectCategoryFilter(matchedCat);
  } else {
    onKeywordFilter(term);
  }

  const sec = document.getElementById('services-section');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

const BAAS_CATEGORY_NAMES = {
  all: { si: 'සියලු ප්‍රවර්ග', en: 'All Categories', ta: 'அனைத்து சேவைகளும்', icon: 'fa-shapes' },
  electrical: { si: 'විදුලි කාර්මික', en: 'Electrician', ta: 'மின்சார வேலைகள்', icon: 'fa-bolt' },
  plumbing: { si: 'නල සහ ජල වැඩ', en: 'Plumber', ta: 'குழாய் வேலைகள்', icon: 'fa-faucet-drip' },
  ac: { si: 'AC & ශීතකරණ', en: 'A/C & Ref', ta: 'ஏசி பழுதுபார்த்தல்', icon: 'fa-snowflake' },
  carpentry: { si: 'වඩු කාර්මික', en: 'Carpenter', ta: 'தச்சு வேலைகள்', icon: 'fa-hammer' },
  masonry: { si: 'මේසන් & ටයිල්', en: 'Mason & Tile', ta: 'கட்டிட வேலைகள்', icon: 'fa-trowel-bricks' },
  painting: { si: 'තීන්ත & වහල', en: 'Painter & Roof', ta: 'வர்ணம் பூசுதல்', icon: 'fa-paint-roller' },
  vehicle: { si: 'වාහන කාර්මික', en: 'Auto Mechanic', ta: 'வாகன பழுதுபார்த்தல்', icon: 'fa-car' },
  cctv: { si: 'CCTV & Tech', en: 'CCTV & Tech', ta: 'CCTV & தொழினுட்பம்', icon: 'fa-video' }
};

function selectCategoryFilter(cat) {
  filterState.category = cat;

  // Sync Category Select Dropdowns (both Hero & Services)
  const catSelect = document.getElementById('services-category-select');
  if (catSelect && catSelect.value !== cat) {
    catSelect.value = cat;
  }

  const heroCat = document.getElementById('hero-category-select');
  if (heroCat && heroCat.value !== cat) {
    heroCat.value = cat;
  }

  // Update Category Badge
  const catBadge = document.getElementById('category-selected-badge');
  if (catBadge) {
    if (cat === 'all') {
      catBadge.innerText = 'සියල්ල';
    } else {
      const catInfo = BAAS_CATEGORY_NAMES[cat];
      catBadge.innerText = catInfo ? catInfo.si : cat;
    }
  }

  applyFilters();

  const catInfo = BAAS_CATEGORY_NAMES[cat];
  const catName = catInfo ? catInfo.si : cat;
  if (cat !== 'all') {
    showToast(`ප්‍රවර්ගය: ${catName}`, 'info');
  }
}

function selectCategoryChip(cat, btn) {
  selectCategoryFilter(cat);
}

function filterCategory(cat, btn) {
  selectCategoryFilter(cat);
}

function onKeywordFilter(val) {
  filterState.keyword = (val || '').trim().toLowerCase();
  const clearBtn = document.getElementById('filter-keyword-clear');
  if (clearBtn) {
    if (filterState.keyword) {
      clearBtn.classList.remove('hidden');
      clearBtn.classList.add('flex');
    } else {
      clearBtn.classList.remove('flex');
      clearBtn.classList.add('hidden');
    }
  }
  applyFilters();
}

function clearKeywordFilter() {
  const kwInput = document.getElementById('filter-keyword-input');
  if (kwInput) kwInput.value = '';
  onKeywordFilter('');
}

function clearSingleFilter(type) {
  if (type === 'category') {
    selectCategoryFilter('all');
  } else if (type === 'district') {
    onDistrictChange('all', false);
  } else if (type === 'town') {
    onTownSelectChange('all');
    const townSelect = document.getElementById('services-town-select');
    if (townSelect) townSelect.value = 'all';
  } else if (type === 'keyword') {
    clearKeywordFilter();
    const heroInput = document.getElementById('hero-search-input');
    if (heroInput) heroInput.value = '';
  }
}

function updateCategoryCounts() {
  const cards = document.querySelectorAll('.service-card');
  const counts = { all: cards.length };

  cards.forEach(card => {
    const cat = (card.dataset.category || '').toLowerCase();
    if (cat) counts[cat] = (counts[cat] || 0) + 1;
  });

  const catSelects = [document.getElementById('services-category-select'), document.getElementById('hero-category-select')].filter(Boolean);
  if (catSelects.length) {
    const catBaseTitles = {
      all: '🌟 සියලු සේවාවන් (All Services)',
      electrical: '⚡ විදුලි කාර්මික (Electrician)',
      plumbing: '🔧 නල සහ ජල වැඩ (Plumber)',
      ac: '❄️ AC සහ ශීතකරණ (A/C & Ref)',
      carpentry: '🔨 වඩු කාර්මික (Carpenter)',
      masonry: '🧱 මේසන් & ටයිල් (Mason & Tile)',
      painting: '🎨 තීන්ත & වහල (Painter & Roof)',
      vehicle: '🚗 වාහන කාර්මික (Auto Mechanic)',
      cctv: '📹 CCTV & Tech (CCTV & IT)'
    };
    catSelects.forEach(sel => {
      Array.from(sel.options).forEach(opt => {
        const val = opt.value;
        if (catBaseTitles[val] && counts[val] !== undefined) {
          opt.text = `${catBaseTitles[val]} (${counts[val]})`;
        }
      });
    });
  }
}

function updateActiveFilterTags() {
  const container = document.getElementById('active-tags-container');
  const countBadge = document.getElementById('active-filter-count-badge');
  const matchCount = document.getElementById('filter-match-count');
  if (!container) return;

  const { district, town, category, keyword } = filterState;
  const isFiltered = (district !== 'all' || town !== 'all' || category !== 'all' || !!keyword);

  let activeCount = 0;
  let html = `<span class="text-[11px] font-bold text-slate-400">ක්‍රියාකාරී පෙරහන්:</span>`;

  if (!isFiltered) {
    html += `
      <span class="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-300/40 flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        සියලු සේවා සහ දිස්ත්‍රික්ක ක්‍රියාකාරීයි
      </span>
    `;
    if (countBadge) countBadge.classList.add('hidden');
  } else {
    // Category tag
    if (category !== 'all') {
      activeCount++;
      const catInfo = BAAS_CATEGORY_NAMES[category] || { si: category, icon: 'fa-tag' };
      html += `
        <span class="active-filter-tag">
          <i class="fa-solid ${catInfo.icon} text-[10px]"></i>
          <span>${catInfo.si}</span>
          <button type="button" class="tag-remove-btn" onclick="clearSingleFilter('category')" title="ඉවත් කරන්න">✕</button>
        </span>
      `;
    }

    // District tag
    if (district !== 'all') {
      activeCount++;
      const dObj = getDistrictObj(district);
      const dName = dObj ? dObj.name.split(' ')[0] : district;
      html += `
        <span class="active-filter-tag">
          <i class="fa-solid fa-map-location-dot text-[10px]"></i>
          <span>${dName}</span>
          <button type="button" class="tag-remove-btn" onclick="clearSingleFilter('district')" title="ඉවත් කරන්න">✕</button>
        </span>
      `;
    }

    // Town tag
    if (town !== 'all') {
      activeCount++;
      html += `
        <span class="active-filter-tag">
          <i class="fa-solid fa-city text-[10px]"></i>
          <span>${town}</span>
          <button type="button" class="tag-remove-btn" onclick="clearSingleFilter('town')" title="ඉවත් කරන්න">✕</button>
        </span>
      `;
    }

    // Keyword tag
    if (keyword) {
      activeCount++;
      html += `
        <span class="active-filter-tag">
          <i class="fa-solid fa-magnifying-glass text-[10px]"></i>
          <span>"${keyword}"</span>
          <button type="button" class="tag-remove-btn" onclick="clearSingleFilter('keyword')" title="ඉවත් කරන්න">✕</button>
        </span>
      `;
    }

    // Clear all button
    html += `
      <button type="button" onclick="resetFilters()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 px-2 py-0.5 rounded-full transition flex items-center gap-1 ml-1">
        <i class="fa-solid fa-trash-can text-[9px]"></i>
        <span>සියල්ල ඉවත් කරන්න</span>
      </button>
    `;

    if (countBadge) {
      countBadge.innerText = `${activeCount} Active`;
      countBadge.classList.remove('hidden');
    }
  }

  container.innerHTML = html;
}

function applyFilters() {
  const cards = document.querySelectorAll('.service-card');
  let visibleCount = 0;

  const { district, town, category, keyword } = filterState;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const cardDistrict = (card.dataset.district || '').toLowerCase();
    const cardCategory = (card.dataset.category || '').toLowerCase();
    const cardTown = (card.dataset.town || '').toLowerCase();

    const matchDistrict = (district === 'all') || (cardDistrict === district);
    const matchTown = (town === 'all') || cardTown.includes(town.toLowerCase()) || text.includes(town.toLowerCase());
    const matchCat = (category === 'all') || (cardCategory === category);
    const matchText = !keyword || text.includes(keyword) || cardTown.includes(keyword) || cardDistrict.includes(keyword);

    if (matchDistrict && matchTown && matchCat && matchText) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  updateResultsBadge(visibleCount);
  toggleNoResults(visibleCount === 0);
  updateActiveFilterTags();

  const matchEl = document.getElementById('filter-match-count');
  if (matchEl) {
    matchEl.innerText = `බාස්ලා ${visibleCount}ක් හමුවිය (${visibleCount} Pros Found)`;
  }
}

function updateResultsBadge(count) {
  const badge = document.getElementById('results-count-badge');
  if (badge) {
    badge.innerText = `${count} Available`;
  }
}

function toggleNoResults(show) {
  let noRes = document.getElementById('no-results');
  if (!noRes) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    noRes = document.createElement('div');
    noRes.id = 'no-results';
    noRes.className = 'col-span-full py-12 px-6 text-center bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-amber-300 dark:border-slate-800 shadow-xl';
    grid.parentNode.insertBefore(noRes, grid.nextSibling);
  }

  if (show) {
    const dObj = getDistrictObj(filterState.district);
    const distName = dObj ? `${dObj.name.split(' ')[0]} දිස්ත්‍රික්කයේ` : 'තෝරාගත් දිස්ත්‍රික්කයේ';
    const townName = (filterState.town !== 'all') ? `(${filterState.town})` : '';
    const catInfo = BAAS_CATEGORY_NAMES[filterState.category];
    const catName = (filterState.category !== 'all' && catInfo) ? `${catInfo.si}` : 'බාස්ලා';

    noRes.innerHTML = `
      <div class="w-16 h-16 rounded-3xl bg-amber-500/10 text-brandOrange-500 flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
        <i class="fa-solid fa-screwdriver-wrench"></i>
      </div>
      <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">${distName} ${townName} ප්‍රදේශයේ දැනට ${catName} සෘජුව ලියාපදිංචි වී නොමැත</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1.5 leading-relaxed font-medium">
        නමුත් කරදර නොවන්න! ඔබගේ අවශ්‍යතාවය සඳහන් කර දැන්ම නොමිලේ දැන්වීමක් පළ කරන්න. ආසන්නතම පළපුරුදු බාස්ලා මිනිත්තු 30 තුළ ඔබව සම්බන්ධ කරගනු ඇත.
      </p>
      <div class="mt-5 flex items-center justify-center gap-3">
        <button onclick="openJobModal()" class="btn-3d bg-gradient-to-r from-brandOrange-500 to-amber-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg">
          <i class="fa-solid fa-plus-circle"></i>
          <span>නොමිලේ දැන්වීමක් දමන්න</span>
        </button>
        <button onclick="resetFilters()" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition">
          සියලු බාස්ලා පෙන්වන්න (Reset)
        </button>
      </div>
    `;
    noRes.classList.remove('hidden');
  } else {
    noRes.classList.add('hidden');
  }
}

function resetFilters() {
  filterState = {
    district: 'all',
    town: 'all',
    category: 'all',
    keyword: ''
  };

  const queryInput = document.getElementById('hero-search-input');
  if (queryInput) queryInput.value = '';

  const filterKwInput = document.getElementById('filter-keyword-input');
  if (filterKwInput) filterKwInput.value = '';
  const clearBtn = document.getElementById('filter-keyword-clear');
  if (clearBtn) {
    clearBtn.classList.remove('flex');
    clearBtn.classList.add('hidden');
  }

  const heroCat = document.getElementById('hero-category-select');
  if (heroCat) heroCat.value = 'all';

  const heroSelect = document.getElementById('hero-district-select');
  if (heroSelect) heroSelect.value = 'all';

  const heroTown = document.getElementById('hero-town-select');
  if (heroTown) heroTown.value = 'all';

  const servicesSelect = document.getElementById('services-district-select');
  if (servicesSelect) servicesSelect.value = 'all';

  const catSelect = document.getElementById('services-category-select');
  if (catSelect) catSelect.value = 'all';

  const townSelect = document.getElementById('services-town-select');
  if (townSelect) townSelect.value = 'all';

  populateTownDropdown('all');

  const catBadge = document.getElementById('category-selected-badge');
  if (catBadge) catBadge.innerText = 'සියල්ල';

  const distBadge = document.getElementById('district-selected-badge');
  if (distBadge) distBadge.innerText = 'දිස්ත්‍රික්ක 25';

  const badge = document.getElementById('active-location-badge');
  if (badge) badge.innerText = 'සියලු නගර';

  applyFilters();
  toggleNoResults(false);
  showToast('සියලු පෙරහන් මුල සිට යාවත්කාලීන විය', 'info');
}

function sortCards(criteria) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.service-card'));

  cards.sort((a, b) => {
    if (criteria === 'rating') {
      return parseFloat(b.dataset.rating || 0) - parseFloat(a.dataset.rating || 0);
    } else if (criteria === 'jobs') {
      return parseInt(b.dataset.jobs || 0) - parseInt(a.dataset.jobs || 0);
    } else if (criteria === 'price-low') {
      return parseInt(a.dataset.price || 0) - parseInt(b.dataset.price || 0);
    }
    return 0;
  });

  cards.forEach(card => grid.appendChild(card));
  showToast('පිළිවෙල සාර්ථකව යාවත්කාලීන විය', 'info');
}

// =================================================================
// 9. MODALS SYSTEM (MOBILE-TOUCH OPTIMIZED)
// =================================================================
function toggleModal(modalId, cardId, show) {
  const modal = document.getElementById(modalId);
  const card = document.getElementById(cardId);
  if (!modal || !card) return;
  if (show) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-95', 'opacity-0');
    card.classList.add('scale-100', 'opacity-100');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100', 'opacity-100');
    card.classList.add('scale-95', 'opacity-0');
    document.body.style.overflow = 'auto';
  }
}

// 9.1 Auth Modal System
function openAuthModal(mode = 'signin') {
  closeMobileMenu();
  switchAuthMode(mode);
  toggleModal('auth-modal', 'auth-modal-card', true);
}

function closeAuthModal() {
  toggleModal('auth-modal', 'auth-modal-card', false);
  setTimeout(() => { 
    switchAuthMode('signin'); 
    nextAuthStep(1); 
  }, 400);
}

function switchAuthMode(mode) {
  const btnSignin = document.getElementById('tab-btn-signin');
  const btnSignup = document.getElementById('tab-btn-signup');
  const viewSignin = document.getElementById('view-signin');
  const viewSignup = document.getElementById('view-signup');
  const progressContainer = document.getElementById('auth-progress-container');
  const title = document.getElementById('modal-header-title');
  const sub = document.getElementById('modal-header-sub');

  if (!btnSignin || !btnSignup || !viewSignin || !viewSignup) return;

  const currentLang = localStorage.getItem('baas_lang') || 'si';

  const activeClasses = "flex-1 py-2.5 text-xs sm:text-sm font-black rounded-xl transition text-brandBlue-700 dark:text-amber-400 bg-white dark:bg-slate-800 shadow-md border border-slate-200/50 dark:border-slate-700";
  const inactiveClasses = "flex-1 py-2.5 text-xs sm:text-sm font-black text-slate-500 hover:text-slate-800 dark:hover:text-white rounded-xl transition hover:bg-slate-200/50 dark:hover:bg-slate-800/50";

  if (mode === 'signin') {
    btnSignin.className = activeClasses;
    btnSignup.className = inactiveClasses;
    viewSignin.classList.remove('hidden');
    viewSignup.classList.add('hidden');
    if (progressContainer) progressContainer.classList.add('hidden');

    if (title) {
      title.innerText = currentLang === 'si' ? "නැවත සාදරයෙන් පිළිගනිමු!" : (currentLang === 'ta' ? "மீண்டும் வருக!" : "Welcome Back!");
    }
    if (sub) {
      sub.innerText = currentLang === 'si' ? "ගිණුමට ඇතුළු වීමට ඔබගේ තොරතුරු ඇතුළත් කරන්න." : (currentLang === 'ta' ? "உள்நுழைய உங்கள் விவரங்களை உள்ளிடவும்." : "Please enter your details to sign in.");
    }
  } else {
    btnSignup.className = activeClasses;
    btnSignin.className = inactiveClasses;
    viewSignup.classList.remove('hidden');
    viewSignin.classList.add('hidden');
    if (progressContainer) progressContainer.classList.remove('hidden');
    nextAuthStep(1);
  }
}

function togglePasswordVisibility(inputId, iconId) {
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

function checkPasswordStrength(pw) {
  const meter = document.getElementById('pass-meter');
  const hint = document.getElementById('pass-hint');
  if (!meter) return;
  meter.className = 'strength-meter mt-2';
  if (!pw || pw.length === 0) {
    if (hint) hint.innerText = "මුරපදයේ ශක්තිය: සරල";
    return;
  }
  let str = 0;
  if (pw.length >= 6) str++;
  if (pw.length >= 8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw)) str++;
  if (pw.length >= 10 && /[^A-Za-z0-9]/.test(pw)) str++;

  if (str === 1) {
    meter.classList.add('strength-1');
    if (hint) hint.innerText = "මුරපදයේ ශක්තිය: සාමාන්‍ය (Medium)";
  } else if (str === 2) {
    meter.classList.add('strength-2');
    if (hint) hint.innerText = "මුරපදයේ ශක්තිය: හොඳයි (Good)";
  } else if (str >= 3) {
    meter.classList.add('strength-3');
    if (hint) hint.innerText = "මුරපදයේ ශක්තිය: ඉතා ශක්තිමත් (Strong)";
  }
}

function nextAuthStep(step) {
  const totalSteps = 4;
  const bar = document.getElementById('auth-progress-bar');
  if (bar) bar.style.width = `${(step / totalSteps) * 100}%`;

  for (let i = 1; i <= totalSteps; i++) {
    const panel = document.getElementById(`su-step-${i}`);
    if (panel) {
      if (i === step) {
        panel.classList.remove('hidden');
        panel.classList.add('flex');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
      }
    }
  }

  const title = document.getElementById('modal-header-title');
  const sub = document.getElementById('modal-header-sub');
  const currentLang = localStorage.getItem('baas_lang') || 'si';

  if (step === 1) {
    if (title) title.innerText = currentLang === 'si' ? "නව ගිණුමක් සාදන්න" : (currentLang === 'ta' ? "புதிய கணக்கை உருவாக்கவும்" : "Create Account");
    if (sub) sub.innerText = currentLang === 'si' ? "පියවර 1: ඔබගේ භූමිකාව තෝරන්න." : (currentLang === 'ta' ? "படி 1: உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்." : "Step 1: Choose your role to get started.");
  } else if (step === 2) {
    if (title) title.innerText = currentLang === 'si' ? "මූලික තොරතුරු" : (currentLang === 'ta' ? "தனிப்பட்ட விவரங்கள்" : "Personal Details");
    if (sub) sub.innerText = currentLang === 'si' ? "පියවර 2: නම සහ දුරකථන අංකය ඇතුළත් කරන්න." : (currentLang === 'ta' ? "படி 2: உங்கள் பெயர் மற்றும் தொலைபேசி எண்." : "Step 2: Enter your name and phone number.");
  } else if (step === 3) {
    if (title) title.innerText = currentLang === 'si' ? "ප්‍රදේශය සහ සේවා" : (currentLang === 'ta' ? "இருப்பிடம் மற்றும் சேவைகள்" : "Location & Trade");
    if (sub) sub.innerText = currentLang === 'si' ? "පියවර 3: ඔබගේ ප්‍රදේශය තෝරන්න." : (currentLang === 'ta' ? "படி 3: உங்கள் இருப்பிடத்தைத் தேர்ந்தெடுக்கவும்." : "Step 3: Tell us where you are located.");

    const checkedRole = document.querySelector('input[name="su-role"]:checked');
    const role = checkedRole ? checkedRole.value : 'customer';
    const extra = document.getElementById('su-baas-extra');
    if (extra) {
      if (role === 'baas') {
        extra.classList.remove('hidden');
      } else {
        extra.classList.add('hidden');
      }
    }
  } else if (step === 4) {
    if (title) title.innerText = currentLang === 'si' ? "දුරකථන අංකය තහවුරු කරන්න" : (currentLang === 'ta' ? "தொலைபேசி சரிபார்ப்பு" : "Verify Phone");
    if (sub) sub.innerText = currentLang === 'si' ? "පියවර 4: ඔබගේ SMS කේතය ඇතුළත් කරන්න." : (currentLang === 'ta' ? "படி 4: உங்கள் SMS OTP குறியீட்டை உள்ளிடவும்." : "Step 4: Enter the 4-digit code sent via SMS.");

    const phoneInput = document.getElementById('su-phone');
    const phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : "77 123 4567";
    const otpDisplay = document.getElementById('otp-phone-display');
    if (otpDisplay) otpDisplay.innerText = `+94 ${phone}`;

    setTimeout(() => {
      const otp1 = document.getElementById('otp-1');
      if (otp1) otp1.focus();
    }, 150);
  }
}

function handleOtpInput(input, index) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value.length === 1 && index < 4) {
    const nextInput = document.getElementById(`otp-${index + 1}`);
    if (nextInput) nextInput.focus();
  }
}

function handleOtpKey(event, index) {
  if (event.key === 'Backspace') {
    const currentInput = document.getElementById(`otp-${index}`);
    if (currentInput && currentInput.value === '' && index > 1) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        prevInput.value = '';
      }
    }
  }
}

function resendOtpCode() {
  const btn = document.getElementById('btn-resend-otp');
  if (btn) {
    btn.disabled = true;
    btn.innerText = "කේතය එවන ලදී (Code sent!)";
    showToast("නව OTP කේතයක් ඔබගේ දුරකථනයට එවන ලදී.", "success");
    setTimeout(() => {
      btn.disabled = false;
      btn.innerText = "නැවත එවන්න (Resend)";
    }, 15000);
  }
}

function forgotPassword() {
  const phone = document.getElementById('si-phone');
  const phoneVal = phone ? phone.value.trim() : '';
  if (phoneVal) {
    showToast(`මුරපදය නැවත සකසන SMS කේතය +94 ${phoneVal} වෙත යවන ලදී.`, "info");
  } else {
    showToast("කරුණාකර පළමුව ඔබගේ ජංගම දුරකථන අංකය ඇතුළත් කරන්න.", "warning");
    if (phone) phone.focus();
  }
}

function simulateSocialAuth(provider) {
  showToast(`${provider} සමඟ සාර්ථකව සම්බන්ධ විය. සාදරයෙන් පිළිගනිමු!`, "success");
  setTimeout(() => {
    closeAuthModal();
  }, 1000);
}

function simulateAuthSuccess(mode) {
  if (mode === 'signin') {
    const phoneInput = document.getElementById('si-phone');
    const phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : "පරිශීලක";
    showToast(`සාදරයෙන් පිළිගනිමු! සාර්ථකව ඇතුළු විය.`, 'success');
    closeAuthModal();
  } else {
    const successOverlay = document.getElementById('su-success');
    const icon = document.getElementById('success-icon');
    if (successOverlay) {
      successOverlay.classList.remove('pointer-events-none', 'opacity-0');
      if (icon) setTimeout(() => icon.classList.remove('scale-50'), 50);
      setTimeout(() => {
        closeAuthModal();
        successOverlay.classList.add('pointer-events-none', 'opacity-0');
        if (icon) icon.classList.add('scale-50');
        showToast('Baas.lk ගිණුම සාර්ථකව සාදන ලදී!', 'success');
      }, 2000);
    }
  }
}

// 9.2 Profile Modal
let activeProfileBaas = {};
function openProfileModal(name, title, rating, jobs, location, img, cat, exp) {
  activeProfileBaas = { name, title, rating, jobs, location, img, cat, exp };
  const setName = document.getElementById('prof-name');
  const setTitle = document.getElementById('prof-title');
  const setRating = document.getElementById('prof-rating');
  const setJobs = document.getElementById('prof-jobs');
  const setLoc = document.getElementById('prof-location');
  const setImg = document.getElementById('prof-img');
  const setExp = document.getElementById('prof-exp');

  if (setName) setName.innerText = name;
  if (setTitle) setTitle.innerText = title;
  if (setRating) setRating.innerText = rating;
  if (setJobs) setJobs.innerText = jobs;
  if (setLoc) setLoc.innerText = location;
  if (setImg) setImg.src = img;
  if (setExp) setExp.innerText = exp;

  toggleModal('profile-modal', 'profile-modal-card', true);
}

function closeProfileModal() {
  toggleModal('profile-modal', 'profile-modal-card', false);
}

function openBookingFromProfile() {
  closeProfileModal();
  openBookingModal(activeProfileBaas.name, activeProfileBaas.cat || 'Service', '2500');
}

function openWaFromProfile() {
  openDirectConnect(activeProfileBaas.name, '0771234567');
}

// 9.3 Direct Booking Modal
function openBookingModal(name, service, price) {
  closeMobileMenu();
  const baasNameEl = document.getElementById('book-baas-name');
  const rateDisplayEl = document.getElementById('book-rate-display');
  const dateInput = document.getElementById('book-date');

  if (baasNameEl) baasNameEl.innerText = `${name} (${service})`;
  if (rateDisplayEl) rateDisplayEl.innerText = `රු. ${Number(price).toLocaleString()}`;
  
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  toggleModal('booking-modal', 'booking-modal-card', true);
}

function closeBookingModal() {
  toggleModal('booking-modal', 'booking-modal-card', false);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  showToast('ඔබගේ සේවා වෙන්කිරීම සාර්ථකයි! කාර්මික ශිල්පියා ඔබ අමතනු ඇත.', 'success');
}

// 9.4 Emergency SOS Modal
function openSosModal() {
  closeMobileMenu();
  toggleModal('sos-modal', 'sos-modal-card', true);
}

function closeSosModal() {
  toggleModal('sos-modal', 'sos-modal-card', false);
}

function dispatchUrgentSos() {
  closeSosModal();
  showToast('හදිසි SOS ඉල්ලීම යොමු විය! මිනිත්තු 30 තුළ බාස් කෙනෙකු ඔබ අමතනු ඇත.', 'danger');
}

// 9.5 Post Free Job Modal
function openPostJobModal() {
  closeMobileMenu();
  toggleModal('job-modal', 'job-modal-card', true);
}

function closeJobModal() {
  toggleModal('job-modal', 'job-modal-card', false);
}

function handlePostJobSubmit(e) {
  e.preventDefault();
  closeJobModal();
  showToast('ඔබගේ වැඩේ සාර්ථකව පළ කරන ලදී! ආසන්න බාස්ලා වෙත දැනුම් දුනි.', 'success');
}

function openPostJobWithCost() {
  const servSelect = document.getElementById('calc-service');
  const serv = servSelect ? servSelect.value : 'ac';
  const display = document.getElementById('calc-total-display');
  const budgetText = display ? display.innerText : 'රු. 5,000';
  
  const postCat = document.getElementById('post-job-cat');
  const postBudget = document.getElementById('post-job-budget');
  const postTitle = document.getElementById('post-job-title');

  if (postCat) postCat.value = serv;
  if (postBudget) postBudget.value = budgetText;
  if (postTitle) postTitle.value = `${serv.toUpperCase()} අලුත්වැඩියාව සඳහා බාස් කෙනෙක් අවශ්‍යයි`;
  
  openPostJobModal();
}

// 9.6 Direct WhatsApp Connect
function openDirectConnect(name, phone) {
  const msg = encodeURIComponent(`හෙලෝ ${name}, මම Baas.lk හරහා සම්බන්ධ වෙන්නේ. මට වැඩක් කරගැනීමට අවශ්‍යයි.`);
  window.open(`https://wa.me/94${phone.replace(/^0/, '')}?text=${msg}`, '_blank');
  showToast(`${name} වෙත WhatsApp පණිවිඩයක් විවෘත වේ...`, 'info');
}

// =================================================================
// 10. DYNAMIC COST ESTIMATOR LOGIC
// =================================================================
function recalculateCost() {
  const serviceRates = {
    ac: 2500,
    plumbing: 1800,
    electrical: 2000,
    vehicle: 3000,
    cctv: 2200,
    carpentry: 2000
  };

  const selectedServiceEl = document.getElementById('calc-service');
  const hoursEl = document.getElementById('calc-hours');
  const emergencyEl = document.getElementById('calc-emergency');
  const totalDisplay = document.getElementById('calc-total-display');

  const selectedService = selectedServiceEl ? selectedServiceEl.value : 'ac';
  const ratePerHour = serviceRates[selectedService] || 2000;
  const hours = hoursEl ? (parseInt(hoursEl.value) || 2) : 2;
  const isUrgent = emergencyEl ? emergencyEl.checked : false;

  const baseCost = ratePerHour * hours;
  const emergencyFee = isUrgent ? 1000 : 0;
  
  const minTotal = baseCost + emergencyFee;
  const maxTotal = Math.round(minTotal * 1.25);

  if (totalDisplay) {
    totalDisplay.innerText = `රු. ${minTotal.toLocaleString()} - ${maxTotal.toLocaleString()}`;
  }
}

function openEstimatorModal() {
  closeMobileMenu();
  const section = document.getElementById('calc-service');
  if (section) {
    section.closest('section').scrollIntoView({ behavior: 'smooth' });
    showToast('මිල ගණනය කිරීමේ උපකරණය සූදානම්!', 'info');
  }
}

// =================================================================
// 11. PARTICLES STARFIELD GENERATOR
// =================================================================
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 640 ? 35 : 70;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 600;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// =================================================================
// 12. NUMBER COUNTER UP ANIMATION
// =================================================================
function initCounters() {
  const section = document.getElementById('stats-counter-section');
  if (!section) return;
  const counters = document.querySelectorAll('.counter-up');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const decimals = counter.getAttribute('data-decimals') ? parseInt(counter.getAttribute('data-decimals')) : 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 60));
        let current = 0;
        
        const timer = setInterval(() => {
          current += target / (duration / stepTime);
          if (current >= target) {
            counter.innerText = (decimals === 0 ? target.toLocaleString() : target.toFixed(decimals));
            clearInterval(timer);
          } else {
            counter.innerText = (decimals === 0 ? Math.floor(current).toLocaleString() : current.toFixed(decimals));
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.2 });
  observer.observe(section);
}

// =================================================================
// 13. MAGNETIC BUTTONS PHYSICS
// =================================================================
function initMagneticButtons() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
      const wrap = btn.closest('.magnetic-wrap');
      if (!wrap) return;
      wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      wrap.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
      btn.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  }
}

// =================================================================
// 14. LIVE ACTIVITY NOTIFICATION TICKER (SOCIAL PROOF)
// =================================================================
const recentActivityData = [
  { name: "චමින්ද (කොළඹ)", action: "AC Inverter සර්විස් එකක් බාරගන්නා ලදී", time: "මීට විනාඩි 2කට පෙර", icon: "fa-snowflake text-cyan-400" },
  { name: "නිමල් (නුගේගොඩ)", action: "ජල නල ලීක් අලුත්වැඩියාවක් ආරම්භ කළා", time: "මීට විනාඩි 5කට පෙර", icon: "fa-faucet-drip text-blue-400" },
  { name: "කස්සප (මහනුවර)", action: "DB බෝඩ් වයරින් වැඩක් සාර්ථකව අවසන් කළා", time: "මීට විනාඩි 9කට පෙර", icon: "fa-bolt text-amber-400" },
  { name: "රුවන් (ගාල්ල)", action: "හයිබ්‍රිඩ් බැටරි ස්කෑන් එකක් සිදු කරන ලදී", time: "මීට විනාඩි 14කට පෙර", icon: "fa-car text-rose-400" },
  { name: "සුරේෂ් (කඩවත)", action: "නව CCTV කැමරා 4ක් සවිකරන ලදී", time: "මීට විනාඩි 20කට පෙර", icon: "fa-video text-emerald-400" }
];

let currentTickerIndex = 0;
function initActivityTicker() {
  const ticker = document.getElementById('live-activity-ticker');
  if (!ticker) return;

  function rotateTicker() {
    const item = recentActivityData[currentTickerIndex];
    ticker.innerHTML = `
      <div class="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 border border-slate-700">
        <i class="fa-solid ${item.icon}"></i>
      </div>
      <div class="text-[11px] leading-tight flex-1">
        <div class="font-black text-slate-200">${item.name}</div>
        <div class="text-slate-400 font-medium">${item.action}</div>
        <div class="text-[9px] text-amber-400 font-bold mt-0.5">${item.time}</div>
      </div>
      <button onclick="dismissTicker(event)" class="text-slate-500 hover:text-white text-xs p-1" title="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    ticker.classList.add('visible');

    setTimeout(() => {
      ticker.classList.remove('visible');
    }, 5500);

    currentTickerIndex = (currentTickerIndex + 1) % recentActivityData.length;
  }

  // Start ticker after 4 seconds, rotate every 12 seconds
  setTimeout(() => {
    rotateTicker();
    setInterval(rotateTicker, 12000);
  }, 4000);
}

function dismissTicker(e) {
  if (e) e.stopPropagation();
  const ticker = document.getElementById('live-activity-ticker');
  if (ticker) ticker.classList.remove('visible');
}

// =================================================================
// 15. INITIALIZATION ON DOM READY
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize active language from URL query or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const storedLang = localStorage.getItem('baas_lang');
  const activeLang = langParam || storedLang || 'si';
  if (['si', 'en', 'ta'].includes(activeLang)) {
    setLang(activeLang, false);
  }

  initTheme();
  init3DTilt();
  initStaggeredCards();
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
  initHeroParticles();
  initCounters();
  initMagneticButtons();
  initActivityTicker();
  initLocationFilterSystem();

  // Hotkey: Ctrl + K focuses search bar
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const search = document.getElementById('header-search');
      if (search) {
        search.focus();
        search.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Calculate initial cost
  recalculateCost();
});