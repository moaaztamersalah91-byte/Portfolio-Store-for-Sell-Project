
const T={
en:{
navHome:"Home",navFirm:"The Firm",navPractice:"Practice Areas",navContact:"Contact",
top:"Private counsel · Business, disputes & advisory",eyebrow:"NORTH & CO. — EST. 1987",
hero:"Clarity when the stakes are high.",heroP:"A modern independent law firm advising people, founders and established businesses on complex matters with discretion, precision and a long-term view.",
explore:"Explore our practice",tag1:"Independent counsel",tag2:"Trusted since 1987",
s1:"Years of practice",s2:"Practice areas",s3:"Languages",s4:"Direct contact",
prEy:"WHAT WE DO",prTitle:"Focused expertise. Thoughtful counsel.",prP:"Our work is deliberately focused on the moments where clear judgment, careful preparation and decisive communication matter most.",
p1:"Corporate & Commercial",p2:"Dispute Resolution",p3:"Private Clients",p4:"Real Estate",p5:"Employment",p6:"Regulatory Advisory",
view:"View practice area",storyEy:"THE FIRM",storyTitle:"Built around judgment, not noise.",storyP:"North & Co. is an independent firm with a deliberately personal approach. We combine rigorous legal thinking with a clear understanding of the commercial and human context around every matter.",
point1:"Senior-led advice from the first conversation.",point2:"Plain-language communication and disciplined strategy.",point3:"A network of trusted specialists when a matter crosses borders or disciplines.",
storyBtn:"Meet the firm",
firmTitle:"A smaller room for bigger decisions.",firmP:"We believe clients value lawyers who listen closely, explain clearly and stay accountable. Our team works across business, disputes, property and private client matters without turning the relationship into a process.",
quote:"Good counsel is not about saying more. It is about seeing what matters.",
contactTitle:"Start a conversation.",contactP:"Tell us briefly what you are dealing with. We can arrange an initial conversation by phone or email.",
phone:"Phone",email:"Email",address:"Office",addressVal:"24 King Street, London",hours:"Office hours",hoursVal:"Mon–Fri · 08:30–18:00",
contactBtn:"Call the firm",mailBtn:"Email the firm",footer:"Independent legal counsel for complex moments.",
legal:"© 2026 North & Co. All rights reserved."
},
ar:{
navHome:"الرئيسية",navFirm:"عن المكتب",navPractice:"مجالات العمل",navContact:"تواصل معنا",
top:"استشارات قانونية خاصة · أعمال ونزاعات واستشارات",eyebrow:"نورث وشركاه — تأسس عام 1987",
hero:"وضوح عندما تكون القرارات مصيرية.",heroP:"مكتب محاماة مستقل حديث يقدم المشورة للأفراد ورواد الأعمال والشركات في المسائل المعقدة، مع التركيز على السرية والدقة والرؤية طويلة المدى.",
explore:"استكشف مجالات العمل",tag1:"استشارات مستقلة",tag2:"ثقة منذ 1987",
s1:"عامًا من الخبرة",s2:"مجالات عمل",s3:"لغات",s4:"تواصل مباشر",
prEy:"ماذا نقدم",prTitle:"تخصص واضح. مشورة مدروسة.",prP:"نركز على المواقف التي تحتاج إلى رؤية دقيقة، وتحضير قوي، وتواصل حاسم وواضح.",
p1:"الشركات والأعمال",p2:"حل النزاعات",p3:"شؤون الأفراد",p4:"العقارات",p5:"قانون العمل",p6:"الاستشارات التنظيمية",
view:"استكشف المجال",storyEy:"المكتب",storyTitle:"نعتمد على الرؤية، لا الضوضاء.",storyP:"نورث وشركاه مكتب مستقل بأسلوب شخصي ومدروس. نجمع بين التفكير القانوني الدقيق وفهم السياق التجاري والإنساني لكل قضية.",
point1:"استشارة مباشرة من أصحاب الخبرة منذ أول تواصل.",point2:"تواصل واضح واستراتيجية منضبطة دون تعقيد.",point3:"شبكة من المتخصصين الموثوقين عند الحاجة إلى خبرات عابرة للتخصصات أو الحدود.",
storyBtn:"تعرّف على المكتب",
firmTitle:"مساحة أصغر لقرارات أكبر.",firmP:"نؤمن أن العميل يحتاج إلى محامٍ يستمع جيدًا، ويشرح بوضوح، ويتحمل المسؤولية عن مسار العمل. نعمل في مجالات الأعمال والنزاعات والعقارات وشؤون الأفراد دون تحويل العلاقة إلى إجراءات معقدة.",
quote:"المشورة الجيدة لا تعني الكلام أكثر، بل رؤية ما يهم فعلًا.",
contactTitle:"ابدأ محادثة.",contactP:"أخبرنا باختصار عن الموضوع الذي تتعامل معه، ويمكننا ترتيب محادثة أولية عبر الهاتف أو البريد الإلكتروني.",
phone:"الهاتف",email:"البريد الإلكتروني",address:"المكتب",addressVal:"24 شارع كينج، لندن",hours:"مواعيد المكتب",hoursVal:"الإثنين–الجمعة · 08:30–18:00",
contactBtn:"اتصل بالمكتب",mailBtn:"راسل المكتب",footer:"استشارات قانونية مستقلة للقرارات والمواقف المعقدة.",
legal:"© 2026 نورث وشركاه. جميع الحقوق محفوظة."
}}
let lang=localStorage.getItem("northLang")||"en";
function applyLang(){
 const d=T[lang]; document.documentElement.lang=lang; document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>{const k=e.dataset.i18n;if(d[k]!==undefined)e.textContent=d[k]});
 document.querySelectorAll("[data-href]").forEach(e=>{e.href=e.dataset.href});
 const b=document.querySelector("[data-lang]"); if(b)b.textContent=lang==="en"?"عربي":"English";
}
function setLang(){lang=lang==="en"?"ar":"en";localStorage.setItem("northLang",lang);applyLang()}
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("northTheme",document.body.classList.contains("dark")?"dark":"light")}
document.addEventListener("DOMContentLoaded",()=>{if(localStorage.getItem("northTheme")==="dark")document.body.classList.add("dark");applyLang();document.querySelector("[data-lang]")?.addEventListener("click",setLang);document.querySelector("[data-theme]")?.addEventListener("click",toggleTheme);const menuBtn=document.querySelector("[data-menu]");
const links=document.querySelector(".links");
if(menuBtn&&links){
  menuBtn.setAttribute("aria-expanded","false");
  menuBtn.setAttribute("aria-controls","mobile-navigation");
  links.id="mobile-navigation";
  menuBtn.addEventListener("click",()=>{
    const open=links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded",String(open));
    menuBtn.textContent=open?"×":"☰";
  });
  links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    links.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
    menuBtn.textContent="☰";
  }));
  document.addEventListener("click",e=>{
    if(!links.contains(e.target)&&!menuBtn.contains(e.target)){
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    }
  });
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    }
  });
}});
