/* =========================================================================
   CONFIGURAÇÃO — edite aqui quando tiver os links reais
   ========================================================================= */
const EXTERNAL_LINKS = {
  listaCompleta: '',   // link da lista na loja Sonho de Criança
  loja: '',            // site / Instagram / mapa da loja Sonho de Criança
  whatsapp: '',        // ex.: '5511999999999' (só números, com DDI)
};
const WHATSAPP_MSG = 'Oi! Vou no chá do Cassiel 💙';
const EVENT = {
  date: '20/09', weekday: 'Domingo', time: '15h30',
  address1: 'Maria Bernardes da Silva, 124', address2: 'Lot São Rafael',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Maria+Bernardes+da+Silva%2C+124+-+Lot+S%C3%A3o+Rafael',
};

/* ===================== DADOS ===================== */
const DIAPERS = [
  { id:'fralda-p',  name:'Pampers Confort Sec', size:'P', brand:'Qualquer marca serve', quantity:7, imageUrl:'assets/img/diaper-p.png', externalUrl:'' },
  { id:'fralda-m',  name:'Pampers Confort Sec', size:'M', brand:'Qualquer marca serve', quantity:5, imageUrl:'assets/img/diaper-m.png', externalUrl:'' },
  { id:'fralda-bs', name:'Babysec Ultrasec',    size:'P', brand:'Qualquer marca serve', quantity:8, imageUrl:'assets/img/diaper-babysec.png', externalUrl:'' },
];
const GIFT_CATEGORIES = [
  { key:'Higiene',     img:'assets/img/cat-higiene.png' },
  { key:'Roupinhas',   img:'assets/img/cat-roupinhas.png' },
  { key:'Alimentação', img:'assets/img/cat-alimentacao.png' },
  { key:'Cuidados',    img:'assets/img/cat-cuidados.png' },
  { key:'Quarto',      img:'assets/img/cat-quarto.png' },
  { key:'Outros',      img:'assets/img/cat-outros.png' },
];
const GIFTS = [
  { id:'g1',  name:'Kit Higiene Básico',           category:'Higiene',     description:'Cestinha com itens essenciais para o banho e os cuidados diários.', price:'R$ 89,90', imageUrl:'assets/img/gift-kit.png',   externalUrl:'', featured:true },
  { id:'g2',  name:'Manta Soft Aconchego',         category:'Quarto',      description:'Manta macia em tecido hipoalergênico para as noites do Cassiel.',   price:'R$ 79,90', imageUrl:'assets/img/gift-manta.png', externalUrl:'', featured:true },
  { id:'g3',  name:'Body Algodão Egípcio',         category:'Roupinhas',   description:'Body confortável para os primeiros meses.',                          price:'R$ 49,90', imageUrl:'assets/img/gift-body.png',  externalUrl:'', featured:true },
  { id:'g4',  name:'Kit escova e pente',           category:'Higiene',     description:'Escova e pente macios para os primeiros cuidados.',                  price:'R$ 45',    imageUrl:'assets/img/cat-higiene.png', externalUrl:'' },
  { id:'g5',  name:'Macacão de frio',              category:'Roupinhas',   description:'Macacão felpudo para os dias mais frios.',                           price:null,       imageUrl:'assets/img/cat-roupinhas.png', externalUrl:'' },
  { id:'g6',  name:'Kit mamadeiras',               category:'Alimentação', description:'Conjunto de mamadeiras anticólica em diferentes tamanhos.',          price:'R$ 120',   imageUrl:'assets/img/cat-alimentacao.png', externalUrl:'' },
  { id:'g7',  name:'Termômetro de banho e água',   category:'Alimentação', description:'Ajuda a preparar a água e o leite na temperatura ideal.',            price:null,       imageUrl:'assets/img/cat-alimentacao.png', externalUrl:'' },
  { id:'g8',  name:'Pomada para assaduras',        category:'Cuidados',    description:'Item essencial para a rotina de trocas do dia a dia.',               price:'R$ 35',    imageUrl:'assets/img/cat-cuidados.png', externalUrl:'' },
  { id:'g9',  name:'Kit primeiros cuidados',       category:'Cuidados',    description:'Termômetro, aspirador nasal e tesourinha de segurança.',             price:null,       imageUrl:'assets/img/cat-cuidados.png', externalUrl:'' },
  { id:'g10', name:'Luminária noturna',            category:'Quarto',      description:'Luz suave para acompanhar as trocas e mamadas da madrugada.',        price:null,       imageUrl:'assets/img/cat-quarto.png', externalUrl:'' },
  { id:'g11', name:'Álbum do bebê',                category:'Outros',      description:'Para guardar as primeiras memórias e marcos do Cassiel.',            price:'R$ 75',    imageUrl:'assets/img/cat-outros.png', externalUrl:'' },
  { id:'g12', name:'Vale-presente Sonho de Criança', category:'Outros',    description:'Para a Maria escolher depois o que ainda estiver faltando.',         price:null,       imageUrl:'assets/img/bag.png', externalUrl:'' },
];

