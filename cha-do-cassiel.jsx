import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Gift, Calendar, Clock, MapPin, Heart, ArrowRight, Check,
  Loader2, Lock, Baby, Shirt, Milk, Bath, Home as HomeIcon, Sparkles,
  ExternalLink,
} from 'lucide-react';

/* =========================================================================
   CONFIGURAÇÃO — links externos
   Edite apenas os valores abaixo quando tiver os links reais da loja.
   Nada mais no site precisa mudar quando estes links forem preenchidos.
   ========================================================================= */
const EXTERNAL_LINKS = {
  listaCompleta: '', // link da lista completa de presentes (loja Sonho de Criança)
};

/* =========================================================================
   DADOS — Fraldas
   "quantity" = quantas unidades desse tamanho a família gostaria de receber.
   Edite livremente nome, tamanho, quantidade e externalUrl.
   ========================================================================= */
const DIAPERS = [
  {
    id: 'fralda-p',
    name: 'Fralda descartável',
    size: 'P',
    brand: 'Qualquer marca',
    quantity: 10,
    icon: 'diaper',
    imageUrl: '', // cole aqui o link de uma foto real para substituir o ícone
    externalUrl: '',
  },
  {
    id: 'fralda-m',
    name: 'Fralda descartável',
    size: 'M',
    brand: 'Qualquer marca',
    quantity: 10,
    icon: 'diaper',
    imageUrl: '',
    externalUrl: '',
  },
];

/* =========================================================================
   DADOS — Presentes (fictícios/mockados, só para demonstrar o funcionamento)
   Substitua nome, descrição, preço, ícone e externalUrl pelos itens reais.
   "price": null quando o valor ainda não estiver definido.
   "icon": uma das chaves do objeto ICONS, mais abaixo.
   ========================================================================= */
const GIFT_CATEGORIES = ['Higiene', 'Roupinhas', 'Alimentação', 'Cuidados', 'Quarto', 'Outros'];

const GIFTS = [
  { id: 'g1', name: 'Kit de higiene completo', category: 'Higiene', description: 'Necessaire com itens essenciais para o banho e os cuidados diários.', price: null, icon: 'bath', imageUrl: '', externalUrl: '' },
  { id: 'g2', name: 'Kit escova e pente', category: 'Higiene', description: 'Escova e pente macios para os primeiros cuidados com o Cassiel.', price: 'R$ 45', icon: 'bath', imageUrl: '', externalUrl: '' },
  { id: 'g3', name: 'Bodies manga longa (RN)', category: 'Roupinhas', description: 'Conjunto de bodies confortáveis para os primeiros meses.', price: 'R$ 90', icon: 'shirt', imageUrl: '', externalUrl: '' },
  { id: 'g4', name: 'Macacão de frio', category: 'Roupinhas', description: 'Macacão felpudo para os dias mais frios.', price: null, icon: 'shirt', imageUrl: '', externalUrl: '' },
  { id: 'g5', name: 'Kit mamadeiras', category: 'Alimentação', description: 'Conjunto de mamadeiras anticólica em diferentes tamanhos.', price: 'R$ 120', icon: 'milk', imageUrl: '', externalUrl: '' },
  { id: 'g6', name: 'Termômetro de banho e água', category: 'Alimentação', description: 'Ajuda a preparar a água e o leite na temperatura ideal.', price: null, icon: 'milk', imageUrl: '', externalUrl: '' },
  { id: 'g7', name: 'Pomada para assaduras', category: 'Cuidados', description: 'Item essencial para a rotina de trocas do dia a dia.', price: 'R$ 35', icon: 'heart', imageUrl: '', externalUrl: '' },
  { id: 'g8', name: 'Kit primeiros cuidados', category: 'Cuidados', description: 'Termômetro, aspirador nasal e tesourinha de segurança.', price: null, icon: 'heart', imageUrl: '', externalUrl: '' },
  { id: 'g9', name: 'Manta para berço', category: 'Quarto', description: 'Manta macia em tecido hipoalergênico para as noites do Cassiel.', price: 'R$ 110', icon: 'home', imageUrl: '', externalUrl: '' },
  { id: 'g10', name: 'Luminária noturna', category: 'Quarto', description: 'Luz suave para acompanhar as trocas e mamadas da madrugada.', price: null, icon: 'home', imageUrl: '', externalUrl: '' },
  { id: 'g11', name: 'Álbum do bebê', category: 'Outros', description: 'Para guardar as primeiras memórias e marcos do Cassiel.', price: 'R$ 75', icon: 'sparkles', imageUrl: '', externalUrl: '' },
  { id: 'g12', name: 'Vale-presente Sonho de Criança', category: 'Outros', description: 'Para a Maria escolher depois o que ainda estiver faltando.', price: null, icon: 'gift', imageUrl: '', externalUrl: '' },
];

const ICONS = {
  diaper: Baby, bath: Bath, shirt: Shirt, milk: Milk,
  heart: Heart, home: HomeIcon, sparkles: Sparkles, gift: Gift,
};

/* =========================================================================
   SERVIÇO DE RESERVAS
   Hoje: guardado via window.storage (persistente e compartilhado entre
   todos os visitantes, para evitar que dois convidados escolham o mesmo
   item). No futuro, estas três funções podem ser trocadas por chamadas a
   um banco real (Supabase, Firebase etc.) sem mudar mais nada no site,
   pois todo o resto do app só conhece loadReservations/saveReservations.
   ========================================================================= */
const STORAGE_KEY = 'cassiel-reservations';

async function loadReservations() {
  try {
    const res = await window.storage.get(STORAGE_KEY, true);
    return res ? JSON.parse(res.value) : {};
  } catch (e) {
    return {};
  }
}

async function saveReservations(data) {
  try {
    const res = await window.storage.set(STORAGE_KEY, JSON.stringify(data), true);
    return !!res;
  } catch (e) {
    console.error('Erro ao salvar reserva:', e);
    return false;
  }
}

// Fraldas: várias pessoas podem escolher o mesmo tamanho, até acabar a quantidade.
function getDiaperAvailability(diaper, reservations) {
  const claims = (reservations[diaper.id] && reservations[diaper.id].claims) || [];
  const chosen = claims.length;
  const available = Math.max(diaper.quantity - chosen, 0);
  return { chosen, available, isFull: available <= 0, claims };
}

// Presentes: item único. "reservado" (convidado confirmou) já bloqueia os
// demais; "escolhido" é quando a Maria confirma a compra depois, no painel.
function getGiftStatus(gift, reservations) {
  const r = reservations[gift.id];
  if (r && (r.status === 'reservado' || r.status === 'escolhido')) {
    return { taken: true, guestName: r.guestName, timestamp: r.timestamp, status: r.status };
  }
  return { taken: false, status: null };
}

