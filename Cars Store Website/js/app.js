const T={
en:{
home:"Home",collection:"Collection",studio:"Motif Studio",contact:"Contact",
top:"Independent automotive house · Curated performance & design",
brandSub:"CURATED AUTOMOTIVE",
eyebrow:"DESIGN · PERFORMANCE · CRAFT · CHARACTER",
hero1:"Performance",hero2:"with",hero3:"Purpose",
heroP:"A focused collection of modern performance cars, grand tourers and icons selected for design, character and the way they make you feel.",
explore:"Explore the collection",contactBtn:"Talk to Motif",meta1:"2026 EDITION",meta2:"MOTIF SELECT",
collectionEy:"THE COLLECTION",collectionTitle:"Cars with a point of view.",collectionP:"Three examples from our current edit. For details, availability and specifications, contact the Motif team directly.",
tag1:"SPORT",c1:"911 Carrera",s1:"3.0L · 8-speed PDK · 394 HP",price1:"From €128,900",
tag2:"GRAND TOURER",c2:"M4 Competition",s2:"3.0L · 8-speed · 503 HP",price2:"From €112,500",
tag3:"DRIVER",c3:"718 Cayman",s3:"2.0L · 7-speed PDK · 300 HP",price3:"From €86,400",
studioEy:"MOTIF STUDIO",studioTitle:"Where cars become character.",studioP:"A visual space for detailing, specification and the culture around exceptional cars.",
detailTitle:"Detail matters.",detailP:"From paint depth to wheel finish, every Motif selection is considered as a complete composition.",
ctaTitle:"Your next car should feel like yours.",ctaP:"Tell us what you are looking for and we will guide you through the current collection.",
footer:"Independent automotive house. Selected cars, considered details, direct conversations.",
legal:"© 2026 MOTIF MOTORS. All rights reserved.",
phone:"PHONE",email:"EMAIL",address:"ADDRESS",addressVal:"18 Mercer Street, London",hours:"HOURS",hoursVal:"Mon–Sat · 09:00–18:00",
call:"Call Motif",mail:"Email Motif",
select2026:"MOTIF SELECT · 2026",select2025:"MOTIF SELECT · 2025",select2024:"MOTIF SELECT · 2024"
},
ar:{
home:"الرئيسية",collection:"السيارات",studio:"استوديو موتيف",contact:"تواصل معنا",
top:"دار سيارات مستقلة · أداء وتصميم مختار بعناية",
brandSub:"سيارات مختارة بعناية",
eyebrow:"تصميم · أداء · حِرفة · شخصية",
hero1:"أداء",hero2:"بـ",hero3:"هدف",
heroP:"مجموعة مختارة بعناية من سيارات الأداء الحديثة والسيارات السياحية الفاخرة والسيارات الأيقونية، نختارها لتصميمها وشخصيتها والإحساس الذي تمنحه لك.",
explore:"استكشف مجموعة السيارات",contactBtn:"تحدث مع موتيف",meta1:"إصدار 2026",meta2:"اختيارات موتيف",
collectionEy:"المجموعة",collectionTitle:"سيارات لها شخصية.",collectionP:"ثلاثة نماذج من اختياراتنا الحالية. لمعرفة التفاصيل والتوافر والمواصفات، تواصل مع فريق موتيف مباشرة.",
tag1:"رياضية",c1:"911 كاريرا",s1:"3.0 لتر · ناقل 8 سرعات · 394 حصان",price1:"تبدأ من 128,900 يورو",
tag2:"سياحية فاخرة",c2:"M4 كومبيتيشن",s2:"3.0 لتر · 8 سرعات · 503 حصان",price2:"تبدأ من 112,500 يورو",
tag3:"لعشاق القيادة",c3:"718 كايمان",s3:"2.0 لتر · ناقل 7 سرعات · 300 حصان",price3:"تبدأ من 86,400 يورو",
studioEy:"استوديو موتيف",studioTitle:"هنا تتحول السيارات إلى شخصية.",studioP:"مساحة بصرية للتفاصيل والتجهيز وثقافة السيارات الاستثنائية.",
detailTitle:"التفاصيل تصنع الفرق.",detailP:"من عمق لون الطلاء إلى تشطيب العجلات، نختار كل سيارة كتركيبة متكاملة.",
ctaTitle:"سيارتك القادمة يجب أن تشبهك.",ctaP:"أخبرنا بما تبحث عنه وسنساعدك في استكشاف المجموعة الحالية.",
footer:"دار سيارات مستقلة. سيارات مختارة، تفاصيل مدروسة، وتواصل مباشر.",
legal:"© 2026 موتيف موتورز. جميع الحقوق محفوظة.",
phone:"الهاتف",email:"البريد الإلكتروني",address:"العنوان",addressVal:"18 شارع ميرسر، لندن",hours:"ساعات العمل",hoursVal:"الإثنين–السبت · 09:00–18:00",
call:"اتصل بموتيف",mail:"راسل موتيف",
select2026:"اختيارات موتيف · 2026",select2025:"اختيارات موتيف · 2025",select2024:"اختيارات موتيف · 2024"
}
};