/* ===================== RESERVAS (localStorage) =====================
   Fica só neste navegador. Para compartilhar entre todos os convidados,
   trocar loadReservations/saveReservations por um backend. */
const STORAGE_KEY = 'cassiel-reservations';
function loadReservations(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); }catch(e){ return {}; } }
function saveReservations(d){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); return true; }catch(e){ return false; } }
let reservations = loadReservations();
function diaperAvail(d){ const claims=(reservations[d.id]&&reservations[d.id].claims)||[]; const available=Math.max(d.quantity-claims.length,0); return {available,isFull:available<=0}; }
function giftTaken(g){ const r=reservations[g.id]; return !!(r&&(r.status==='reservado'||r.status==='escolhido')); }

/* ===================== HELPERS ===================== */
const $=(s,el=document)=>el.querySelector(s);
const $$=(s,el=document)=>Array.from(el.querySelectorAll(s));
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function page(){ return document.body.dataset.page||'inicio'; }

/* ===================== LAYOUT COMPARTILHADO ===================== */
const NAV=[['inicio','index.html','Início'],['fraldas','fraldas.html','Fraldas'],['presentes','presentes.html','Presentes'],['sobre','sobre.html','Sobre o chá']];
const ICON_GIFT='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>';

function renderHeader(){
  const cur=page();
  const links=cls=>NAV.map(([id,href,label])=>`<a class="${cls} ${cur===id?'active':''}" href="${href}">${label}</a>`).join('');
  $('#site-header').innerHTML=`
    <div class="header-inner">
      <a class="brand" href="index.html"><img src="assets/img/teddy.png" alt=""><span>Chá do</span><span class="script">Cassiel</span></a>
      <nav class="desktop-nav" aria-label="Principal">${links('nav-link')}</nav>
      <a class="btn btn-primary btn-sm header-cta" href="presentes.html">${ICON_GIFT} Quero presentear</a>
      <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      </button>
    </div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Menu">${links('mobile-nav-link')}
      <a class="btn btn-primary" href="presentes.html">${ICON_GIFT} Quero presentear</a>
    </nav>`;
  const hb=$('#hamburger'), mn=$('#mobileNav');
  hb.addEventListener('click',()=>{ const o=mn.classList.toggle('open'); hb.setAttribute('aria-expanded',o); });
}

function renderFooter(){
  const el=$('#site-footer'); if(!el) return;
  el.innerHTML=`
    <svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 30 C 180 0 360 0 540 30 S 900 60 1080 30 S 1350 0 1440 30 V60 H0Z"/></svg>
    <div class="footer-body"><div class="footer-inner">
      <p>Com carinho,<br>Maria &amp; família</p>
      <p class="center">Chá do Cassiel • ${esc(EVENT.date)}</p>
      <img src="assets/img/bear-sleep.png" alt="">
    </div></div>`;
  const fab=$('#whatsappFab'); if(!fab) return;
  if(EXTERNAL_LINKS.whatsapp){ fab.href='https://wa.me/'+EXTERNAL_LINKS.whatsapp+'?text='+encodeURIComponent(WHATSAPP_MSG); }
  else { fab.removeAttribute('target'); fab.addEventListener('click',e=>{ e.preventDefault(); toast('O contato para confirmar presença será divulgado em breve 💙'); }); }
}