/* =========================================================================
   HOOKS
   ========================================================================= */
function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById('cassiel-fonts')) return;
    const link = document.createElement('link');
    link.id = 'cassiel-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Alex+Brush&family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [locked]);
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s ease ' + delay + 's, transform 0.8s ease ' + delay + 's',
      }}
    >
      {children}
    </div>
  );
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =========================================================================
   ESTILOS
   Design system próprio (tokens em CSS custom properties) — não depende de
   nenhum build/CDN externo de Tailwind, então funciona de forma previsível
   dentro do preview. A paleta usa exatamente as cores do convite, com dois
   tons auxiliares (--brown-ink e --blue-ink) só para o texto corrido ter
   contraste confortável de leitura sobre o fundo creme.
   ========================================================================= */
const GLOBAL_CSS = `
:root{
  --cream:#F8F4EC;
  --cream-deep:#F1E7D3;
  --blue-baby:#AFC5D8;
  --blue-gray:#91AFC6;
  --blue-deep:#6F8FA8;
  --blue-ink:#4F6B82;
  --beige:#D8C5AE;
  --brown-soft:#806E5D;
  --brown-ink:#4A3B30;
  --bear-fur:#C7AD8F;
  --bear-fur-dark:#AD8E6E;
  --bear-snout:#F4EADB;
  --white:#FFFFFF;
  --shadow-soft:0 10px 30px rgba(111,143,168,0.16);
  --shadow-strong:0 26px 55px rgba(74,59,48,0.22);
}
.cassiel-app *{box-sizing:border-box;}
.cassiel-app{
  font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  background:var(--cream);
  color:var(--brown-ink);
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  line-height:1.5;
}
.cassiel-app img,.cassiel-app svg{max-width:100%;display:block;}
.cassiel-app h1,.cassiel-app h2,.cassiel-app h3{
  font-family:'Playfair Display',Georgia,serif;
  color:var(--blue-ink);
  margin:0;
  font-weight:600;
}
.cassiel-app p{margin:0;}
.cassiel-app button{font-family:inherit;}
.script{font-family:'Alex Brush',cursive;color:var(--blue-deep);font-weight:400;}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

/* ---------- utilidades de layout ---------- */
.container{max-width:1180px;margin:0 auto;padding:0 20px;}
.section{position:relative;padding:72px 20px;max-width:1180px;margin:0 auto;}
@media (min-width:768px){.section{padding:104px 40px;}}
section[id]{scroll-margin-top:84px;}
.w-full{width:100%;}

/* ---------- cabeçalho ---------- */
.site-header{position:sticky;top:0;z-index:60;background:rgba(248,244,236,0.92);backdrop-filter:blur(10px);border-bottom:1px solid rgba(216,197,174,0.6);}
.header-inner{max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:14px 20px;}
.brand{display:flex;align-items:center;gap:8px;background:none;border:none;cursor:pointer;font-size:22px;color:var(--blue-deep);padding:4px;}
.brand svg{color:var(--blue-gray);}
.desktop-nav{display:none;gap:36px;}
.hamburger{display:flex;background:none;border:none;color:var(--blue-ink);cursor:pointer;padding:8px;align-items:center;justify-content:center;}
@media (min-width:900px){
  .desktop-nav{display:flex;}
  .hamburger{display:none;}
}
.nav-link{background:none;border:none;font-size:15px;letter-spacing:0.2px;color:var(--brown-ink);cursor:pointer;padding:8px 2px;position:relative;}
.nav-link.active{color:var(--blue-ink);font-weight:600;}
.nav-link.active::after{content:'';position:absolute;left:0;right:0;bottom:-3px;height:2px;background:var(--blue-deep);border-radius:2px;}
.mobile-nav{display:flex;flex-direction:column;background:var(--cream);border-top:1px solid rgba(216,197,174,0.6);padding:6px 20px 22px;}
.mobile-nav-link{background:none;border:none;text-align:left;padding:15px 4px;font-size:17px;color:var(--brown-ink);border-bottom:1px solid rgba(216,197,174,0.45);cursor:pointer;}
.mobile-nav-link.active{color:var(--blue-ink);font-weight:600;}

/* ---------- botões ---------- */
.btn-base{font-weight:600;font-size:15px;padding:15px 26px;border-radius:999px;border:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;transition:transform 0.2s ease,box-shadow 0.2s ease,opacity 0.2s ease,background 0.2s ease;white-space:nowrap;}
.btn-primary{background:var(--blue-deep);color:var(--white);box-shadow:var(--shadow-soft);}
.btn-primary:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 16px 30px rgba(111,143,168,0.34);}
.btn-secondary{background:transparent;color:var(--blue-ink);border:1.5px solid var(--blue-deep);}
.btn-secondary:hover:not(:disabled){background:rgba(175,197,216,0.18);}
.btn-base:disabled{opacity:0.55;cursor:not-allowed;transform:none;}
.btn-base:focus-visible{outline:3px solid var(--blue-gray);outline-offset:2px;}
.spin{animation:spin 0.9s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}

/* ---------- animações ambiente ---------- */
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-16px);}}
@keyframes drift{from{transform:translateX(-16px);}to{transform:translateX(16px);}}
@keyframes twinkle{0%,100%{opacity:0.25;}50%{opacity:0.95;}}
@keyframes shimmer{0%{background-position:200% 0;}100%{background-position:-200% 0;}}
.cloud-decor{position:absolute;pointer-events:none;animation:drift 11s ease-in-out infinite alternate;}
.star-decor{position:absolute;pointer-events:none;animation:twinkle 3.2s ease-in-out infinite;}

@media (prefers-reduced-motion:reduce){
  .cassiel-app *{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;}
}

/* ---------- hero ---------- */
.hero{position:relative;min-height:88vh;display:flex;align-items:center;padding:120px 20px 64px;overflow:hidden;}
.hero-inner{display:flex;flex-direction:column-reverse;gap:36px;align-items:center;width:100%;max-width:1180px;margin:0 auto;position:relative;z-index:2;}
@media (min-width:900px){
  .hero-inner{flex-direction:row;justify-content:space-between;gap:24px;}
  .hero-text{flex:1;text-align:left;}
  .hero-illustration{flex:0 0 auto;width:38%;max-width:360px;}
}
.hero-text{text-align:center;}
.eyebrow{font-size:13px;letter-spacing:2.5px;text-transform:uppercase;color:var(--blue-deep);font-weight:600;margin:0 0 10px;}
.hero-title{font-size:40px;line-height:1.12;}
.hero-title .script{display:block;font-size:1.5em;margin-top:2px;}
@media (min-width:560px){.hero-title{font-size:52px;}}
@media (min-width:900px){.hero-title{font-size:58px;}}
.hero-subtitle{font-size:17px;color:var(--brown-soft);max-width:420px;margin:18px auto;}
@media (min-width:900px){.hero-subtitle{margin:18px 0;}}
.hero-info-row{display:flex;gap:14px;align-items:center;justify-content:center;font-size:15.5px;color:var(--blue-ink);flex-wrap:wrap;font-weight:500;}
@media (min-width:900px){.hero-info-row{justify-content:flex-start;}}
.hero-info-row .sep{color:var(--beige);}
.hero-info-row span.item{display:inline-flex;align-items:center;gap:6px;}
.hero-address{display:flex;gap:8px;align-items:flex-start;justify-content:center;font-size:15px;margin-top:10px;color:var(--brown-ink);}
@media (min-width:900px){.hero-address{justify-content:flex-start;}}
.hero-address svg{flex-shrink:0;margin-top:2px;color:var(--blue-deep);}
.hero-actions{display:flex;flex-direction:column;gap:12px;margin-top:30px;}
@media (min-width:520px){.hero-actions{flex-direction:row;justify-content:center;}}
@media (min-width:900px){.hero-actions{justify-content:flex-start;}}
.hero-illustration{width:72%;max-width:300px;margin:0 auto;animation:float 6.5s ease-in-out infinite;position:relative;z-index:2;}
.hero-illustration svg{filter:drop-shadow(0 22px 26px rgba(111,143,168,0.28));}
.hero-bg{position:absolute;inset:0;z-index:1;}

/* ---------- divisor de coração ---------- */
.heart-divider{display:flex;align-items:center;gap:10px;justify-content:center;margin:14px 0;}
.heart-divider .line{width:38px;height:1px;background:var(--beige);}

/* ---------- títulos de seção ---------- */
.section-heading{text-align:center;margin-bottom:44px;position:relative;z-index:2;}
.section-title{font-size:30px;}
@media (min-width:768px){.section-title{font-size:37px;}}
.section-subtitle{color:var(--brown-soft);font-size:16px;max-width:560px;margin:10px auto 0;}

/* ---------- sugestão de presente ---------- */
.suggestion-section{padding:24px 20px 8px;position:relative;}
.suggestion-card{background:var(--white);border-radius:26px;padding:38px 26px;text-align:center;max-width:520px;margin:0 auto;box-shadow:var(--shadow-soft);border:1px solid rgba(216,197,174,0.5);position:relative;z-index:2;}
.suggestion-card>svg{color:var(--blue-deep);margin:0 auto 6px;}
.suggestion-main{font-size:23px;margin:6px 0 2px;color:var(--blue-ink);font-family:'Playfair Display',serif;}
.suggestion-note{font-size:13.5px;color:var(--brown-soft);margin-bottom:10px;font-style:italic;}
.suggestion-list-text{font-size:14.5px;color:var(--brown-soft);margin:16px 0;line-height:1.7;}
.suggestion-list-text strong{color:var(--brown-ink);}
.suggestion-actions{display:flex;flex-direction:column;gap:10px;margin-top:20px;}
@media (min-width:480px){.suggestion-actions{flex-direction:row;justify-content:center;}}

/* ---------- cards de produto ---------- */
.product-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:8px;position:relative;z-index:2;}
@media (min-width:600px){.product-grid.diaper-grid{grid-template-columns:repeat(2,1fr);max-width:720px;margin-left:auto;margin-right:auto;}}
@media (min-width:600px){.product-grid.gift-grid{grid-template-columns:repeat(2,1fr);}}
@media (min-width:1000px){.product-grid.gift-grid{grid-template-columns:repeat(3,1fr);}}
.product-card{background:var(--white);border:1px solid rgba(216,197,174,0.55);border-radius:22px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 22px rgba(128,110,93,0.09);transition:transform 0.25s ease,box-shadow 0.25s ease;height:100%;}
.product-card:hover{transform:translateY(-5px);box-shadow:0 20px 36px rgba(128,110,93,0.16);}
.product-media{background:linear-gradient(160deg,var(--blue-baby) 0%,var(--cream-deep) 100%);display:flex;align-items:center;justify-content:center;padding:34px;color:var(--white);height:180px;overflow:hidden;}
.product-media img{width:100%;height:100%;object-fit:cover;border-radius:0;}
.product-body{padding:20px 20px 22px;display:flex;flex-direction:column;gap:10px;flex:1;}
.product-body h3{font-size:19px;font-weight:600;}
.product-brand,.product-desc{font-size:14px;color:var(--brown-soft);}
.product-price{font-size:15px;font-weight:600;color:var(--blue-ink);}
.price-note{font-weight:400;font-size:12px;color:var(--brown-soft);}
.size-badge,.category-tag{align-self:flex-start;background:var(--beige);color:var(--brown-ink);font-size:12px;padding:4px 12px;border-radius:999px;font-weight:600;letter-spacing:0.3px;}
.product-spacer{flex:1;}

/* ---------- selos de status ---------- */
.status-pill{display:inline-flex;align-items:center;gap:6px;font-size:13px;padding:7px 13px;border-radius:999px;font-weight:600;width:fit-content;}
.status-available{background:rgba(175,197,216,0.28);color:var(--blue-ink);}
.status-taken,.status-full{background:rgba(216,197,174,0.45);color:var(--brown-ink);}
.skeleton-line{height:26px;width:65%;background:linear-gradient(90deg,var(--cream-deep),var(--beige),var(--cream-deep));background-size:220% 100%;animation:shimmer 1.5s infinite;border-radius:999px;}

/* ---------- filtro de categorias ---------- */
.category-pills{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 12px;margin-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none;}
.category-pills::-webkit-scrollbar{display:none;}
.pill{flex-shrink:0;background:var(--white);border:1px solid var(--beige);padding:9px 19px;border-radius:999px;font-size:14px;color:var(--brown-ink);cursor:pointer;transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease;}
.pill.active{background:var(--blue-deep);color:var(--white);border-color:var(--blue-deep);}

.fine-note{text-align:center;color:var(--brown-soft);font-size:13.5px;margin-top:26px;font-style:italic;position:relative;z-index:2;}
.see-all-wrap{display:flex;justify-content:center;margin-top:40px;}

/* ---------- modal ---------- */
.modal-overlay{position:fixed;inset:0;background:rgba(74,59,48,0.5);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:200;padding:16px;}
.modal-card{background:var(--cream);border-radius:26px;max-width:460px;width:100%;padding:34px 24px;position:relative;box-shadow:var(--shadow-strong);max-height:88vh;overflow-y:auto;}
@media (min-width:640px){.modal-card{padding:42px;}}
.modal-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.65);border:none;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--brown-ink);}
.modal-close:hover{background:var(--white);}
.modal-heart-title{font-size:27px;margin-bottom:6px;}
.modal-product-name{font-weight:600;color:var(--blue-deep);margin-bottom:14px;font-size:15px;}
.modal-text{font-size:14.5px;color:var(--brown-soft);line-height:1.65;margin-bottom:22px;}
.modal-form label{display:block;font-size:14px;font-weight:600;margin-bottom:7px;color:var(--brown-ink);}
.modal-form input{width:100%;padding:15px 16px;border:1.5px solid var(--beige);border-radius:13px;font-size:16px;font-family:'Poppins',sans-serif;margin-bottom:6px;background:var(--white);color:var(--brown-ink);}
.modal-form input:focus{outline:none;border-color:var(--blue-deep);}
.form-error{color:#A6483B;font-size:13px;margin-bottom:10px;}
.modal-actions{display:flex;flex-direction:column-reverse;gap:10px;margin-top:18px;}
@media (min-width:480px){.modal-actions{flex-direction:row;justify-content:flex-end;}.modal-actions .btn-base{flex:none;}}
.modal-actions .btn-base{flex:1;}

/* ---------- toast ---------- */
.toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);background:var(--blue-ink);color:var(--white);padding:14px 22px;border-radius:999px;display:flex;align-items:center;gap:8px;font-size:14px;box-shadow:0 12px 30px rgba(0,0,0,0.22);z-index:300;max-width:92vw;text-align:center;}
.toast-error{background:#8C4034;}
.toast-info{background:var(--brown-soft);}

/* ---------- sobre / como será ---------- */
.sobre-text{text-align:center;max-width:640px;margin:0 auto 44px;color:var(--brown-soft);font-size:16px;line-height:1.75;position:relative;z-index:2;}
.info-cards{display:grid;grid-template-columns:1fr;gap:16px;max-width:760px;margin:0 auto 60px;position:relative;z-index:2;}
@media (min-width:640px){.info-cards{grid-template-columns:repeat(3,1fr);}}
.info-card{background:var(--white);border-radius:18px;padding:20px;display:flex;gap:14px;align-items:center;border:1px solid rgba(216,197,174,0.5);}
.info-card svg{color:var(--blue-deep);flex-shrink:0;}
.info-card .label{display:block;font-size:11.5px;color:var(--brown-soft);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;}
.info-card .value{font-size:15px;color:var(--blue-ink);font-weight:600;}
.como-sera{text-align:center;max-width:640px;margin:0 auto;position:relative;z-index:2;}
.como-sera h3{font-size:25px;margin-bottom:12px;}
.como-sera>p{color:var(--brown-soft);font-size:15.5px;}
.como-sera-list{list-style:none;padding:0;margin:26px auto 0;display:flex;flex-direction:column;gap:13px;text-align:left;max-width:440px;}
.como-sera-list li{display:flex;gap:13px;align-items:flex-start;font-size:15.5px;background:var(--white);padding:15px 17px;border-radius:15px;border:1px solid rgba(216,197,174,0.4);color:var(--brown-ink);}
.como-sera-list .emoji{font-size:20px;line-height:1;}

/* ---------- bingo ---------- */
.bingo-section{display:flex;flex-direction:column;gap:30px;align-items:center;margin-top:76px;background:var(--cream-deep);border-radius:30px;padding:40px 22px;position:relative;overflow:hidden;z-index:2;}
@media (min-width:768px){.bingo-section{flex-direction:row;text-align:left;padding:52px;}}
.bingo-art{width:190px;flex-shrink:0;}
.bingo-text{text-align:center;position:relative;z-index:2;}
@media (min-width:768px){.bingo-text{text-align:left;}}
.bingo-text h3{font-size:27px;margin-bottom:10px;}
.bingo-text p{color:var(--brown-soft);font-size:15.5px;max-width:420px;}

/* ---------- rodapé ---------- */
.site-footer{text-align:center;padding:64px 20px 40px;background:var(--cream-deep);position:relative;overflow:hidden;}
.footer-inner{position:relative;z-index:2;}
.footer-signature{font-size:25px;margin:16px 0 8px;color:var(--blue-deep);}
.footer-meta{font-size:14px;color:var(--brown-soft);letter-spacing:0.3px;}
.admin-link{margin-top:26px;background:none;border:none;font-size:12px;color:var(--brown-soft);opacity:0.55;cursor:pointer;display:inline-flex;gap:5px;align-items:center;padding:8px;}
.admin-link:hover{opacity:1;}

/* ---------- painel administrativo ---------- */
.admin-card{max-width:640px;}
.admin-card h3{display:flex;align-items:center;gap:8px;font-size:21px;margin-bottom:10px;}
.admin-note{font-size:13px;color:var(--brown-soft);background:rgba(216,197,174,0.3);padding:12px 14px;border-radius:12px;margin-bottom:18px;line-height:1.6;}
.admin-table-wrap{overflow-x:auto;}
.admin-table{width:100%;border-collapse:collapse;font-size:13.5px;}
.admin-table th{text-align:left;padding:9px 10px;border-bottom:2px solid var(--beige);color:var(--blue-ink);font-size:12px;text-transform:uppercase;letter-spacing:0.5px;}
.admin-table td{text-align:left;padding:10px;border-bottom:1px solid rgba(216,197,174,0.6);vertical-align:top;color:var(--brown-ink);}
.claims-list{margin:6px 0 0;padding-left:16px;font-size:12px;color:var(--brown-soft);}
.mini-btn{background:var(--blue-deep);color:var(--white);border:none;border-radius:999px;padding:6px 12px;font-size:11.5px;cursor:pointer;margin-top:6px;font-weight:600;}
.mini-btn:hover{background:var(--blue-ink);}
`;

