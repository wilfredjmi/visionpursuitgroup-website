/* Vision Pursuit Group — shared site behaviour */

/* ---------- inline icon set (rendered into [data-icon]) ---------- */
const icons={
 arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
 store:'<svg viewBox="0 0 24 24"><path d="M4 9v11h16V9M3 9l2-5h14l2 5M8 20v-6h8v6M4 9c0 2 3 2 4 0 1 2 4 2 4 0 1 2 4 2 4 0 1 2 4 2 4 0"/></svg>',
 gear:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/></svg>',
 screen:'<svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6h8v7H8zM9.5 17.5h5"/></svg>',
 touch:'<svg viewBox="0 0 24 24"><rect x="4" y="2.5" width="12" height="16" rx="2"/><path d="M7 6h6M12.5 21.5l-2.3-4.2a1.2 1.2 0 0 1 2-1.3l1 1.3V11a1.1 1.1 0 0 1 2.2 0v3l3 .6a1.6 1.6 0 0 1 1.3 1.8l-.6 5.1"/></svg>',
 card:'<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9h19M6 15h5"/></svg>',
 wifi:'<svg viewBox="0 0 24 24"><path d="M3 9a14 14 0 0 1 18 0M6 12.5a9 9 0 0 1 12 0M9.5 16a4 4 0 0 1 5 0"/><circle cx="12" cy="19" r="1"/></svg>',
 chart:'<svg viewBox="0 0 24 24"><path d="M4 20h16M6 20v-6M10.5 20V9M15 20v-8M19.5 20V4"/></svg>',
 box:'<svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10"/></svg>',
 remote:'<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4M10 17h4"/></svg>',
 monitor:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 12l3-3 2 2 4-4"/></svg>',
 shield:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/></svg>',
 lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
 power:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
 ruler:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h4M3 13h2M3 17h4M9 21v-4M13 21v-2M17 21v-4"/></svg>',
 chip:'<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 9.5h5v5h-5zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
 doc:'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
 info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>',
 headset:'<svg viewBox="0 0 24 24"><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v6H4zM17 13h3v6h-3zM17 19c0 2-2 2-4 2"/></svg>',
 mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
 message:'<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>',
 pin:'<svg viewBox="0 0 24 24"><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2"/></svg>',
 briefcase:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18"/></svg>',
 inventory:'<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM4 9h16M8 13h8"/></svg>',
 refresh:'<svg viewBox="0 0 24 24"><path d="M20 6v5h-5M4 18v-5h5M18.5 9A7 7 0 0 0 6 7M5.5 15A7 7 0 0 0 18 17"/></svg>',
 star:'<svg viewBox="0 0 24 24"><path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z"/></svg>',
 users:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
 trend:'<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
 check:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 10"/></svg>',
 target:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
 layers:'<svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',
 footprint:'<svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4-8 4-8-4z"/><path d="M4 8v2M20 8v2M12 12v2M4 16l8 4 8-4" stroke-dasharray="2 2"/></svg>',
 palette:'<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.9-.4-1.2.4-2.1 1.6-2.1H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/></svg>'
};
document.querySelectorAll('[data-icon]').forEach(el=>{
  el.innerHTML=icons[el.dataset.icon]||'';
  if(!el.hasAttribute('aria-label'))el.setAttribute('aria-hidden','true');
});

/* ---------- header: shadow on scroll ---------- */
const header=document.querySelector('.site-header');
const onScroll=()=>header&&header.classList.toggle('is-scrolled',window.scrollY>8);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

/* ---------- mobile navigation ---------- */
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(menu&&nav){
  const setOpen=open=>{
    nav.classList.toggle('is-open',open);
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close menu':'Open menu');
  };
  menu.addEventListener('click',()=>setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){setOpen(false);menu.focus()}});
  document.addEventListener('click',e=>{if(nav.classList.contains('is-open')&&!nav.contains(e.target)&&!menu.contains(e.target))setOpen(false)});
  window.matchMedia('(min-width:961px)').addEventListener('change',e=>{if(e.matches)setOpen(false)});
}

/* Motion preference.  Reduced motion does NOT switch animation off: CSS keeps the fades
   and zeroes movement via --m.  JS only uses this to skip parallax / smooth scrolling. */
const root=document.documentElement;
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
// two animation frames, with a timer fallback so hidden/background tabs never stall
const nextFrame=()=>new Promise(r=>{let done=false;const go=()=>{if(!done){done=true;r()}};requestAnimationFrame(()=>requestAnimationFrame(go));setTimeout(go,50)});
const wait=ms=>new Promise(r=>setTimeout(r,ms));

