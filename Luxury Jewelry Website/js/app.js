(() => {
  'use strict';

  const STORAGE_KEY = 'aurelia-wishlist';
  const LANG_KEY = 'aurelia-language';
  const THEME_KEY = 'aurelia-theme';
  const money = n => `$${Number(n).toLocaleString('en-US')}`;

  const I18N = {
    en: {
      'FREE SHIPPING ON ORDERS OVER $100 · SECURE & ELEGANT PACKAGING':'FREE SHIPPING ON ORDERS OVER $100 · SECURE & ELEGANT PACKAGING',
      'Home':'Home','Shop':'Shop','About':'About','Contact':'Contact','Wishlist':'Wishlist',
      'Fine Jewelry Collection':'Fine Jewelry Collection','Timeless Beauty':'Timeless Beauty','in Every Detail':'in Every Detail',
      'Discover exquisite pieces crafted to celebrate your most beautiful moments.':'Discover exquisite pieces crafted to celebrate your most beautiful moments.',
      'Shop Collection →':'Shop Collection →','◇ Premium Quality':'◇ Premium Quality','Only the finest materials':'Only the finest materials',
      '⌁ Free Shipping':'⌁ Free Shipping','On orders over $100':'On orders over $100','◈ Secure Shopping':'◈ Secure Shopping','Shop with confidence':'Shop with confidence',
      '♢ Elegant Packaging':'♢ Elegant Packaging','Perfect for every occasion':'Perfect for every occasion',
      'Featured Collections':'Featured Collections','Explore Our Finest Creations':'Explore Our Finest Creations','Shop All →':'Shop All →',
      'Rings':'Rings','Necklaces':'Necklaces','Earrings':'Earrings','Bracelets':'Bracelets',
      'Symbol of eternal love':'Symbol of eternal love','Grace in every layer':'Grace in every layer','Elegance in every angle':'Elegance in every angle','A touch of luxury':'A touch of luxury',
      'Our Story':'Our Story','Crafting Timeless Moments':'Crafting Timeless Moments',
      'At AURELIA, we believe jewelry is more than an accessory — it is a story, a memory, a part of you. Every piece is designed with quiet luxury and enduring beauty in mind.':'At AURELIA, we believe jewelry is more than an accessory — it is a story, a memory, a part of you. Every piece is designed with quiet luxury and enduring beauty in mind.',
      'Discover Our Story →':'Discover Our Story →','Stay in the know':'Stay in the know','Join Our Journal':'Join Our Journal',
      'New collections, private previews and thoughtful jewelry stories — delivered with care.':'New collections, private previews and thoughtful jewelry stories — delivered with care.',
      'Your email address':'Your email address','Subscribe':'Subscribe','Jewelry made for the moments you never want to forget.':'Jewelry made for the moments you never want to forget.',
      'Explore':'Explore','Shop Jewelry':'Shop Jewelry','Categories':'Categories','Contact':'Contact','Mon–Sat · 10 AM–6 PM':'Mon–Sat · 10 AM–6 PM',
      'The Collection':'The Collection','Shop Jewelry':'Shop Jewelry','Home / Shop':'Home / Shop','All Jewelry':'All Jewelry',
      'Collections':'Collections','New Arrivals':'New Arrivals','Signature Pieces':'Signature Pieces','Everyday Luxury':'Everyday Luxury',
      'Materials':'Materials','18K Gold':'18K Gold','Diamond':'Diamond','Pearl':'Pearl','Rose Gold':'Rose Gold','Price':'Price',
      'Under $800':'Under $800','$800 — $1,200':'$800 — $1,200','$1,200+':'$1,200+','Search jewelry':'Search jewelry',
      'Sort products':'Sort products','Featured':'Featured','Price: Low to High':'Price: Low to High','Price: High to Low':'Price: High to Low','Name':'Name',
      'Saved Pieces':'Saved Pieces','My Wishlist':'My Wishlist','Home / Wishlist':'Home / Wishlist','Your wishlist is waiting.':'Your wishlist is waiting.',
      'Save pieces you love and keep them close.':'Save pieces you love and keep them close.','Explore Jewelry →':'Explore Jewelry →',
      'We’re here for you':'We’re here for you','Contact Us':'Contact Us','Home / Contact':'Home / Contact','Get in touch':'Get in touch',
      "Let's talk jewelry.":"Let's talk jewelry.",'Have a question about a piece, styling, gifting or our collections? Send us a note and our team will be happy to help.':'Have a question about a piece, styling, gifting or our collections? Send us a note and our team will be happy to help.',
      'Visit Us':'Visit Us','Call Us':'Call Us','Email':'Email','Hours':'Hours','Monday — Saturday · 10 AM — 6 PM':'Monday — Saturday · 10 AM — 6 PM',
      'Name':'Name','Your name':'Your name','Subject':'Subject','How can we help?':'How can we help?','Message':'Message','Write your message...':'Write your message...','Send Message →':'Send Message →',
      'The AURELIA Philosophy':'The AURELIA Philosophy','Jewelry with a story worth keeping.':'Jewelry with a story worth keeping.',
      'AURELIA was created around a simple idea: the most beautiful jewelry should feel personal. We create refined pieces with a quiet sense of luxury, designed to become part of your everyday rituals and most meaningful celebrations.':'AURELIA was created around a simple idea: the most beautiful jewelry should feel personal. We create refined pieces with a quiet sense of luxury, designed to become part of your everyday rituals and most meaningful celebrations.',
      'From the first sketch to the final polish, every detail is considered. Our aesthetic is intentionally timeless — elegant today, beautiful for years to come.':'From the first sketch to the final polish, every detail is considered. Our aesthetic is intentionally timeless — elegant today, beautiful for years to come.',
      'Explore the Collection →':'Explore the Collection →','What guides us':'What guides us','The AURELIA Standard':'The AURELIA Standard',
      'Thoughtful Design':'Thoughtful Design','Clean silhouettes and delicate details designed to live beyond a season.':'Clean silhouettes and delicate details designed to live beyond a season.',
      'Quiet Luxury':'Quiet Luxury','A refined palette and enduring forms that let the jewelry speak for itself.':'A refined palette and enduring forms that let the jewelry speak for itself.',
      'Made to Keep':'Made to Keep','Pieces imagined as future keepsakes, not fleeting accessories.':'Pieces imagined as future keepsakes, not fleeting accessories.',
      'Search':'Search'
    },
    ar: {
      'FREE SHIPPING ON ORDERS OVER $100 · SECURE & ELEGANT PACKAGING':'شحن مجاني للطلبات فوق 100$ · تغليف آمن وأنيق',
      'Home':'الرئيسية','Shop':'المتجر','About':'من نحن','Contact':'تواصل معنا','Wishlist':'المفضلة',
      'Fine Jewelry Collection':'مجموعة المجوهرات الفاخرة','Timeless Beauty':'جمال خالد','in Every Detail':'في كل تفصيلة',
      'Discover exquisite pieces crafted to celebrate your most beautiful moments.':'اكتشف قطعًا استثنائية صُممت للاحتفال بأجمل لحظاتك.',
      'Shop Collection →':'تسوق المجموعة ←','◇ Premium Quality':'◇ جودة فائقة','Only the finest materials':'أفضل الخامات فقط',
      '⌁ Free Shipping':'⌁ شحن مجاني','On orders over $100':'للطلبات فوق 100$','◈ Secure Shopping':'◈ تسوق آمن','Shop with confidence':'تسوق بثقة',
      '♢ Elegant Packaging':'♢ تغليف أنيق','Perfect for every occasion':'مثالي لكل مناسبة',
      'Featured Collections':'المجموعات المميزة','Explore Our Finest Creations':'اكتشف أرقى إبداعاتنا','Shop All →':'تسوق الكل ←',
      'Rings':'خواتم','Necklaces':'قلائد','Earrings':'أقراط','Bracelets':'أساور',
      'Symbol of eternal love':'رمز للحب الأبدي','Grace in every layer':'أناقة في كل طبقة','Elegance in every angle':'أناقة من كل زاوية','A touch of luxury':'لمسة من الفخامة',
      'Our Story':'قصتنا','Crafting Timeless Moments':'نصنع لحظات خالدة',
      'At AURELIA, we believe jewelry is more than an accessory — it is a story, a memory, a part of you. Every piece is designed with quiet luxury and enduring beauty in mind.':'في AURELIA، نؤمن أن المجوهرات أكثر من مجرد إكسسوار — إنها قصة وذكرى وجزء منك. كل قطعة مصممة بفخامة هادئة وجمال يدوم.',
      'Discover Our Story →':'اكتشف قصتنا ←','Stay in the know':'ابقَ على اطلاع','Join Our Journal':'انضم إلى مجلتنا',
      'New collections, private previews and thoughtful jewelry stories — delivered with care.':'مجموعات جديدة، ومعاينات خاصة، وقصص ملهمة عن المجوهرات — تصلك بعناية.',
      'Your email address':'بريدك الإلكتروني','Subscribe':'اشترك','Jewelry made for the moments you never want to forget.':'مجوهرات صُممت للحظات التي لا تريد نسيانها.',
      'Explore':'استكشف','Shop Jewelry':'تسوق المجوهرات','Categories':'التصنيفات','Contact':'تواصل معنا','Mon–Sat · 10 AM–6 PM':'الإثنين–السبت · 10 صباحًا–6 مساءً',
      'The Collection':'المجموعة','Home / Shop':'الرئيسية / المتجر','All Jewelry':'كل المجوهرات',
      'Collections':'المجموعات','New Arrivals':'وصل حديثًا','Signature Pieces':'القطع المميزة','Everyday Luxury':'فخامة يومية',
      'Materials':'الخامات','18K Gold':'ذهب عيار 18','Diamond':'ألماس','Pearl':'لؤلؤ','Rose Gold':'ذهب وردي','Price':'السعر',
      'Under $800':'أقل من 800$','$800 — $1,200':'800$ — 1,200$','$1,200+':'1,200$+','Search jewelry':'ابحث عن مجوهرات',
      'Sort products':'ترتيب المنتجات','Featured':'مميزة','Price: Low to High':'السعر: من الأقل للأعلى','Price: High to Low':'السعر: من الأعلى للأقل','Name':'الاسم',
      'Saved Pieces':'القطع المحفوظة','My Wishlist':'مفضلتي','Home / Wishlist':'الرئيسية / المفضلة','Your wishlist is waiting.':'قائمة المفضلة بانتظارك.',
      'Save pieces you love and keep them close.':'احفظ القطع التي تحبها واحتفظ بها بالقرب منك.','Explore Jewelry →':'استكشف المجوهرات ←',
      'We’re here for you':'نحن هنا من أجلك','Contact Us':'تواصل معنا','Home / Contact':'الرئيسية / تواصل معنا','Get in touch':'تواصل معنا',
      "Let's talk jewelry.":'لنتحدث عن المجوهرات.','Have a question about a piece, styling, gifting or our collections? Send us a note and our team will be happy to help.':'هل لديك سؤال عن قطعة أو تنسيق أو هدية أو مجموعاتنا؟ أرسل لنا رسالة وسيسعد فريقنا بمساعدتك.',
      'Visit Us':'زيارتنا','Call Us':'اتصل بنا','Email':'البريد الإلكتروني','Hours':'ساعات العمل','Monday — Saturday · 10 AM — 6 PM':'الإثنين — السبت · 10 صباحًا — 6 مساءً',
      'Name':'الاسم','Your name':'اسمك','Subject':'الموضوع','How can we help?':'كيف يمكننا مساعدتك؟','Message':'الرسالة','Write your message...':'اكتب رسالتك...','Send Message →':'إرسال الرسالة ←',
      'The AURELIA Philosophy':'فلسفة AURELIA','Jewelry with a story worth keeping.':'مجوهرات تحمل قصة تستحق الاحتفاظ بها.',
      'AURELIA was created around a simple idea: the most beautiful jewelry should feel personal. We create refined pieces with a quiet sense of luxury, designed to become part of your everyday rituals and most meaningful celebrations.':'تأسست AURELIA حول فكرة بسيطة: أجمل المجوهرات هي التي تحمل طابعًا شخصيًا. نصنع قطعًا راقية بفخامة هادئة، لتصبح جزءًا من طقوسك اليومية واحتفالاتك الأكثر أهمية.',
      'From the first sketch to the final polish, every detail is considered. Our aesthetic is intentionally timeless — elegant today, beautiful for years to come.':'من أول رسم وحتى اللمسة النهائية، نعتني بكل تفصيلة. أسلوبنا خالد عن قصد — أنيق اليوم وجميل لسنوات طويلة.',
      'Explore the Collection →':'استكشف المجموعة ←','What guides us':'ما الذي يوجهنا','The AURELIA Standard':'معايير AURELIA',
      'Thoughtful Design':'تصميم مدروس','Clean silhouettes and delicate details designed to live beyond a season.':'خطوط أنيقة وتفاصيل رقيقة صُممت لتتجاوز حدود الموسم.',
      'Quiet Luxury':'فخامة هادئة','A refined palette and enduring forms that let the jewelry speak for itself.':'ألوان راقية وأشكال دائمة تترك للمجوهرات أن تتحدث عن نفسها.',
      'Made to Keep':'مصممة لتبقى','Pieces imagined as future keepsakes, not fleeting accessories.':'قطع صُممت لتصبح مقتنيات ثمينة في المستقبل، وليست إكسسوارات عابرة.'
    }
  };

  const PRODUCTS_AR = {
    'Celestia Diamond Ring':'خاتم سيليستيا بالألماس','Pearl Harmony Necklace':'قلادة تناغم اللؤلؤ','Golden Bloom Earrings':'أقراط التفتح الذهبي',
    'Infinity Diamond Bracelet':'سوار إنفينيتي بالألماس','Serenity Gold Ring':'خاتم سيرينيتي الذهبي','Luna Pearl Necklace':'قلادة لونا باللؤلؤ',
    'Blush Drop Earrings':'أقراط بلَش المتدلية','Royal Emerald Ring':'خاتم الزمرد الملكي','Serenity Tennis Bracelet':'سوار سيرينيتي تنس',
    'Diamond Studs':'أقراط ألماس كلاسيكية','Twilight Pendant':'قلادة توايلايت','Rose Gold Bracelet':'سوار الذهب الوردي'
  };

  let currentLanguage = 'en';

  function getLanguage(){ try { return localStorage.getItem(LANG_KEY) || 'en'; } catch { return 'en'; } }
  function getTheme(){ try { return localStorage.getItem(THEME_KEY) || 'light'; } catch { return 'light'; } }
  function saveSetting(k,v){ try { localStorage.setItem(k,v); } catch {} }
  function t(key){ return (I18N[currentLanguage] && I18N[currentLanguage][key]) || key; }

  function applyTheme(theme = getTheme()){
    document.documentElement.dataset.theme = theme;
    const btn=document.querySelector('[data-theme-toggle]');
    if(btn){
      btn.textContent = theme === 'dark' ? '☀' : '☾';
      btn.title = theme === 'dark' ? 'Light mode' : 'Dark mode';
      btn.setAttribute('aria-label', btn.title);
    }
  }

  function applyLanguage(lang = getLanguage()){
    currentLanguage = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key=el.dataset.i18n;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder=t(key);
      else el.textContent=t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder=t(el.dataset.i18nPlaceholder));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-title]').forEach(el => el.title=t(el.dataset.i18nTitle));
    const langBtn=document.querySelector('[data-language-toggle]');
    if(langBtn){
      langBtn.textContent=currentLanguage==='ar'?'EN':'AR';
      langBtn.title=currentLanguage==='ar'?'English':'العربية';
      langBtn.setAttribute('aria-label',langBtn.title);
    }
    const titleMap={index:['AURELIA — Timeless Elegance','AURELIA — أناقة خالدة'],shop:['Shop — AURELIA','المتجر — AURELIA'],about:['About — AURELIA','من نحن — AURELIA'],contact:['Contact — AURELIA','تواصل معنا — AURELIA'],wishlist:['Wishlist — AURELIA','المفضلة — AURELIA']};
    const page=(location.pathname.split('/').pop()||'index').replace('.html','')||'index';
    if(titleMap[page]) document.title=currentLanguage==='ar'?titleMap[page][1]:titleMap[page][0];
    updateDynamicUI();
    if (document.querySelector('#products')) {
      const requested = new URLSearchParams(window.location.search).get('category') || 'All Jewelry';
      renderShop(['All Jewelry','Rings','Necklaces','Earrings','Bracelets'].includes(requested) ? requested : 'All Jewelry');
    }
    if (document.querySelector('#wishlist-grid')) initWishlist();
  }

  function translateStaticText(){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const raw=node.nodeValue, key=raw.trim().replace(/\u00a0/g,' ');
      if(!key || !I18N.en[key]) return;
      const leading=raw.match(/^\\s*/)?.[0]||'', trailing=raw.match(/\\s*$/)?.[0]||'';
      node.nodeValue=leading+t(key)+trailing;
      node.parentElement?.setAttribute('data-i18n',key);
    });
    document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
      const p=el.getAttribute('placeholder'); if(I18N.en[p]) el.dataset.i18nPlaceholder=p;
    });
    document.querySelectorAll('select option').forEach(el=>{
      const key=el.textContent.trim(); if(I18N.en[key]) {el.dataset.i18n=key;}
    });
    document.querySelectorAll('select option[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  }

  function addControls(){
    const actions=document.querySelector('.actions');
    if(!actions || actions.querySelector('[data-theme-toggle]')) return;
    const theme=document.createElement('button');
    theme.className='icon-btn preference-btn'; theme.type='button'; theme.dataset.themeToggle='';
    const lang=document.createElement('button');
    lang.className='language-btn'; lang.type='button'; lang.dataset.languageToggle='';
    actions.insertBefore(theme, actions.firstChild);
    actions.insertBefore(lang, actions.children[1] || null);
    theme.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';saveSetting(THEME_KEY,next);applyTheme(next);});
    lang.addEventListener('click',()=>{const next=currentLanguage==='ar'?'en':'ar';saveSetting(LANG_KEY,next);applyLanguage(next);});
    applyTheme(); applyLanguage();
  }
  function getWishlist() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value.map(Number).filter(Number.isFinite) : [];
    } catch {
      return [];
    }
  }

  function setWishlist(items) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }

  function toast(message) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function updateCount() {
    document.querySelectorAll('.count').forEach(el => { el.textContent = getWishlist().length; });
  }

  function toggleWish(id, el) {
    let wishlist = getWishlist();
    const numericId = Number(id);
    const exists = wishlist.includes(numericId);

    wishlist = exists ? wishlist.filter(item => item !== numericId) : [...wishlist, numericId];
    setWishlist(wishlist);

    if (el) {
      el.classList.toggle('active', !exists);
      el.setAttribute('aria-pressed', String(!exists));
      el.setAttribute('aria-label', exists ? (currentLanguage==='ar'?'إزالة من المفضلة':'Remove from wishlist') : (currentLanguage==='ar'?'إضافة إلى المفضلة':'Add to wishlist'));
    }

    toast(exists ? (currentLanguage==='ar'?'تمت الإزالة من المفضلة':'Removed from wishlist') : (currentLanguage==='ar'?'تمت الإضافة إلى المفضلة':'Added to wishlist'));
    updateCount();

    if (document.querySelector('#wishlist-grid')) initWishlist();
  }

  function imageMarkup(p) {
    return `<img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" width="600" height="600" onerror="this.onerror=null;this.src='assets/ring-1.webp';this.classList.add('image-fallback')">`;
  }

  function productCard(p) {
    const wished = getWishlist().includes(Number(p.id));
    const displayName = currentLanguage === 'ar' ? (PRODUCTS_AR[p.name] || p.name) : p.name;
    const category = t(p.category);
    return `<article class="product">
      <div class="product-img">
        ${imageMarkup({...p,name:displayName})}
        <button class="wish ${wished ? 'active' : ''}" type="button" aria-pressed="${wished}" aria-label="${wished ? (currentLanguage==='ar'?'إزالة من المفضلة':'Remove from wishlist') : (currentLanguage==='ar'?'إضافة إلى المفضلة':'Add to wishlist')}" data-wish="${p.id}">♡</button>
      </div>
      <div class="product-info">
        <h3>${displayName}</h3>
        <p>${category} · ${currentLanguage==='ar'?'مجوهرات فاخرة':'Fine Jewelry'}</p>
        <span class="price">${money(p.price)}</span>
      </div>
    </article>`;
  }

  function getShopControls() {
    return {
      search: document.querySelector('#product-search'),
      sort: document.querySelector('#product-sort')
    };
  }

  function renderShop(filter = 'All Jewelry') {
    const grid = document.querySelector('#products');
    if (!grid) return;

    const { search, sort } = getShopControls();
    const query = (search?.value || '').trim().toLowerCase();
    let list = filter === 'All Jewelry' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === filter);

    if (query) {
      list = list.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(query));
    }

    switch (sort?.value) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : `<div class="empty shop-empty"><h2>${currentLanguage==='ar'?'لم يتم العثور على قطع.':'No pieces found.'}</h2><p class="lead">${currentLanguage==='ar'?'جرّب تصنيفًا أو عبارة بحث أخرى.':'Try another category or search term.'}</p></div>`;

    const title = document.querySelector('#shop-count');
    if (title) { title.dataset.countValue=String(list.length); title.textContent=`${list.length} ${list.length===1?(currentLanguage==='ar'?'قطعة':'piece'):(currentLanguage==='ar'?'قطع':'pieces')}`; }
  }

  function initShop() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('category') || 'All Jewelry';
    const validCategories = ['All Jewelry', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];
    let category = validCategories.includes(requested) ? requested : 'All Jewelry';

    const buttons = document.querySelectorAll('[data-cat]');
    buttons.forEach(button => {
      button.classList.toggle('active', button.dataset.cat === category);
      button.addEventListener('click', () => {
        category = button.dataset.cat;
        const url = new URL(window.location.href);
        if (category === 'All Jewelry') url.searchParams.delete('category');
        else url.searchParams.set('category', category);
        history.replaceState({}, '', url);
        buttons.forEach(item => item.classList.toggle('active', item.dataset.cat === category));
        renderShop(category);
      });
    });

    const { search, sort } = getShopControls();
    search?.addEventListener('input', () => renderShop(category));
    sort?.addEventListener('change', () => renderShop(category));

    renderShop(category);
  }

  function initWishlist() {
    const grid = document.querySelector('#wishlist-grid');
    if (!grid) return;

    const list = PRODUCTS.filter(p => getWishlist().includes(Number(p.id)));
    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : `<div class="empty" style="grid-column:1/-1"><h2>${t('Your wishlist is waiting.')}</h2><p class="lead" style="margin:10px auto 25px">${t('Save pieces you love and keep them close.')}</p><a class="btn" href="shop.html">${t('Explore Jewelry →')}</a></div>`;
  }

  function initGlobalEvents() {
    document.querySelectorAll('.menu-btn').forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open menu');
      button.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const open = nav?.classList.toggle('open');
        button.setAttribute('aria-expanded', String(Boolean(open)));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
    });

    document.addEventListener('click', event => {
      const wish = event.target.closest('[data-wish]');
      if (wish) toggleWish(wish.dataset.wish, wish);

      const nav = document.querySelector('.nav-links');
      const menu = document.querySelector('.menu-btn');
      if (nav?.classList.contains('open') && !event.target.closest('.nav') && !event.target.closest('.menu-btn')) {
        nav.classList.remove('open');
        menu?.setAttribute('aria-expanded', 'false');
        menu?.setAttribute('aria-label', 'Open menu');
      }
    });

    document.querySelectorAll('form[data-demo]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        toast(form.dataset.demo === 'newsletter' ? (currentLanguage==='ar'?'تم تسجيلك في القائمة — شكرًا لك.':'You are on the list — thank you.') : (currentLanguage==='ar'?'شكرًا لك — تم استلام رسالتك.':'Thank you — your message has been received.'));
        form.reset();
      });
    });
  }


  function updateDynamicUI(){
    const search=document.querySelector('#product-search');
    if(search) search.placeholder=t('Search jewelry');
    const count=document.querySelector('#shop-count');
    if(count && count.dataset.countValue) {
      const n=Number(count.dataset.countValue);
      count.textContent=`${n} ${n===1 ? (currentLanguage==='ar'?'قطعة':'piece') : (currentLanguage==='ar'?'قطع':'pieces')}`;
    }
    document.querySelectorAll('[data-cat]').forEach(b=>{b.textContent=t(b.dataset.cat);});
  }

  function init() {
    translateStaticText();
    addControls();
    applyTheme();
    applyLanguage();
    updateCount();
    initGlobalEvents();
    initShop();
    initWishlist();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
