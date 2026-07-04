
function toggleMenu(){document.getElementById('mobile').classList.toggle('open')}
function toggleLang(){
  const body=document.body;
  const isEn=body.classList.toggle('lang-en');
  document.documentElement.lang=isEn?'en':'ar';
  document.documentElement.dir=isEn?'ltr':'rtl';
  try{localStorage.setItem('hisnLang',isEn?'en':'ar')}catch(e){}
}
(function(){
  try{if(localStorage.getItem('hisnLang')==='en'){document.body.classList.add('lang-en');document.documentElement.lang='en';document.documentElement.dir='ltr';}}catch(e){}
  let visits=parseInt(localStorage.getItem('hisnVisits')||'0',10)+1;
  localStorage.setItem('hisnVisits',visits);
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-visit-counter]').forEach(el=>el.textContent=visits.toLocaleString());
  });
})();
function sendWhatsApp(e){
 e.preventDefault();
 const name=(document.getElementById('name')?.value||'').trim();
 const city=(document.getElementById('city')?.value||'').trim();
 const service=(document.getElementById('service')?.value||'').trim();
 const msg=(document.getElementById('msg')?.value||'').trim();
 const text=`مرحبًا حصن أمان، أريد طلب خدمة.%0Aالاسم: ${encodeURIComponent(name)}%0Aالمنطقة: ${encodeURIComponent(city)}%0Aالخدمة: ${encodeURIComponent(service)}%0Aوصف المشكلة: ${encodeURIComponent(msg)}`;
 window.open(`https://wa.me/96891918556?text=${text}`,'_blank');
}
