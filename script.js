// Menu mobile
function toggleMenu(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const display = getComputedStyle(nav).display;
  nav.style.display = (display === 'none') ? 'flex' : 'none';
  if(nav.style.display === 'flex'){ nav.style.flexDirection = 'column'; }
}

// ====== Hero Carousel (simples, estilo destaque) ======
let current = 0;
let timer = null;
const DURATION = 6000;

function setSlide(i){
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dots button');
  slides.forEach((el, idx) => el.classList.toggle('active', idx === i));
  dots.forEach((el, idx) => el.classList.toggle('active', idx === i));
  current = i;
}

function buildDots(){
  const slides = document.querySelectorAll('.slide');
  const dots = document.getElementById('dots');
  dots.innerHTML = '';
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.addEventListener('click', () => { stopAuto(); setSlide(idx); startAuto(); });
    dots.appendChild(b);
  });
}

function startAuto(){
  stopAuto();
  timer = setInterval(() => carouselNext(), DURATION);
}
function stopAuto(){
  if(timer){ clearInterval(timer); timer = null; }
}

function carouselNext(){ const slides = document.querySelectorAll('.slide'); setSlide((current + 1) % slides.length); }
function carouselPrev(){ const slides = document.querySelectorAll('.slide'); setSlide((current - 1 + slides.length) % slides.length); }

document.addEventListener('DOMContentLoaded', () => {
  buildDots();
  setSlide(0);
  startAuto();
});

// ====== Lead Modal ======
function openLead(product){
  document.getElementById('leadProduct').value = product || '';
  document.getElementById('leadModal').classList.remove('hidden');
}
function closeLead(){
  document.getElementById('leadModal').classList.add('hidden');
}