/* =========================================================================
   ILUSTRAÇÕES — SVGs próprios, inspirados no convite (não são a imagem
   original: o balão, o ursinho, as nuvens e as estrelas foram redesenhados
   como uma identidade digital própria, conforme pedido no briefing).
   ========================================================================= */
function CloudShape({ style, opacity = 1, tone = 'var(--beige)' }) {
  return (
    <svg viewBox="0 0 200 100" style={style} aria-hidden="true" focusable="false">
      <g opacity={opacity} fill={tone}>
        <ellipse cx="60" cy="62" rx="48" ry="32" />
        <ellipse cx="108" cy="46" rx="38" ry="29" />
        <ellipse cx="148" cy="64" rx="36" ry="26" />
        <ellipse cx="92" cy="72" rx="60" ry="24" />
      </g>
    </svg>
  );
}

function StarSpark({ style, size = 14, tone = 'var(--blue-deep)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true" focusable="false">
      <path
        d="M12 0 C12.6 8.2 15 10.8 24 12 C15 13.2 12.6 15.8 12 24 C11.4 15.8 9 13.2 0 12 C9 10.8 11.4 8.2 12 0 Z"
        fill={tone}
      />
    </svg>
  );
}

function MiniHeart({ cx, cy, size = 10, tone = 'var(--blue-deep)' }) {
  const s = size / 24;
  return (
    <path
      d="M12 21s-7.5-4.6-10-9.3C.5 8.7 2.5 5 6.3 5c2 0 3.6 1.1 4.7 2.8C12.1 6.1 13.7 5 15.7 5c3.8 0 5.8 3.7 4.3 6.7C19.5 16.4 12 21 12 21z"
      transform={'translate(' + (cx - 12 * s) + ',' + (cy - 12 * s) + ') scale(' + s + ')'}
      fill={tone}
    />
  );
}

