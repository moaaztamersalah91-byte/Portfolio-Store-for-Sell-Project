const root = document.documentElement;

const translations = {"en":{"home":"Home","about":"About","projects":"Projects","services":"Services","contact":"Contact","studio":"Interior Design Studio","hero":"Spaces designed to be lived in.","heroText":"We create expressive interiors where architecture, material and everyday life meet.","explore":"Explore our work","featured":"Selected projects","featuredTitle":"Spaces with a point of view.","view":"View project","residential":"Residential","hospitality":"Hospitality","commercial":"Commercial","casaDesc":"Warm stone, sculptural furniture and quiet light.","terracottaDesc":"A sun-washed retreat built around texture.","oliveDesc":"A calm workplace with a residential soul.","servicesTitle":"What we do","interiorArchitecture":"Interior Architecture","interiorArchitectureDesc":"Spatial planning, material direction and architectural details.","furnitureObjects":"Furniture & Objects","furnitureObjectsDesc":"Curated pieces and custom elements that define the room.","styling":"Styling","stylingDesc":"Art, lighting, textiles and finishing touches with intent.","brandSpaces":"Brand Spaces","brandSpacesDesc":"Distinctive environments for hospitality and retail brands.","process":"Our process","processTitle":"From first sketch to final detail.","discoverLabel":"01 — DISCOVER","listen":"Listen","listenDesc":"We understand the space, the people and the way it needs to feel.","defineLabel":"02 — DEFINE","shape":"Shape","shapeDesc":"We build the concept through layout, palette and material.","designLabel":"03 — DESIGN","refine":"Refine","refineDesc":"Every proportion and detail is considered before execution.","deliverLabel":"04 — DELIVER","transform":"Transform","transformDesc":"The final space comes together with clarity and character.","quote":"“The best rooms don’t ask for attention. They earn it.”","quoteBy":"— ATELIER studio principle","footerDesc":"A contemporary interior design studio creating expressive spaces with material, light and restraint.","exploreFooter":"Explore","studioFooter":"Studio","visit":"Visit","footerDesc2":"Contemporary interiors with character.","copyright":"© 2026 ATELIER Studio. Frontend concept.","aboutEyebrow":"About ATELIER","aboutTitle":"A studio for thoughtful, expressive interiors.","ourPhilosophy":"Our philosophy","aboutHeadline":"Less noise. More character.","aboutP1":"ATELIER is an independent interior design studio focused on spaces that feel personal, tactile and quietly confident.","aboutP2":"We work across residential, hospitality and commercial interiors, balancing strong architectural moves with soft, livable details.","exploreProjects":"Explore projects","theStudio":"The studio","studioHeadline":"Material-led, human-centered.","curiosity":"Curiosity","curiosityDesc":"We start with questions, context and the people who will use the space.","clarity":"Clarity","clarityDesc":"We reduce visual noise until the essential idea becomes obvious.","craft":"Craft","craftDesc":"Materials, lighting and joinery are chosen for how they age and feel.","character":"Character","characterDesc":"The finished interior should feel unmistakably connected to its owner.","portfolio":"Portfolio","projectsTitle":"A collection of spaces with character.","casaProjectsDesc":"Quiet architecture with a warm, earthy palette.","terracottaProjectsDesc":"A tactile retreat inspired by Mediterranean light.","oliveProjectsDesc":"A workplace designed to feel calm and generous.","clayDesc":"Layered textures and sculptural forms.","greenroomDesc":"A creative studio with a garden-like atmosphere.","harbourDesc":"Soft geometry and deep coastal tones.","projectMeta":"Residential · London · 2026","projectIntro":"A warm, contemporary home shaped by natural stone, deep green tones and sculptural furniture.","concept":"The concept","conceptHeadline":"A home that slows you down.","conceptP1":"Casa Verde was designed around a simple idea: every room should feel connected to the rhythm of daylight.","conceptP2":"Natural materials create a calm base while terracotta accents bring moments of warmth and personality.","projectDetails":"Project details","projectDetailsHeadline":"Material, light and proportion.","stone":"Stone","stoneDesc":"Soft limestone establishes the tactile foundation.","color":"Color","colorDesc":"Emerald, terracotta and warm neutrals create depth.","furniture":"Furniture","furnitureDesc":"Rounded silhouettes balance the architectural lines.","capabilities":"Capabilities","servicesTitle2":"Designing the feeling of a place.","service1Desc":"Plans, spatial flow, built-ins and architectural details.","materialDirection":"Material Direction","service2Desc":"Palettes, finishes, surfaces and tactile combinations.","furnitureStyling":"Furniture & Styling","service3Desc":"Furniture, lighting, art and objects selected as one language.","brandEnvironments":"Brand Environments","service4Desc":"Distinctive spaces for hospitality, retail and creative businesses.","faq":"Frequently asked","faqTitle":"Good questions make better spaces.","faqQ1":"What types of projects do you take?","faqA1":"Residential, hospitality and commercial interiors, from focused rooms to complete concepts.","faqQ2":"Do you work with existing furniture?","faqA2":"Yes. Existing pieces can be integrated when they contribute to the story of the space.","faqQ3":"Can you create a concept only?","faqA3":"Yes. Concept direction, palette and spatial strategy can be delivered as a standalone service.","studioContact":"Studio contact","contactTitle":"Start a conversation.","contactIntro":"Tell us a little about the space, and we’ll take it from there.","findUs":"Find us","comeHello":"Come say hello.","emailStudio":"Email the studio","fullName":"Full name","email":"Email","projectType":"Project type","message":"Message","send":"Send inquiry","toast":"Thanks — your message is ready.","allProjects":"All projects","address":"14 Mercer Street<br>London · UK","pageTitleHome":"ATELIER — Interior Design Studio","pageTitleAbout":"About — ATELIER","pageTitleProjects":"Projects — ATELIER","pageTitleProject":"Casa Verde — ATELIER","pageTitleServices":"Services — ATELIER","pageTitleContact":"Contact — ATELIER","phName":"Your name","phEmail":"you@example.com","phMessage":"Tell us about your space...","homeProjectMeta":"Residential · 2026"},"ar":{"home":"الرئيسية","about":"عن الاستوديو","projects":"المشاريع","services":"الخدمات","contact":"تواصل معنا","studio":"استوديو التصميم الداخلي","hero":"مساحات صُممت لتُعاش.","heroText":"نصنع مساحات داخلية تعبّر عن الشخصية، حيث تلتقي العمارة والخامات والحياة اليومية.","explore":"استكشف أعمالنا","featured":"مشاريع مختارة","featuredTitle":"مساحات لها شخصية ورؤية.","view":"عرض المشروع","residential":"سكني","hospitality":"ضيافة","commercial":"تجاري","casaDesc":"حجر طبيعي دافئ، أثاث منحوت وإضاءة هادئة.","terracottaDesc":"ملاذ مشمس مستوحى من الملمس والضوء.","oliveDesc":"مساحة عمل هادئة بروح سكنية.","servicesTitle":"ماذا نقدم","interiorArchitecture":"التصميم المعماري الداخلي","interiorArchitectureDesc":"تخطيط المساحات، توجيه الخامات والتفاصيل المعمارية.","furnitureObjects":"الأثاث والعناصر","furnitureObjectsDesc":"قطع مختارة وعناصر مخصصة تمنح المكان شخصيته.","styling":"التنسيق الداخلي","stylingDesc":"فن وإضاءة ومنسوجات ولمسات نهائية مدروسة.","brandSpaces":"مساحات العلامات التجارية","brandSpacesDesc":"بيئات مميزة للضيافة والتجزئة والعلامات التجارية.","process":"منهجنا في العمل","processTitle":"من أول رسم حتى أدق تفصيلة.","discoverLabel":"01 — الاكتشاف","listen":"نستمع","listenDesc":"نفهم المساحة وأصحابها والطريقة التي يجب أن يشعر بها المكان.","defineLabel":"02 — التحديد","shape":"نشكّل","shapeDesc":"نبني الفكرة من خلال التوزيع اللوني والخامات وتخطيط المساحة.","designLabel":"03 — التصميم","refine":"نصقل","refineDesc":"ندرس كل نسبة وتفصيلة بعناية قبل التنفيذ.","deliverLabel":"04 — التنفيذ","transform":"نحوّل","transformDesc":"تكتمل المساحة النهائية بوضوح وشخصية متفردة.","quote":"«أفضل الغرف لا تطلب الانتباه، بل تستحقه.»","quoteBy":"— مبدأ ATELIER في التصميم","footerDesc":"استوديو تصميم داخلي معاصر يصنع مساحات تعبّر عن الشخصية من خلال الخامات والضوء والبساطة.","exploreFooter":"استكشف","studioFooter":"الاستوديو","visit":"العنوان","footerDesc2":"تصميمات داخلية معاصرة ذات شخصية.","copyright":"© 2026 ATELIER Studio. مشروع واجهة أمامية فقط.","aboutEyebrow":"عن ATELIER","aboutTitle":"استوديو لمساحات داخلية مدروسة ومعبّرة.","ourPhilosophy":"فلسفتنا","aboutHeadline":"ضوضاء أقل. شخصية أكثر.","aboutP1":"ATELIER هو استوديو مستقل للتصميم الداخلي يركز على المساحات الشخصية والملموسة والواثقة بهدوء.","aboutP2":"نعمل على المساحات السكنية والضيافة والتجارية، ونوازن بين الخطوط المعمارية القوية والتفاصيل الناعمة القابلة للعيش.","exploreProjects":"استكشف المشاريع","theStudio":"الاستوديو","studioHeadline":"الخامة أولًا، والإنسان محور التصميم.","curiosity":"الفضول","curiosityDesc":"نبدأ بالأسئلة والسياق والأشخاص الذين سيستخدمون المساحة.","clarity":"الوضوح","clarityDesc":"نقلل الضوضاء البصرية حتى تصبح الفكرة الأساسية واضحة.","craft":"الحِرفة","craftDesc":"نختار الخامات والإضاءة والتفاصيل وفقًا لطريقة إحساسها وتطورها مع الوقت.","character":"الشخصية","characterDesc":"يجب أن تبدو المساحة النهائية مرتبطة بصاحبها بشكل واضح.","portfolio":"أعمالنا","projectsTitle":"مجموعة من المساحات ذات الشخصية.","casaProjectsDesc":"عمارة هادئة بلوحة ألوان دافئة وترابية.","terracottaProjectsDesc":"ملاذ غني بالملمس مستوحى من ضوء البحر المتوسط.","oliveProjectsDesc":"مساحة عمل صُممت لتشعر بالهدوء والرحابة.","clayDesc":"طبقات من الخامات وأشكال نحتية.","greenroomDesc":"استوديو إبداعي بأجواء مستوحاة من الحدائق.","harbourDesc":"هندسة ناعمة ودرجات ساحلية عميقة.","projectMeta":"سكني · لندن · 2026","projectIntro":"منزل معاصر ودافئ تشكله الأحجار الطبيعية والدرجات الخضراء العميقة والأثاث النحتي.","concept":"الفكرة","conceptHeadline":"منزل يجعلك تتأنى.","conceptP1":"صُمم Casa Verde حول فكرة بسيطة: أن تشعر كل غرفة بالارتباط بإيقاع ضوء النهار.","conceptP2":"تصنع الخامات الطبيعية قاعدة هادئة، بينما تضيف لمسات التراكوتا دفئًا وشخصية.","projectDetails":"تفاصيل المشروع","projectDetailsHeadline":"الخامة والضوء والنِسب.","stone":"الحجر","stoneDesc":"الحجر الجيري الناعم يشكل الأساس الملموس للتصميم.","color":"الألوان","colorDesc":"الأخضر الزمردي والتراكوتا والدرجات الدافئة تصنع عمقًا بصريًا.","furniture":"الأثاث","furnitureDesc":"توازن الخطوط المنحنية بين الحضور المعماري للمكان.","capabilities":"إمكاناتنا","servicesTitle2":"نصمم إحساس المكان.","service1Desc":"المخططات، حركة المساحات، الوحدات المدمجة والتفاصيل المعمارية.","materialDirection":"توجيه الخامات","service2Desc":"لوحات الألوان والتشطيبات والأسطح والتركيبات الملمسية.","furnitureStyling":"الأثاث والتنسيق","service3Desc":"أثاث وإضاءة وفن وعناصر مختارة كلغة تصميم واحدة.","brandEnvironments":"بيئات العلامات التجارية","service4Desc":"مساحات مميزة للضيافة والتجزئة والأعمال الإبداعية.","faq":"الأسئلة الشائعة","faqTitle":"الأسئلة الجيدة تصنع مساحات أفضل.","faqQ1":"ما أنواع المشاريع التي تعملون عليها؟","faqA1":"المساحات السكنية والضيافة والتجارية، من الغرف المحددة إلى المفاهيم المتكاملة.","faqQ2":"هل تعملون مع الأثاث الموجود؟","faqA2":"نعم. يمكن دمج القطع الموجودة عندما تضيف قيمة إلى قصة المساحة.","faqQ3":"هل يمكن تنفيذ الفكرة التصميمية فقط؟","faqA3":"نعم. يمكن تقديم التوجه التصميمي ولوحة الألوان واستراتيجية توزيع المساحة كخدمة مستقلة.","studioContact":"تواصل مع الاستوديو","contactTitle":"لنبدأ حوارًا.","contactIntro":"أخبرنا قليلًا عن المساحة، وسنتولى الخطوات التالية.","findUs":"موقعنا","comeHello":"يسعدنا أن نلتقي بك.","emailStudio":"راسل الاستوديو","fullName":"الاسم بالكامل","email":"البريد الإلكتروني","projectType":"نوع المشروع","message":"الرسالة","send":"إرسال الطلب","toast":"شكرًا — رسالتك جاهزة.","allProjects":"كل المشاريع","address":"14 شارع ميرسر<br>لندن · المملكة المتحدة","pageTitleHome":"ATELIER — استوديو التصميم الداخلي","pageTitleAbout":"عن ATELIER — الاستوديو","pageTitleProjects":"المشاريع — ATELIER","pageTitleProject":"Casa Verde — ATELIER","pageTitleServices":"الخدمات — ATELIER","pageTitleContact":"تواصل معنا — ATELIER","phName":"اسمك","phEmail":"you@example.com","phMessage":"أخبرنا عن مساحتك...","homeProjectMeta":"سكني · 2026"}};

