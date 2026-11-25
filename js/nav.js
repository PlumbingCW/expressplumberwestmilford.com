(function(){
var d=document,t=d.querySelector('.nav-toggle'),dr=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay');
if(!t||!dr||!ov)return;
function open(){dr.classList.add('open');ov.classList.add('open');dr.setAttribute('aria-hidden','false');t.setAttribute('aria-expanded','true');d.documentElement.style.overflow='hidden';}
function close(){dr.classList.remove('open');ov.classList.remove('open');dr.setAttribute('aria-hidden','true');t.setAttribute('aria-expanded','false');d.documentElement.style.overflow='';}
t.addEventListener('click',open);ov.addEventListener('click',close);
dr.querySelector('.close').addEventListener('click',close);
dr.addEventListener('click',function(e){if(e.target.closest('a'))close();});
d.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
window.addEventListener('resize',function(){if(window.innerWidth>768)close();});
})();