// Mesma técnica do MiniHeart (path + transform), para poder desenhar uma
// estrelinha DENTRO de outro <svg> (ex.: cartela de bingo) sem aninhar
// elementos <svg>, que não aceitam posicionamento via CSS "position".
function MiniStar({ cx, cy, size = 10, tone = 'var(--blue-gray)' }) {
  const s = size / 24;
  return (
    <path
      d="M12 0 C12.6 8.2 15 10.8 24 12 C15 13.2 12.6 15.8 12 24 C11.4 15.8 9 13.2 0 12 C9 10.8 11.4 8.2 12 0 Z"
      transform={'translate(' + (cx - 12 * s) + ',' + (cy - 12 * s) + ') scale(' + s + ')'}
      fill={tone}
    />
  );
}

function HeartDivider({ tone }) {
  return (
    <div className="heart-divider" aria-hidden="true">
      <span className="line" />
      <Heart size={12} fill={tone || 'var(--blue-deep)'} color={tone || 'var(--blue-deep)'} />
      <span className="line" />
    </div>
  );
}

// Contorno do balão, reaproveitado tanto na ilustração completa (hero)
// quanto na silhueta simplificada usada como elemento de fundo.
const BALLOON_DOME_PATH =
  'M160,16 C214,16 264,92 264,172 C264,210 238,234 204,248 L116,248 C82,234 56,210 56,172 C56,92 106,16 160,16 Z';