/* ---------- specification tabs (ARIA tabs pattern, animated) ---------- */
document.querySelectorAll('[data-tabs]').forEach(root=>{
  const list=root.querySelector('[role="tablist"]');
  const tabs=[...root.querySelectorAll('[role="tab"]')];
  const wrap=root.querySelector('.tabpanels');
  const panelOf=t=>document.getElementById(t.getAttribute('aria-controls'));

  // sliding gold indicator
  const ind=document.createElement('span');ind.className='tab-indicator';ind.setAttribute('aria-hidden','true');
  list.prepend(ind);list.classList.add('has-indicator');
  const moveIndicator=tab=>{ind.style.width=tab.offsetWidth+'px';ind.style.transform=`translateX(${tab.offsetLeft}px)`};
  const current=()=>tabs.find(t=>t.getAttribute('aria-selected')==='true')||tabs[0];
  // place it without animating, then enable the slide for user-driven changes
  ind.style.transition='none';moveIndicator(current());ind.getBoundingClientRect();
  nextFrame().then(()=>{ind.style.transition=''});
  new ResizeObserver(()=>moveIndicator(current())).observe(list);

  // panel animation: always heads for the most recently selected tab, so rapid clicks never queue up
  let shown=panelOf(current()),target=shown,animating=false;
  const panels=tabs.map(panelOf);
  const run=async()=>{
    animating=true;
    while(shown!==target){
      const from=shown,to=target;
      if(!wrap){from.hidden=true;to.hidden=false;shown=to;continue}
      // (reduced motion runs the same sequence; CSS turns the slide into a pure cross-fade)
      const dir=panels.indexOf(to)>panels.indexOf(from)?1:-1;
      wrap.style.height=wrap.offsetHeight+'px';           // lock current height
      from.style.setProperty('--dir',dir);from.classList.add('is-leaving');
      await wait(170);                                     // outgoing fade/slide
      from.hidden=true;from.classList.remove('is-leaving');
      to.style.setProperty('--dir',dir);to.classList.add('is-entering');to.hidden=false;
      wrap.style.height=to.offsetHeight+'px';             // ease to the new height
      shown=to;
      await nextFrame();                                   // commit the start state first
      to.classList.remove('is-entering');                  // incoming fade/slide
      await wait(380);
    }
    if(wrap)wrap.style.height='';
    animating=false;
  };
  const select=(tab,focus)=>{
    tabs.forEach(t=>{const on=t===tab;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1});
    moveIndicator(tab);
    if(focus)tab.focus();
    tab.scrollIntoView({block:'nearest',inline:'nearest',behavior:reduceMotion.matches?'auto':'smooth'});
    target=panelOf(tab);
    if(!animating)run();
  };
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>select(tab));
    tab.addEventListener('keydown',e=>{
      let n=null;
      if(e.key==='ArrowRight')n=(i+1)%tabs.length;
      else if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;
      else if(e.key==='Home')n=0;
      else if(e.key==='End')n=tabs.length-1;
      if(n!==null){e.preventDefault();select(tabs[n],true)}
    });
  });
  // allow deep links such as machines.html#dimensions (no animation on load)
  const fromHash=tabs.find(t=>'#'+t.dataset.tab===location.hash);
  if(fromHash){
    tabs.forEach(t=>{const on=t===fromHash;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;panelOf(t).hidden=!on});
    shown=target=panelOf(fromHash);
    moveIndicator(fromHash);root.scrollIntoView();
  }
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-item').forEach(item=>{
  const q=item.querySelector('.faq-q');
  q.addEventListener('click',()=>{
    const open=!item.classList.contains('is-open');
    item.classList.toggle('is-open',open);
    q.setAttribute('aria-expanded',String(open));
  });
});

/* ---------- wrap design selector ---------- */
document.querySelectorAll('[data-wraps]').forEach(root=>{
  const stage=root.querySelector('.wrap-stage');
  const options=[...root.querySelectorAll('.wrap-option')];
  options.forEach(opt=>opt.addEventListener('click',async()=>{
    const id=opt.dataset.wrap;
    if(stage.dataset.active===id)return;
    stage.dataset.active=id;
    options.forEach(o=>o.setAttribute('aria-pressed',String(o===opt)));
    root.querySelectorAll('.wrap-render').forEach(r=>r.classList.toggle('is-active',r.dataset.wrap===id));
    const panels=[...root.querySelectorAll('[data-wrap-panel]')];
    const next=panels.find(p=>p.dataset.wrapPanel===id);
    panels.forEach(p=>{if(p!==next)p.hidden=true});
    next.classList.add('is-entering');next.hidden=false;
    await nextFrame();next.classList.remove('is-entering');
  }));
});

