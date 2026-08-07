/* ===========================
   AÑO ACTUAL EN EL FOOTER
   =========================== */
document.getElementById('year').textContent =
  'Invitaciones digitales · © ' + new Date().getFullYear();


/* ===========================
   MÚSICA
   =========================== */
let audio;
let musicPlaying = false;


/* ===========================
   APERTURA DE LA PORTADA
   =========================== */
const cover = document.getElementById('cover');
const content = document.getElementById('content');

cover.addEventListener('click', () => {

  cover.classList.add('hidden');
  content.classList.add('show');

  document
    .getElementById('floating-music-btn')
    .classList.add('show');

  if (!audio) {
    audio = new Audio('assets/Chicago.mp3');
    audio.loop = true;
    audio.volume = 0.35;
  }

  audio.play()
    .then(() => {
      musicPlaying = true;
      document.getElementById('floating-music-btn').textContent = '⏸';
    })
    .catch(err => {
      console.log('Audio bloqueado:', err);
    });

});


/* ===========================
   BOTÓN MÚSICA FLOTANTE
   =========================== */
function toggleMusic() {

  const btn = document.getElementById('floating-music-btn');

  if (!audio) return;

  if (musicPlaying) {

    audio.pause();
    musicPlaying = false;

    btn.textContent = '▶';

  } else {

    audio.play();

    musicPlaying = true;

    btn.textContent = '⏸';
  }
}


/* ===========================
   CUENTA REGRESIVA
   =========================== */
const TARGET_DATE =
  new Date('2026-10-17T20:00:00-03:00').getTime();

const cdContainer = document.getElementById('cd');

if (cdContainer) {

  function tick() {

    const diff =
      Math.max(0, TARGET_DATE - Date.now());

    const days =
      Math.floor(diff / 86400000);

    const hours =
      Math.floor((diff % 86400000) / 3600000);

    const minutes =
      Math.floor((diff % 3600000) / 60000);

    const seconds =
      Math.floor((diff % 60000) / 1000);

    const map = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    };

    cdContainer
      .querySelectorAll('[data-k]')
      .forEach(el => {
        el.textContent =
          String(map[el.dataset.k])
            .padStart(2, '0');
      });
  }

  tick();
  setInterval(tick, 1000);
}


/* ===========================
   FORMULARIO RSVP
   =========================== */
const rsvpForm = document.getElementById('rsvp');

if (rsvpForm) {

  rsvpForm.addEventListener('submit', e => {

    e.preventDefault();

    rsvpForm.style.display = 'none';

    const thanks =
      document.getElementById('thanks');

    if (thanks) {
      thanks.style.display = 'block';
    }

  });

}


/* ===========================
   SWIPER (GALERÍA)
   =========================== */
if (document.querySelector('.momentosSwiper')) {

  new Swiper('.momentosSwiper', {

    loop: true,

    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }

  });

}