function BalloonAndBear({ className }) {
  const stripeXs = [58, 84.5, 111, 137.5, 164, 190.5, 217, 240];
  return (
    <svg viewBox="0 0 320 430" className={className} role="img" aria-label="Ilustração de um balão de ar quente com um ursinho dentro do cesto">
      <defs>
        <clipPath id="balloonClip">
          <path d={BALLOON_DOME_PATH} />
        </clipPath>
        <linearGradient id="basketShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8E7660" />
          <stop offset="100%" stopColor="#6E5A48" />
        </linearGradient>
      </defs>

      {/* cordas */}
      <g stroke="var(--brown-soft)" strokeWidth="2" opacity="0.7">
        <line x1="112" y1="244" x2="126" y2="292" />
        <line x1="208" y1="244" x2="194" y2="292" />
        <line x1="142" y1="248" x2="140" y2="292" />
        <line x1="178" y1="248" x2="180" y2="292" />
      </g>

      {/* corpo do ursinho (parte fica escondida atrás do cesto) */}
      <ellipse cx="160" cy="300" rx="36" ry="42" fill="var(--bear-fur)" />
      <ellipse cx="160" cy="296" rx="21" ry="26" fill="var(--bear-snout)" />

      {/* cesto */}
      <rect x="120" y="292" width="80" height="62" rx="10" fill="url(#basketShade)" />
      <g stroke="#5C4A3A" strokeWidth="1.4" opacity="0.4">
        <line x1="124" y1="306" x2="196" y2="306" />
        <line x1="124" y1="320" x2="196" y2="320" />
        <line x1="124" y1="334" x2="196" y2="334" />
      </g>
      {/* laço no cesto */}
      <g>
        <path d="M160,290 L144,278 L144,300 Z" fill="var(--blue-deep)" />
        <path d="M160,290 L176,278 L176,300 Z" fill="var(--blue-deep)" />
        <circle cx="160" cy="290" r="6" fill="var(--blue-ink)" />
      </g>

      {/* balão: listras dentro do contorno */}
      <g clipPath="url(#balloonClip)">
        <rect x="40" y="6" width="240" height="250" fill="var(--white)" />
        {stripeXs.map((x, i) => (
          i % 2 === 0 ? null : (
            <rect key={x} x={x} y="6" width="26.5" height="250" fill="var(--blue-baby)" />
          )
        ))}
      </g>
      <path d={BALLOON_DOME_PATH} fill="none" stroke="var(--beige)" strokeWidth="2.5" opacity="0.8" />
      <ellipse cx="160" cy="15" rx="9" ry="5" fill="var(--beige)" />

      {/* orelhas */}
      <circle cx="139" cy="234" r="14" fill="var(--bear-fur-dark)" />
      <circle cx="181" cy="234" r="14" fill="var(--bear-fur-dark)" />
      <circle cx="139" cy="235" r="6.5" fill="var(--bear-snout)" />
      <circle cx="181" cy="235" r="6.5" fill="var(--bear-snout)" />

      {/* braço acenando */}
      <path d="M138,282 C118,272 100,254 96,236" fill="none" stroke="var(--bear-fur-dark)" strokeWidth="19" strokeLinecap="round" />
      <circle cx="95" cy="233" r="12" fill="var(--bear-fur)" />

      {/* cabeça */}
      <circle cx="160" cy="258" r="31" fill="var(--bear-fur)" />
      <ellipse cx="160" cy="265" rx="16" ry="12" fill="var(--bear-snout)" />
      <circle cx="151" cy="253" r="2.6" fill="var(--brown-ink)" />
      <circle cx="169" cy="253" r="2.6" fill="var(--brown-ink)" />
      <ellipse cx="160" cy="261" rx="3.2" ry="2.6" fill="var(--brown-ink)" />
      <path d="M154,270 C157,273 163,273 166,270" fill="none" stroke="var(--brown-ink)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MiniBalloon({ style, opacity = 0.14, tone = 'var(--blue-deep)' }) {
  return (
    <svg viewBox="0 0 320 260" style={style} aria-hidden="true" focusable="false">
      <path d={BALLOON_DOME_PATH} fill={tone} opacity={opacity} />
    </svg>
  );
}

function BingoCardArt() {
  const letters = ['B', 'I', 'N', 'G', 'O'];
  // marca alguns quadrados com pequenos ícones do tema para dar personalidade
  const marks = { '0-1': 'star', '1-3': 'heart', '2-0': 'heart', '2-4': 'star', '3-2': 'star', '4-1': 'heart' };
  return (
    <svg viewBox="0 0 260 300" className="bingo-svg" role="img" aria-label="Ilustração de uma cartela de bingo estilizada">
      <rect x="4" y="4" width="252" height="292" rx="18" fill="var(--cream)" stroke="var(--beige)" strokeWidth="2" />
      {letters.map((l, i) => (
        <text key={l} x={30 + i * 50} y="36" textAnchor="middle" className="bingo-letter">{l}</text>
      ))}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((__, col) => {
          const cx = 30 + col * 50;
          const cy = 66 + row * 44;
          const isFree = row === 2 && col === 2;
          const mark = marks[row + '-' + col];
          return (
            <g key={row + '-' + col}>
              <rect x={cx - 21} y={cy - 17} width="42" height="34" rx="7" fill={(row + col) % 2 === 0 ? 'rgba(175,197,216,0.22)' : 'transparent'} stroke="var(--beige)" strokeWidth="1" />
              {isFree ? (
                <MiniHeart cx={cx} cy={cy} size={14} tone="var(--blue-deep)" />
              ) : mark === 'star' ? (
                <MiniStar cx={cx} cy={cy} size={13} tone="var(--blue-gray)" />
              ) : mark === 'heart' ? (
                <MiniHeart cx={cx} cy={cy} size={10} tone="var(--beige)" />
              ) : (
                <circle cx={cx} cy={cy} r="3.4" fill="var(--blue-deep)" opacity="0.28" />
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}

/* =========================================================================
   ÁTOMOS DE INTERFACE
   ========================================================================= */
function Button({ variant = 'primary', children, className = '', ...props }) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button className={'btn-base ' + variantClass + ' ' + className} {...props}>
      {children}
    </button>
  );
}

function StatusPill({ children, tone = 'available' }) {
  return <span className={'status-pill status-' + tone}>{children}</span>;
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <HeartDivider />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

/* =========================================================================
   CABEÇALHO
   ========================================================================= */
const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'fraldas', label: 'Fraldas' },
  { id: 'presentes', label: 'Presentes' },
  { id: 'sobre', label: 'Sobre o chá' },
];

function Header({ active, onNav, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => onNav('inicio')} aria-label="Ir para o início">
          <Sparkles size={17} />
          <span className="script">Cassiel</span>
        </button>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={'nav-link' + (active === l.id ? ' active' : '')}
              onClick={() => onNav(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação principal (celular)">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={'mobile-nav-link' + (active === l.id ? ' active' : '')}
              onClick={() => { onNav(l.id); setMenuOpen(false); }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

/* =========================================================================
   HERO
   ========================================================================= */
function Hero({ onNav }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <CloudShape style={{ position: 'absolute', top: '8%', left: '-6%', width: '220px' }} opacity={0.55} />
        <CloudShape style={{ position: 'absolute', top: '20%', right: '-4%', width: '160px' }} opacity={0.4} />
        <CloudShape style={{ position: 'absolute', bottom: '6%', left: '4%', width: '140px' }} opacity={0.35} />
        <StarSpark style={{ position: 'absolute', top: '14%', left: '20%' }} size={16} />
        <StarSpark style={{ position: 'absolute', top: '30%', right: '14%', animationDelay: '0.6s' }} size={12} />
        <StarSpark style={{ position: 'absolute', bottom: '18%', left: '10%', animationDelay: '1.2s' }} size={10} />
      </div>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Você está convidado(a)</p>
          <h1 className="hero-title">
            Chá do <span className="script">Cassiel</span>
          </h1>
          <p className="hero-subtitle">Um dia especial para celebrar a chegada do nosso pequeno.</p>
          <div className="hero-info-row">
            <span className="item"><Calendar size={18} /> 20/09 • Domingo</span>
            <span className="sep">•</span>
            <span className="item"><Clock size={18} /> 15h30</span>
          </div>
          <p className="hero-address">
            <MapPin size={18} />
            Maria Bernardes da Silva, 124 - Lot São Rafael
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => onNav('presentes')}>
              Quero presentear o Cassiel <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" onClick={() => onNav('sobre')}>
              Ver informações do chá
            </Button>
          </div>
        </div>
        <div className="hero-illustration">
          <BalloonAndBear />
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SUGESTÃO DE PRESENTE
   ========================================================================= */
function SuggestionSection({ onNav }) {
  return (
    <section className="suggestion-section">
      <CloudShape style={{ position: 'absolute', top: '0', right: '2%', width: '120px' }} opacity={0.3} />
      <Reveal>
        <div className="suggestion-card">
          <Gift size={30} />
          <p className="eyebrow">Sugestão de presente</p>
          <p className="suggestion-main">Fralda P ou M <span className="script">e mimo</span></p>
          <p className="suggestion-note">*Qualquer fralda, menos a Huggies Azul.</p>
          <HeartDivider />
          <p className="suggestion-list-text">
            Lista de presentes virtual no link<br />
            Ou presencial na loja <strong>Sonho de Criança</strong>
          </p>
          <div className="suggestion-actions">
            <Button variant="secondary" onClick={() => onNav('fraldas')}>Ver fraldas</Button>
            <Button variant="primary" onClick={() => onNav('presentes')}>Ver presentes</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================================================================
   FRALDAS
   ========================================================================= */
function DiaperCard({ diaper, reservations, loading, onChoose }) {
  const Icon = ICONS[diaper.icon] || Baby;
  const avail = reservations ? getDiaperAvailability(diaper, reservations) : null;
  const isFull = !!(avail && avail.isFull);
  return (
    <div className="product-card">
      <div className="product-media">
        {diaper.imageUrl ? <img src={diaper.imageUrl} alt={diaper.name} /> : <Icon size={42} />}
      </div>
      <div className="product-body">
        <span className="size-badge">Tamanho {diaper.size}</span>
        <h3>{diaper.name}</h3>
        <p className="product-brand">{diaper.brand}</p>
        <div className="product-spacer" />
        {loading || !avail ? (
          <div className="skeleton-line" />
        ) : isFull ? (
          <StatusPill tone="full">Já escolhemos todas! 💙</StatusPill>
        ) : (
          <StatusPill tone="available">{avail.available} disponíveis</StatusPill>
        )}
        <Button
          variant="primary"
          disabled={loading || !avail || isFull}
          onClick={() => onChoose(diaper, 'diaper')}
          className="w-full"
        >
          {isFull ? 'Esgotado' : 'Quero presentear'}
        </Button>
      </div>
    </div>
  );
}

function FraldasSection({ reservations, loading, onChoose }) {
  return (
    <section id="fraldas" className="section">
      <SectionHeading title="Fraldas" subtitle="Ajude a montar o estoque do pequeno Cassiel." />
      <div className="product-grid diaper-grid">
        {DIAPERS.map((d) => (
          <Reveal key={d.id}>
            <DiaperCard diaper={d} reservations={reservations} loading={loading} onChoose={onChoose} />
          </Reveal>
        ))}
      </div>
      <p className="fine-note">*Qualquer fralda, menos a Huggies Azul.</p>
    </section>
  );
}

/* =========================================================================
   PRESENTES
   ========================================================================= */
function GiftCard({ gift, reservations, loading, onChoose }) {
  const Icon = ICONS[gift.icon] || Gift;
  const status = reservations ? getGiftStatus(gift, reservations) : null;
  const taken = !!(status && status.taken);
  return (
    <div className="product-card">
      <div className="product-media">
        {gift.imageUrl ? <img src={gift.imageUrl} alt={gift.name} /> : <Icon size={38} />}
      </div>
      <div className="product-body">
        <span className="category-tag">{gift.category}</span>
        <h3>{gift.name}</h3>
        <p className="product-desc">{gift.description}</p>
        {gift.price && (
          <p className="product-price">{gift.price} <span className="price-note">(valor aproximado)</span></p>
        )}
        <div className="product-spacer" />
        {loading || !status ? (
          <div className="skeleton-line" />
        ) : taken ? (
          <StatusPill tone="taken">Já escolhido 💙</StatusPill>
        ) : (
          <StatusPill tone="available">Disponível</StatusPill>
        )}
        <Button
          variant="primary"
          disabled={loading || !status || taken}
          onClick={() => onChoose(gift, 'gift')}
          className="w-full"
        >
          {taken ? 'Já escolhido' : 'Quero presentear'}
        </Button>
      </div>
    </div>
  );
}

function PresentesSection({ reservations, loading, onChoose, onMissingLink }) {
  const [activeCat, setActiveCat] = useState('Todos');
  const filtered = activeCat === 'Todos' ? GIFTS : GIFTS.filter((g) => g.category === activeCat);

  function handleSeeAll() {
    if (EXTERNAL_LINKS.listaCompleta) {
      window.open(EXTERNAL_LINKS.listaCompleta, '_blank', 'noopener,noreferrer');
    } else {
      onMissingLink();
    }
  }

  return (
    <section id="presentes" className="section">
      <SectionHeading title="Presentes" subtitle="Escolha um mimo para fazer parte da chegada do Cassiel." />
      <div className="category-pills" role="tablist" aria-label="Filtrar presentes por categoria">
        {['Todos', ...GIFT_CATEGORIES].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCat === cat}
            className={'pill' + (activeCat === cat ? ' active' : '')}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-grid gift-grid">
        {filtered.map((g) => (
          <Reveal key={g.id}>
            <GiftCard gift={g} reservations={reservations} loading={loading} onChoose={onChoose} />
          </Reveal>
        ))}
      </div>
      <div className="see-all-wrap">
        <Button variant="secondary" onClick={handleSeeAll}>
          Ver lista completa de presentes <ExternalLink size={16} />
        </Button>
      </div>
    </section>
  );
}

/* =========================================================================
   SOBRE O CHÁ + BINGO
   ========================================================================= */
const COMO_SERA_ITEMS = [
  { icon: '☕', text: 'Chá da tarde' },
  { icon: '🎁', text: 'Lembrancinha para os convidados' },
  { icon: '🎲', text: 'Rodadas de bingo' },
  { icon: '🎁', text: 'Presentes especiais para os vencedores dos bingos' },
  { icon: '🧸', text: 'Muito carinho para celebrar a chegada do Cassiel' },
];

function BingoSection() {
  return (
    <Reveal>
      <div className="bingo-section">
        <MiniBalloon style={{ position: 'absolute', top: '-40px', right: '-30px', width: '160px' }} opacity={0.1} />
        <div className="bingo-art"><BingoCardArt /></div>
        <div className="bingo-text">
          <h3>Vai ter bingo!</h3>
          <p>Além do chá da tarde, teremos algumas rodadas de bingo com presentes especiais para os vencedores.</p>
        </div>
      </div>
    </Reveal>
  );
}

function SobreSection() {
  return (
    <section id="sobre" className="section">
      <CloudShape style={{ position: 'absolute', top: '4%', left: '-5%', width: '150px' }} opacity={0.3} />
      <SectionHeading title="Um dia para celebrar a chegada do Cassiel" />
      <Reveal>
        <p className="sobre-text">
          Preparamos tudo com muito carinho para celebrar a chegada do nosso pequeno Cassiel ao lado das pessoas que fazem parte da nossa história.
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="info-cards">
          <div className="info-card">
            <Calendar size={26} />
            <div><span className="label">Data</span><span className="value">20/09, domingo</span></div>
          </div>
          <div className="info-card">
            <Clock size={26} />
            <div><span className="label">Horário</span><span className="value">15h30</span></div>
          </div>
          <div className="info-card">
            <MapPin size={26} />
            <div><span className="label">Local</span><span className="value">Maria Bernardes da Silva, 124 - Lot São Rafael</span></div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="como-sera">
          <h3>Como será?</h3>
          <p>Será um chá da tarde preparado com carinho para receber nossos convidados.</p>
          <ul className="como-sera-list">
            {COMO_SERA_ITEMS.map((it, i) => (
              <li key={i}><span className="emoji">{it.icon}</span>{it.text}</li>
            ))}
          </ul>
        </div>
      </Reveal>
      <BingoSection />
    </section>
  );
}

/* =========================================================================
   RODAPÉ
   ========================================================================= */
function Footer({ onAdminOpen }) {
  return (
    <footer className="site-footer">
      <MiniBalloon style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '220px' }} opacity={0.08} />
      <div className="footer-inner">
        <HeartDivider />
        <p className="footer-signature script">Com carinho,<br />Maria &amp; família</p>
        <p className="footer-meta">Chá do Cassiel • 20/09</p>
        <button className="admin-link" onClick={onAdminOpen}>
          <Lock size={12} /> Painel de reservas
        </button>
      </div>
    </footer>
  );
}

/* =========================================================================
   MODAL "QUERO PRESENTEAR"
   ========================================================================= */
function GiftModal({ product, type, onClose, onConfirm, submitting }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  useBodyScrollLock(true);

  useEffect(() => {
    const t = setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, digite seu nome para continuar.');
      return;
    }
    setError('');
    onConfirm(name.trim());
  }

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="gift-modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Fechar" disabled={submitting}>
          <X size={20} />
        </button>
        <h3 id="gift-modal-title" className="modal-heart-title">Que carinho! 💙</h3>
        <p className="modal-product-name">
          {product.name}{product.size ? ' — Tamanho ' + product.size : ''}
        </p>
        <p className="modal-text">
          Antes de você seguir para a loja, queremos registrar que esse presente foi escolhido por você.
          Assim conseguimos evitar que outra pessoa escolha o mesmo item.
        </p>
        <form onSubmit={handleSubmit} className="modal-form" noValidate>
          <label htmlFor="guest-name">Seu nome</label>
          <input
            id="guest-name"
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); if (error) setError(''); }}
            placeholder="Digite seu nome"
            aria-required="true"
            aria-invalid={!!error}
            disabled={submitting}
          />
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <Button type="button" variant="secondary" onClick={onClose} disabled={submitting}>
              Voltar
            </Button>
            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? (<><Loader2 className="spin" size={18} /> Enviando...</>) : 'Confirmar e continuar para a loja'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================================================================
   TOAST
   ========================================================================= */
function Toast({ message, tone = 'success', onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className={'toast' + (tone !== 'success' ? ' toast-' + tone : '')} role="status">
      {tone === 'success' ? <Check size={16} /> : null}
      {message}
    </div>
  );
}

/* =========================================================================
   PAINEL ADMINISTRATIVO (somente leitura + confirmar compra)
   Uso interno da família. Quando um banco de dados real for conectado,
   esta área deve ganhar autenticação de verdade.
   ========================================================================= */
function AdminModal({ reservations, onClose, onConfirmPurchase }) {
  useBodyScrollLock(true);
  const data = reservations || {};

  const diaperRows = DIAPERS.map((d) => {
    const av = getDiaperAvailability(d, data);
    return {
      key: d.id,
      name: d.name + ' ' + d.size,
      type: 'Fralda',
      info: av.chosen + '/' + d.quantity + ' escolhidas (' + av.available + ' disponíveis)',
      claims: av.claims,
    };
  });

  const giftRows = GIFTS.map((g) => {
    const s = getGiftStatus(g, data);
    return {
      key: g.id,
      giftId: g.id,
      name: g.name,
      type: g.category,
      info: s.taken ? (s.status === 'escolhido' ? 'Comprado' : 'Reservado') + ' por ' + s.guestName : 'Disponível',
      claims: s.taken ? [{ guestName: s.guestName, timestamp: s.timestamp }] : [],
      showConfirm: s.taken && s.status === 'reservado',
    };
  });

  const rows = [...diaperRows, ...giftRows];

  return (
    <div className="modal-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card admin-card" role="dialog" aria-modal="true" aria-label="Painel de reservas">
        <button className="modal-close" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        <h3><Lock size={18} /> Painel de reservas</h3>
        <p className="admin-note">
          Uso interno da família — os convidados nunca veem esta tela nem os nomes aqui listados.
          Ao conectar um banco de dados de verdade (Supabase, Firebase etc.), proteja esta área com login.
        </p>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>Item</th><th>Categoria</th><th>Situação</th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key}>
                  <td>{r.name}</td>
                  <td>{r.type}</td>
                  <td>
                    {r.info}
                    {r.claims.length > 0 && (
                      <ul className="claims-list">
                        {r.claims.map((c, j) => (
                          <li key={j}>{c.guestName} — {new Date(c.timestamp).toLocaleString('pt-BR')}</li>
                        ))}
                      </ul>
                    )}
                    {r.showConfirm && (
                      <button className="mini-btn" onClick={() => onConfirmPurchase(r.giftId)}>
                        Marcar como comprado
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   APP — componente raiz
   ========================================================================= */
export default function App() {
  useGoogleFonts();
  const [active, setActive] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservations, setReservations] = useState(null); // null = carregando
  const [modal, setModal] = useState(null); // { product, type }
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    loadReservations().then((data) => { if (mounted) setReservations(data); });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const ids = ['inicio', 'fraldas', 'presentes', 'sobre'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleNav(id) {
    scrollToSection(id);
    setActive(id);
  }

  function openFlow(product, type) {
    setModal({ product, type });
  }

  function closeFlow() {
    if (!submitting) setModal(null);
  }

  async function confirmFlow(guestName) {
    if (!modal) return;
    setSubmitting(true);
    const current = reservations || {};
    const updated = { ...current };
    const { product, type } = modal;

    if (type === 'diaper') {
      const claims = (updated[product.id] && updated[product.id].claims) || [];
      updated[product.id] = { claims: [...claims, { guestName, timestamp: Date.now() }] };
    } else {
      updated[product.id] = { status: 'reservado', guestName, timestamp: Date.now() };
    }

    const ok = await saveReservations(updated);
    setSubmitting(false);

    if (ok) {
      setReservations(updated);
      setModal(null);
      setToast({ message: 'Obrigado, ' + guestName + '! Reserva registrada com carinho 💙', tone: 'success' });
      if (product.externalUrl) {
        window.open(product.externalUrl, '_blank', 'noopener,noreferrer');
      } else {
        setTimeout(() => {
          setToast({ message: 'O link da loja para este item ainda será adicionado em breve.', tone: 'info' });
        }, 4400);
      }
    } else {
      setToast({ message: 'Não conseguimos registrar agora. Tente novamente em instantes.', tone: 'error' });
    }
  }

  function handleMissingLink() {
    setToast({ message: 'O link da lista completa ainda será adicionado em breve.', tone: 'info' });
  }

  async function handleConfirmPurchase(giftId) {
    const current = reservations || {};
    const entry = current[giftId];
    if (!entry) return;
    const updated = { ...current, [giftId]: { ...entry, status: 'escolhido', confirmedAt: Date.now() } };
    const ok = await saveReservations(updated);
    if (ok) setReservations(updated);
  }

  const loadingReservations = reservations === null;

  return (
    <div className="cassiel-app">
      <style>{GLOBAL_CSS}</style>
      <Header active={active} onNav={handleNav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onNav={handleNav} />
        <SuggestionSection onNav={handleNav} />
        <FraldasSection reservations={reservations} loading={loadingReservations} onChoose={openFlow} />
        <PresentesSection
          reservations={reservations}
          loading={loadingReservations}
          onChoose={openFlow}
          onMissingLink={handleMissingLink}
        />
        <SobreSection />
      </main>
      <Footer onAdminOpen={() => setAdminOpen(true)} />

      {modal && (
        <GiftModal
          product={modal.product}
          type={modal.type}
          onClose={closeFlow}
          onConfirm={confirmFlow}
          submitting={submitting}
        />
      )}

      {adminOpen && (
        <AdminModal
          reservations={reservations}
          onClose={() => setAdminOpen(false)}
          onConfirmPurchase={handleConfirmPurchase}
        />
      )}

      {toast && <Toast message={toast.message} tone={toast.tone} onDone={() => setToast(null)} />}
    </div>
  );
}