/* ---------- subtle pointer parallax on featured machines ---------- */
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('.machine[data-parallax]').forEach(m=>{
  const zone=m.closest('section')||m;
  zone.addEventListener('pointermove',e=>{
    if(reduceMotion.matches||!finePointer.matches)return;
    const r=zone.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    m.style.setProperty('--px',(x*10).toFixed(1)+'px');
    m.style.setProperty('--py',(y*6).toFixed(1)+'px');
  });
  zone.addEventListener('pointerleave',()=>{m.style.setProperty('--px','0px');m.style.setProperty('--py','0px')});
});

/* ---------- page transitions ----------
   .pt-native  : the browser runs cross-document View Transitions (see style.css).
   .pt-fallback: file:// pages, Firefox, older Safari -> fade content out, then navigate;
                 the next page fades in and the active underline glides from the old link. */
const NAV_KEY='vpg-nav-from';
if(root.classList.contains('pt-fallback')){
  const LEAVE_MS=220;
  const rememberNav=()=>{try{const cur=document.querySelector('.nav a[aria-current="page"]');
    if(cur){const r=cur.getBoundingClientRect();sessionStorage.setItem(NAV_KEY,JSON.stringify({l:r.left,w:r.width,t:Date.now()}))}}catch(e){}};
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');
    if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    if((a.target&&a.target!=='_self')||a.hasAttribute('download'))return;
    const url=new URL(a.href,location.href);
    if(url.protocol!==location.protocol||url.host!==location.host)return;   // mailto:, external
    if(!/(\.html?|\/)$/.test(url.pathname))return;
    if(url.pathname===location.pathname&&url.search===location.search)return; // same-page #anchors
    e.preventDefault();
    rememberNav();
    root.classList.remove('pt-enter');
    root.classList.add('pt-leave');
    setTimeout(()=>{location.href=url.href},LEAVE_MS);
  });
  // Back/Forward can restore this page from the bfcache in its faded-out state
  addEventListener('pageshow',e=>{if(e.persisted){root.classList.remove('pt-leave')}});
  // if the browser would also run a native transition here, let ours be the only one
  addEventListener('pageswap',e=>{if(e.viewTransition)e.viewTransition.skipTransition()});

  // glide the active-page underline in from the previously active link
  let from=null;
  try{from=JSON.parse(sessionStorage.getItem(NAV_KEY)||'null');sessionStorage.removeItem(NAV_KEY)}catch(e){}
  const navInd=document.querySelector('.nav-ind');
  if(from&&navInd&&Date.now()-from.t<8000&&getComputedStyle(navInd).display!=='none'){
    const r=navInd.parentElement.getBoundingClientRect();
    const dx=from.l-r.left,sx=from.w/r.width;
    if(Math.abs(dx)>1){
      navInd.style.transformOrigin='0 50%';
      if(reduceMotion.matches)navInd.style.opacity='0';
      else navInd.style.transform=`translateX(${dx}px) scaleX(${sx})`;
      navInd.getBoundingClientRect();
      navInd.classList.add('is-gliding');
      nextFrame().then(()=>{navInd.style.transform='';navInd.style.opacity=''});
    }
  }
}

/* ---------- contact form: preselect inquiry type from ?type= ---------- */
const type=new URLSearchParams(location.search).get('type');
const sel=document.querySelector('#inquiry-type');
if(type&&sel)[...sel.options].forEach(o=>{if(o.value===type)sel.value=type});

/* ---------- inquiry form: Formspree AJAX submission ----------
   The form posts to its Formspree endpoint (public form ID, no secret key).
   Without JS it falls back to a normal POST; with JS the visitor stays on the page. */
