const root=document.documentElement;
const body=document.body;
let lang=localStorage.getItem('formaLang')||'en';
let theme=localStorage.getItem('formaTheme')||'light';

function apply(){
  root.lang=lang;
  root.dir=lang==='ar'?'rtl':'ltr';
  body.classList.toggle('dark',theme==='dark');

  document.querySelectorAll('[data-en]').forEach(el=>{
    const value=lang==='ar'?el.dataset.ar:el.dataset.en;
    if(value!==undefined) el.innerHTML=value;
  });

  document.querySelectorAll('[data-en-title]').forEach(el=>{
    el.title=lang==='ar'?el.dataset.arTitle:el.dataset.enTitle;
  });

  const lb=document.querySelector('#langBtn');
  const tb=document.querySelector('#themeBtn');
  if(lb){
    lb.textContent=lang==='ar'?'ع':'EN';
    lb.setAttribute('aria-label',lang==='ar'?'تغيير اللغة':'Change language');
  }
  if(tb){
    tb.textContent=theme==='dark'?'☀':'◐';
    tb.title=theme==='dark'
      ?(lang==='ar'?'الوضع الفاتح':'Light mode')
      :(lang==='ar'?'الوضع الداكن':'Dark mode');
    tb.setAttribute('aria-label',tb.title);
  }

  const title=body.dataset[lang+'Title'];
  if(title) document.title=title;
}

const mobileBtn=document.querySelector('#mobileBtn');
const nav=document.querySelector('.nav');

function closeMenu(){
  if(!mobileBtn||!nav) return;
  nav.classList.remove('open');
  mobileBtn.classList.remove('is-open');
  mobileBtn.setAttribute('aria-expanded','false');
  mobileBtn.setAttribute('aria-label',lang==='ar'?'فتح القائمة':'Open menu');
}

mobileBtn?.addEventListener('click',e=>{
  e.stopPropagation();
  const open=nav?.classList.toggle('open');
  mobileBtn.classList.toggle('is-open',open);
  mobileBtn.setAttribute('aria-expanded',String(!!open));
  mobileBtn.setAttribute('aria-label',open
    ?(lang==='ar'?'إغلاق القائمة':'Close menu')
    :(lang==='ar'?'فتح القائمة':'Open menu'));
});

nav?.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',closeMenu);
});

document.addEventListener('click',e=>{
  if(nav?.classList.contains('open') && !nav.contains(e.target) && !mobileBtn?.contains(e.target)){
    closeMenu();
  }
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeMenu();
});

document.querySelector('#langBtn')?.addEventListener('click',()=>{
  lang=lang==='en'?'ar':'en';
  localStorage.setItem('formaLang',lang);
  apply();
  if(nav?.classList.contains('open')){
    mobileBtn?.setAttribute('aria-label',lang==='ar'?'إغلاق القائمة':'Close menu');
  }
});

document.querySelector('#themeBtn')?.addEventListener('click',()=>{
  theme=theme==='dark'?'light':'dark';
  localStorage.setItem('formaTheme',theme);
  apply();
});

const io=new IntersectionObserver(
  es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),
  {threshold:.1}
);
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

apply();