let lang = localStorage.getItem('atelier-lang') || 'en';
let dark = localStorage.getItem('atelier-theme') === 'dark';

function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    const value = translations[lang][key];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = translations[lang][key];
    if (value !== undefined) element.placeholder = value;
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.dataset.i18nTitle;
    const value = translations[lang][key];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.textContent = lang === 'en' ? 'AR' : 'EN';
    button.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
    button.setAttribute('title', lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
  });

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileToggle) mobileToggle.setAttribute('aria-label', mobileToggle.classList.contains('open') ? (lang === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (lang === 'ar' ? 'فتح القائمة' : 'Open menu'));
}

function applyTheme() {
  root.classList.toggle('dark', dark);
  document.querySelectorAll('[data-theme]').forEach((button) => {
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function apply() {
  applyTheme();
  applyLanguage();
}

function toggleTheme() {
  dark = !dark;
  localStorage.setItem('atelier-theme', dark ? 'dark' : 'light');
  applyTheme();
}

function toggleLang() {
  lang = lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('atelier-lang', lang);
  applyLanguage();
}


function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('#mobileMenu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', lang === 'ar' ? 'فتح القائمة' : 'Open menu');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
  };

  const openMenu = () => {
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', lang === 'ar' ? 'إغلاق القائمة' : 'Close menu');
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
  };

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (menu.classList.contains('open') && !menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });

  return { closeMenu };
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  apply();

  document.querySelectorAll('[data-theme]').forEach((button) => {
    button.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', toggleLang);
  });

  document.querySelectorAll('.faq-q').forEach((question) => {
    question.addEventListener('click', () => {
      question.parentElement.classList.toggle('open');
    });
  });

  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      document.querySelectorAll('[data-category]').forEach((card) => {
        card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
      });
    });
  });

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const toast = document.querySelector('.toast');
      if (!toast) return;

      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 2500);
      form.reset();
    });
  }
});