const card=document.querySelector('[data-inquiry]');
const form=document.getElementById('inquiry-form');
if(card&&form){
  form.noValidate=true;                                   // custom validation UI (native validation remains if JS is off)
  const formView=card.querySelector('[data-form-view]'),successView=card.querySelector('[data-success-view]');
  const alertBox=form.querySelector('[data-form-alert]'),alertText=form.querySelector('[data-form-alert-text]');
  const submitBtn=form.querySelector('[data-submit]'),submitLabel=form.querySelector('[data-submit-label]');
  const f={name:form.elements.Name,email:form.elements.email,type:form.elements['Inquiry Type'],message:form.elements.Message,
           company:form.elements.Company,subject:form.elements._subject,trap:form.elements._gotcha};
  const initialType=f.type.value;
  const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const rules={
    name:v=>v.trim().length<2?'Please enter your name.':'',
    email:v=>!v.trim()?'Please enter your email address.':!EMAIL_RE.test(v.trim())?'Please enter a valid email address, like name@company.com.':'',
    message:v=>v.trim().length<10?'Please add a short message (at least 10 characters).':''
  };
  const showError=(key,msg)=>{const el=f[key];const out=document.getElementById(el.id+'-error');
    el.setAttribute('aria-invalid',msg?'true':'false');if(out)out.textContent=msg};
  const validate=key=>{const msg=rules[key](f[key].value);showError(key,msg);return!msg};
  const touched=new Set();
  Object.keys(rules).forEach(k=>{
    f[k].addEventListener('blur',()=>{if(f[k].value.trim()){touched.add(k);validate(k)}});
    f[k].addEventListener('input',()=>{if(touched.has(k))validate(k)});
  });
  const showAlert=msg=>{alertText.textContent=msg?' '+msg:'';alertBox.hidden=false};
  const hideAlert=()=>{alertBox.hidden=true;alertText.textContent=''};
  const setSending=on=>{
    form.classList.toggle('is-sending',on);form.setAttribute('aria-busy',String(on));
    submitBtn.disabled=on;submitLabel.textContent=on?'Sending…':'Send Inquiry';
    [...form.elements].forEach(el=>{if(el!==submitBtn&&el.type!=='hidden')el.readOnly=on});
    f.type.disabled=false;f.type.style.pointerEvents=on?'none':'';
  };

  // swap between the form and the success view; the card height eases, content cross-fades
  const swap=async(from,to)=>{
    const h0=card.offsetHeight;
    card.style.height=h0+'px';card.classList.add('is-resizing');
    from.classList.add('is-leaving');await wait(180);
    from.hidden=true;from.classList.remove('is-leaving');
    to.classList.add('is-entering');to.hidden=false;
    card.style.height='auto';const h1=card.offsetHeight;card.style.height=h0+'px';card.getBoundingClientRect();
    card.style.height=h1+'px';
    await nextFrame();to.classList.remove('is-entering');
    await wait(440);card.style.height='';card.classList.remove('is-resizing');
  };

  let sending=false;                                      // duplicate-submission guard
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(sending)return;
    hideAlert();
    const bad=Object.keys(rules).filter(k=>!validate(k));
    Object.keys(rules).forEach(k=>touched.add(k));
    if(bad.length){f[bad[0]].focus();return}

    const inquiryType=f.type.value,name=f.name.value.trim(),email=f.email.value.trim();
    f.subject.value=`VPG Website Inquiry – ${inquiryType} – ${name}`;
    const data=new FormData();                            // inquiry type first so it leads every notification
    data.append('Inquiry Type',inquiryType);
    data.append('Name',name);
    data.append('email',email);                           // Formspree uses "email" as Reply-To
    data.append('Company',f.company.value.trim()||'—');
    data.append('Message',f.message.value.trim());
    data.append('_subject',f.subject.value);
    data.append('_gotcha',f.trap.value);                  // honeypot: Formspree discards submissions where this is filled

    sending=true;setSending(true);
    const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),20000);
    try{
      const res=await fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'},signal:ctrl.signal});
      let body={};try{body=await res.json()}catch(_){}
      if(!res.ok){
        const errs=Array.isArray(body.errors)?body.errors:[];
        const emailErr=errs.some(er=>er.field==='email');
        if(emailErr)showError('email','Please check your email address.');
        throw new Error(emailErr?'Please check the highlighted email address.'
                       :errs.length?'The form service couldn’t accept this submission.'
                       :'The form service had a temporary problem.');
      }
      // success
      card.querySelector('[data-success-title]').textContent=`Thank you, ${name.split(/\s+/)[0]} — your inquiry is on its way.`;
      card.querySelector('[data-success-text]').textContent='Your inquiry has been sent to Vision Pursuit Group. Our team will follow up by email.';
      card.querySelector('[data-success-type]').textContent=inquiryType;
      card.querySelector('[data-success-email]').textContent=email;
      successView.classList.remove('is-shown');
      await swap(formView,successView);
      successView.classList.add('is-shown');
      const title=card.querySelector('[data-success-title]');
      title.focus({preventScroll:true});
      if(card.getBoundingClientRect().top<0)card.scrollIntoView({behavior:reduceMotion.matches?'auto':'smooth',block:'start'});
      form.reset();f.type.value=inquiryType;
      Object.keys(rules).forEach(k=>showError(k,''));touched.clear();
    }catch(err){
      const msg=err.name==='AbortError'?'The request timed out.'
               :(!navigator.onLine?'You appear to be offline.':(err instanceof TypeError?'We couldn’t reach the form service.':err.message));
      showAlert(msg);
      alertBox.scrollIntoView({behavior:reduceMotion.matches?'auto':'smooth',block:'nearest'});
    }finally{
      clearTimeout(timer);sending=false;setSending(false);
    }
  });

  card.querySelector('[data-send-another]').addEventListener('click',async()=>{
    await swap(successView,formView);
    successView.classList.remove('is-shown');
    f.type.value=f.type.value||initialType;
    f.name.focus();
  });
}

/* ---------- reveal on scroll ---------- */
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target)}
  }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  reveals.forEach(el=>io.observe(el));
}else reveals.forEach(el=>el.classList.add('is-visible'));