function renderModal(){
  document.body.insertAdjacentHTML('beforeend',`
  <div class="modal-overlay" id="modal">
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" id="modalClose" aria-label="Fechar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div id="modalForm">
        <h3 id="modalTitle">Que carinho! 💙</h3>
        <p class="modal-product" id="modalProduct"></p>
        <p class="modal-text">Queremos registrar que esse presente foi escolhido por você. Assim evitamos que outra pessoa escolha o mesmo item.</p>
        <form class="modal-form" id="reserveForm" novalidate>
          <label for="guestName">Seu nome</label>
          <input id="guestName" type="text" placeholder="Digite seu nome" autocomplete="name" aria-required="true">
          <p class="form-error" id="formError" role="alert" hidden></p>
          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" id="modalCancel">Voltar</button>
            <button type="submit" class="btn btn-primary">Confirmar</button>
          </div>
        </form>
      </div>
      <div id="modalSuccess" class="modal-success" hidden>
        <div class="big">🧸</div>
        <h3>Presente registrado!</h3>
        <p class="modal-text" style="margin-top:8px" id="successText"></p>
        <div class="modal-actions" style="justify-content:center">
          <a class="btn btn-secondary" id="storeLink" href="#" target="_blank" rel="noopener noreferrer" hidden>Ir para a loja</a>
          <button type="button" class="btn btn-primary" id="successClose">Fechar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="toast" id="toast" role="status"></div>`);
  const modal=$('#modal'), nameInput=$('#guestName'), err=$('#formError');
  let current=null;
  window.openModal=function(id,type){
    current={ item:(type==='diaper'?DIAPERS:GIFTS).find(x=>x.id===id), type };
    if(!current.item) return;
    $('#modalProduct').textContent=current.item.name+(current.item.size?' — Tamanho '+current.item.size:'');
    $('#modalForm').hidden=false; $('#modalSuccess').hidden=true;
    nameInput.value=''; err.hidden=true;
    modal.classList.add('open'); document.body.style.overflow='hidden';
    setTimeout(()=>nameInput.focus(),60);
  };
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; current=null; }
  $('#modalClose').addEventListener('click',closeModal);
  $('#modalCancel').addEventListener('click',closeModal);
  $('#successClose').addEventListener('click',closeModal);
  modal.addEventListener('mousedown',e=>{ if(e.target===modal) closeModal(); });
  window.addEventListener('keydown',e=>{ if(e.key==='Escape'&&modal.classList.contains('open')) closeModal(); });
  $('#reserveForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=nameInput.value.trim();
    if(!name){ err.textContent='Por favor, digite seu nome para continuar.'; err.hidden=false; nameInput.focus(); return; }
    err.hidden=true;
    reservations=loadReservations();
    const {item,type}=current, now=Date.now();
    if(type==='diaper'){
      if(diaperAvail(item).isFull){ toast('Ops, esse tamanho acabou de esgotar.'); closeModal(); rerender(); return; }
      const r=reservations[item.id]||{claims:[]}; r.claims.push({guestName:name,timestamp:now}); reservations[item.id]=r;
    } else {
      if(giftTaken(item)){ toast('Ops, alguém acabou de escolher esse presente.'); closeModal(); rerender(); return; }
      reservations[item.id]={status:'reservado',guestName:name,timestamp:now};
    }
    if(!saveReservations(reservations)){ toast('Não foi possível salvar. Tente novamente.'); return; }
    $('#modalForm').hidden=true; $('#modalSuccess').hidden=false;
    $('#successText').textContent=`Obrigado, ${name}! Registramos "${item.name}${item.size?' '+item.size:''}" para você. É só levar no dia do chá 💙`;
    const store=$('#storeLink'); if(item.externalUrl){ store.href=item.externalUrl; store.hidden=false; } else store.hidden=true;
    rerender();
  });
}
let toastTimer;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),4000); }