let lang=localStorage.getItem("motifLang")||"en";

function applyLang(){
  const d=T[lang]||T.en;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(Object.prototype.hasOwnProperty.call(d,key)) el.textContent=d[key];
  });
  const switcher=document.querySelector("[data-lang]");
  if(switcher){
    switcher.textContent=lang==="en"?"عربي":"English";
    switcher.setAttribute("aria-label",lang==="en"?"التبديل إلى العربية":"Switch to English");
    switcher.setAttribute("title",lang==="en"?"التبديل إلى العربية":"Switch to English");
  }
  document.title=lang==="ar"
    ? (location.pathname.includes("collection")?"السيارات — موتيف موتورز":location.pathname.includes("studio")?"استوديو موتيف — موتيف موتورز":location.pathname.includes("contact")?"تواصل معنا — موتيف موتورز":"موتيف موتورز — سيارات مختارة")
    : (location.pathname.includes("collection")?"Collection — MOTIF MOTORS":location.pathname.includes("studio")?"Motif Studio — MOTIF MOTORS":location.pathname.includes("contact")?"Contact — MOTIF MOTORS":"MOTIF MOTORS — Curated Automotive");
}

function setTheme(mode){
  const light=mode==="light";
  document.body.classList.toggle("light",light);
  document.documentElement.classList.toggle("light",light);
  localStorage.setItem("motifTheme",light?"light":"dark");
  const b=document.querySelector("[data-theme]");
  if(b){
    b.textContent=light?"☾":"☀";
    b.setAttribute("aria-label",light?"الوضع الداكن":"الوضع الفاتح");
    b.setAttribute("title",light?"الوضع الداكن":"الوضع الفاتح");
  }
}

function toggleLang(){
  lang=lang==="en"?"ar":"en";
  localStorage.setItem("motifLang",lang);
  applyLang();
}

function toggleTheme(){
  setTheme(document.body.classList.contains("light")?"dark":"light");
}

function toggleMenu(){
  const links=document.querySelector(".links");
  if(!links)return;
  links.classList.toggle("open");
  const menu=document.querySelector(".menu");
  menu?.setAttribute("aria-expanded",String(links.classList.contains("open")));
}

document.addEventListener("DOMContentLoaded",()=>{
  setTheme(localStorage.getItem("motifTheme")||"dark");
  applyLang();

  document.querySelector("[data-lang]")?.addEventListener("click",toggleLang);
  document.querySelector("[data-theme]")?.addEventListener("click",toggleTheme);
  document.querySelector(".menu")?.addEventListener("click",toggleMenu);

  document.querySelectorAll(".links a").forEach(a=>{
    a.addEventListener("click",()=>document.querySelector(".links")?.classList.remove("open"));
  });

  window.addEventListener("resize",()=>{
    if(window.innerWidth>900)document.querySelector(".links")?.classList.remove("open");
  });
});