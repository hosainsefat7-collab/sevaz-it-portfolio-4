const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const IC=['<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>','<path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5"/>','<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>','<path d="M12 3l9 9-9 9-9-9zM12 8v8M8 12h8"/>','<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>','<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>','<path d="M3 4h3l3 11h10l2-8H7M10 20h.01M18 20h.01"/>','<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 22h8"/>'];
const FX=['f3','f2','f1','f4','f5','f3','f2','f1'];
const SV=[['Digital Marketing','Marketing strategy|Audience targeting|Campaign planning|Performance-focused optimization'],['Social Media Management','Facebook and Instagram content|Social media page optimization|Content planning|Brand engagement'],['Facebook Automation','Comment-to-message automation|Automated customer responses|Lead capture workflows|Customer communication workflows'],['Graphic Design','Social media creatives|Advertising banners|Promotional posters|Brand graphics'],['AI-Powered Creative Solutions','AI-assisted product photography|Product image enhancement|AI-generated creative concepts|Marketing content assistance'],['SEO and Keyword Research','Keyword discovery|Search intent research|On-page SEO support|Content optimization'],['E-commerce Growth Solutions','Product presentation|Product listing optimization|Conversion-focused creative assets|Online store marketing support'],['Website Design and Digital Experiences','Business portfolio websites|Landing pages|E-commerce website concepts|Responsive UI design']];
$('#sg').innerHTML=SV.map((s,i)=>`<article class="card sv rv" style="--fx:${FX[i]}"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${IC[i]}</svg></div><h3>${s[0]}</h3><ul>${s[1].split('|').map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
$('#sv').insertAdjacentHTML('beforeend',SV.map(s=>`<option>${s[0]}</option>`).join(''));
const FL=[['Strategy','Goals, audience and positioning define everything that follows: the plan guides design, campaigns and automation.'],['Design','Brand graphics, social creatives and web experiences turn strategy into something people recognise and trust.'],['Marketing','Content, SEO and campaigns carry the message to the right audience across social and search.'],['Automation','Facebook workflows and automated replies capture leads and keep customer communication timely.'],['Growth','Review what works, refine what doesn\'t, and feed the learning back into strategy.']];
$('#flow').innerHTML=FL.map((f,i)=>`<button class="fn" aria-pressed="${i==0}" data-i="${i}"><span>0${i+1}</span>${f[0]}</button>`).join('');
const fd=$('#fd'),sf=i=>{$$('.fn').forEach(b=>b.setAttribute('aria-pressed',b.dataset.i==i));fd.innerHTML=`<h3>${FL[i][0]}</h3><p style="margin:0">${FL[i][1]}</p>`};
$$('.fn').forEach(b=>b.onclick=()=>sf(b.dataset.i));sf(0);
const CATS=['All Projects',...new Set(PROJECTS.map(p=>p.category))];
$('#flt').innerHTML=CATS.map((c,i)=>`<button type="button" aria-pressed="${i==0}">${c}</button>`).join('');
$('#pg').innerHTML=PROJECTS.map((p,i)=>`<button type="button" class="card pj" data-c="${p.category}" data-i="${i}"><div class="pw"><div class="pv" style="background:${p.bg}"><img src="${p.image}" alt="${p.title} sample visual" width="720" height="400" loading="lazy" decoding="async" style="object-fit:${p.fit}"></div></div><div class="tx">${p.label?`<em>${p.label}</em>`:''}<small>${p.category.toUpperCase()}</small><h3 style="margin:6px 0 4px;font-size:1.05rem">${p.title}</h3><p style="margin:0;font-size:.86rem">${p.summary}</p></div></button>`).join('');
$$('#flt button').forEach((b,i)=>b.onclick=()=>{$$('#flt button').forEach(x=>x.setAttribute('aria-pressed',x==b));$$('.pj').forEach(p=>p.classList.toggle('hide',i&&p.dataset.c!=CATS[i]))});
$$('.pj').forEach(p=>p.onclick=()=>{const d=PROJECTS[p.dataset.i];$('#dt').textContent=d.title;$('#di').src=d.image;$('#di').alt=d.title;$('#dd').textContent=d.description;$('#dg').showModal()});
$('#dc').onclick=()=>$('#dg').close();
$('#dg').addEventListener('click',e=>{if(e.target===$('#dg'))$('#dg').close()});
/* nav, progress, reveal */
const nav=$('#nav'),pr=$('#pr');
function sc(){const h=document.documentElement,y=scrollY;$('#prog').style.transform=`scaleX(${y/(h.scrollHeight-innerHeight||1)})`;nav.classList.toggle('sm',y>40);const r=pr.getBoundingClientRect();pr.style.setProperty('--p',Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height)))}
addEventListener('scroll',sc,{passive:true});sc();
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),io.unobserve(x.target))),{threshold:.12});$$('.rv').forEach(e=>io.observe(e));
const so=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&$$('#lk a').forEach(a=>a.classList.toggle('on',a.hash=='#'+x.target.id))),{rootMargin:'-45% 0px -50% 0px'});$$('section[id]').forEach(s=>so.observe(s));
const mb=$('#mb'),lk=$('#lk');mb.onclick=()=>mb.setAttribute('aria-expanded',lk.classList.toggle('open'));lk.onclick=()=>{lk.classList.remove('open');mb.setAttribute('aria-expanded',false)};
$$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');if(!RM&&c.classList.contains('sv')&&e.pointerType=='mouse')c.style.transform=`perspective(700px) rotateY(${(x/r.width-.5)*8}deg) rotateX(${(.5-y/r.height)*8}deg)`}),c.addEventListener('pointerleave',()=>c.style.transform=''));
if(!RM&&matchMedia('(pointer:fine)').matches)addEventListener('pointermove',e=>$('#glow').style.transform=`translate(${e.clientX}px,${e.clientY}px)`);
else $('#glow').remove();
/* particles */
const cv=$('#cv'),cx=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:innerWidth<760?25:55},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.4,v:Math.random()*.25+.05}))}
function dr(){cx.clearRect(0,0,W,H);cx.fillStyle='rgba(34,211,238,.55)';P.forEach(p=>{if(!RM)p.y=(p.y-p.v+H)%H;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()});if(!RM&&!document.hidden)requestAnimationFrame(dr)}
rs();addEventListener('resize',rs);dr();document.addEventListener('visibilitychange',()=>!document.hidden&&dr());
/* form: no backend configured, so it opens the visitor's email app */
const f=$('#f'),V=[['n','Please enter your name.'],['em','Please enter a valid email.'],['sv','Please choose a service.'],['pd','Please describe your project.']];
f.onsubmit=e=>{e.preventDefault();if($('#hp').value)return;let ok=true;
V.forEach(([id,m])=>{const el=$('#'+id),bad=!el.value.trim()||(id=='em'&&!el.validity.valid);el.setAttribute('aria-invalid',bad);$('#e-'+id).textContent=bad?m:'';if(bad)ok=false});
if(!ok){$('#fm').textContent='Please fix the highlighted fields.';return}
const g=id=>$('#'+id).value.trim(),fm=$('#fm'),btn=f.querySelector('button'),CFG=window.SITE_CONFIG||{},EP=CFG.formEndpoint,TO=CFG.email;
const data={name:g('n'),email:g('em'),phone:g('ph'),service:g('sv'),budget:g('bd'),details:g('pd')};
if(EP){btn.disabled=true;fm.textContent='Sending…';
fetch(EP,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
.then(r=>{if(!r.ok)throw 0;f.reset();fm.textContent='Thank you! Your inquiry has been sent. We will reply as soon as possible.'})
.catch(()=>{fm.textContent='Sorry, something went wrong. Please email '+TO+' directly.'}).finally(()=>{btn.disabled=false})}
else{const b=`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget}\n\n${data.details}`;
location.href=`mailto:${TO}?subject=${encodeURIComponent('Project inquiry: '+data.service)}&body=${encodeURIComponent(b)}`;
fm.textContent='Your email app should open with the inquiry ready to send. Nothing is sent until you press send there.'}};
$('#yr').textContent=new Date().getFullYear();