// cada página registra aqui o que precisa redesenhar após uma reserva
const rerenderFns=[];
function onRerender(fn){ rerenderFns.push(fn); }
function rerender(){ rerenderFns.forEach(f=>f()); }

/* ===================== COMPONENTES DE PRODUTO ===================== */
function miniDiaper(d){
  const a=diaperAvail(d);
  return `<div class="mini-card">
    <div class="thumb"><img src="${esc(d.imageUrl)}" alt=""></div>
    <span class="name">${esc(d.name)}<br>Tamanho ${esc(d.size)}</span>
    <span class="tag ${a.isFull?'taken':''}">${a.isFull?'Esgotado':a.available+' disponíveis'}</span>
    <button class="btn btn-primary btn-sm" data-choose="${d.id}" data-type="diaper" ${a.isFull?'disabled':''}>Quero presentear</button>
  </div>`;
}
function miniGift(g){
  const t=giftTaken(g);
  return `<div class="mini-card">
    <div class="thumb"><img src="${esc(g.imageUrl)}" alt=""></div>
    <span class="name">${esc(g.name)}</span>
    ${g.price?`<span class="price">${esc(g.price)}</span>`:''}
    <span class="tag ${t?'taken':''}">${t?'Escolhido':'Disponível'}</span>
    <button class="btn btn-primary btn-sm" data-choose="${g.id}" data-type="gift" ${t?'disabled':''}>${t?'Já escolhido':'Quero presentear'}</button>
  </div>`;
}
function diaperCard(d){
  const a=diaperAvail(d);
  return `<article class="product-card reveal ${a.isFull?'taken':''}">
    <div class="product-media"><img src="${esc(d.imageUrl)}" alt=""></div>
    <div class="product-body">
      <span class="badge">Tamanho ${esc(d.size)}</span>
      <h3>${esc(d.name)}</h3>
      <p class="product-brand">${esc(d.brand)}</p>
      <div class="spacer"></div>
      <span class="status ${a.isFull?'taken':''}">${a.isFull?'Já escolhemos todas! 💙':a.available+' de '+d.quantity+' disponíveis'}</span>
      <button class="btn btn-primary w-full" data-choose="${d.id}" data-type="diaper" ${a.isFull?'disabled':''}>${a.isFull?'Esgotado':'Quero presentear'}</button>
    </div></article>`;
}
function giftCard(g){
  const t=giftTaken(g);
  return `<article class="product-card reveal ${t?'taken':''}">
    <div class="product-media"><img src="${esc(g.imageUrl)}" alt=""></div>
    <div class="product-body">
      <span class="badge soft">${esc(g.category)}</span>
      <h3>${esc(g.name)}</h3>
      <p class="product-desc">${esc(g.description)}</p>
      ${g.price?`<p class="product-price">${esc(g.price)} <span class="price-note">(aprox.)</span></p>`:''}
      <div class="spacer"></div>
      <span class="status ${t?'taken':''}">${t?'Já escolhido 💙':'Disponível'}</span>
      <button class="btn btn-primary w-full" data-choose="${g.id}" data-type="gift" ${t?'disabled':''}>${t?'Já escolhido':'Quero presentear'}</button>
    </div></article>`;
}

/* ===================== REVEAL ===================== */
const io='IntersectionObserver' in window ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}) : null;
function observeReveal(){ $$('.reveal:not(.in)').forEach(el=>{ io?io.observe(el):el.classList.add('in'); }); }

/* ===================== BOOT ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  renderHeader(); renderFooter(); renderModal();
  document.addEventListener('click',e=>{
    const ch=e.target.closest('[data-choose]'); if(ch&&!ch.disabled){ e.preventDefault(); openModal(ch.dataset.choose, ch.dataset.type); }
  });
  $$('[data-external]').forEach(a=>{
    const key=a.dataset.external, url=EXTERNAL_LINKS[key];
    if(url){ a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; }
    else a.addEventListener('click',ev=>{ ev.preventDefault(); toast('Esse link ainda vai ser divulgado 💙'); });
  });
  if(typeof window.initPage==='function') window.initPage();
  observeReveal();
});
