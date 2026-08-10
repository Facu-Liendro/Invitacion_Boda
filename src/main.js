/* =========================================================
   AÑO ACTUAL EN EL FOOTER
========================================================= */

document.getElementById('year').textContent =
  'Invitaciones digitales · © ' + new Date().getFullYear();


/* =========================================================
   MÚSICA
========================================================= */

let audio = null;
let musicPlaying = false;

const musicBtn =
  document.getElementById('floating-music-btn');


/* =========================================================
   APERTURA DE LA PORTADA
========================================================= */

const cover =
  document.getElementById('cover');

const content =
  document.getElementById('content');


cover.addEventListener('click', () => {

  cover.classList.add('hidden');

  content.classList.add('show');

  musicBtn.classList.add('show');


  /*
     Creamos el audio solamente la primera vez
  */

  if (!audio) {

    audio = new Audio('assets/Musica_fondo.mpeg');

    audio.loop = true;

    audio.volume = 0.35;
  }


  /*
     Intentamos reproducir la música
  */

  audio.play()
    .then(() => {

      musicPlaying = true;

      updateMusicButton();

    })
    .catch(error => {

      console.log(
        'Audio bloqueado por el navegador:',
        error
      );

      musicPlaying = false;

      updateMusicButton();

    });

});


/* =========================================================
   ACTUALIZAR BOTÓN DE MÚSICA
========================================================= */

function updateMusicButton() {

  if (!musicBtn) return;


  if (musicPlaying) {

    /*
       Música reproduciéndose
       → mostramos PAUSA
    */

    musicBtn.classList.add('is-playing');

    musicBtn.setAttribute(
      'aria-label',
      'Pausar música'
    );

  } else {

    /*
       Música pausada
       → mostramos PLAY
    */

    musicBtn.classList.remove('is-playing');

    musicBtn.setAttribute(
      'aria-label',
      'Reproducir música'
    );

  }

}


/* =========================================================
   BOTÓN MÚSICA FLOTANTE
========================================================= */

function toggleMusic() {

  if (!audio) return;


  if (musicPlaying) {

    /*
       PAUSAR
    */

    audio.pause();

    musicPlaying = false;

    updateMusicButton();

  } else {

    /*
       REPRODUCIR
    */

    audio.play()
      .then(() => {

        musicPlaying = true;

        updateMusicButton();

      })
      .catch(error => {

        console.log(
          'No se pudo reproducir la música:',
          error
        );

        musicPlaying = false;

        updateMusicButton();

      });

  }

}


/* =========================================================
   EVENTO DEL BOTÓN
========================================================= */

if (musicBtn) {

  musicBtn.addEventListener(
    'click',
    toggleMusic
  );

}


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

/*
   BODA:
   10 de octubre de 2026
   20:00 hs
   Argentina (UTC-3)
*/

const TARGET_DATE =
  new Date(
    '2026-10-10T20:00:00-03:00'
  ).getTime();


const cdContainer =
  document.getElementById('cd');


if (cdContainer) {

  function tick() {

    const diff =
      Math.max(
        0,
        TARGET_DATE - Date.now()
      );


    const days =
      Math.floor(
        diff / 86400000
      );


    const hours =
      Math.floor(
        (diff % 86400000) / 3600000
      );


    const minutes =
      Math.floor(
        (diff % 3600000) / 60000
      );


    const seconds =
      Math.floor(
        (diff % 60000) / 1000
      );


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
          String(
            map[el.dataset.k]
          ).padStart(2, '0');

      });

  }


  tick();

  setInterval(
    tick,
    1000
  );

}


/* =========================================================
   FORMULARIO RSVP
========================================================= */

const rsvpForm =
  document.getElementById('rsvp');


if (rsvpForm) {

  rsvpForm.addEventListener(
    'submit',
    e => {

      e.preventDefault();


      rsvpForm.style.display =
        'none';


      const thanks =
        document.getElementById('thanks');


      if (thanks) {

        thanks.style.display =
          'block';

      }

    }
  );

}


/* =========================================================
   SWIPER - GALERÍA
========================================================= */

if (
  document.querySelector(
    '.momentosSwiper'
  )
) {

  new Swiper(
    '.momentosSwiper',
    {

      loop: true,

      spaceBetween: 20,


      pagination: {

        el:
          '.swiper-pagination',

        clickable: true

      },


      navigation: {

        nextEl:
          '.swiper-button-next',

        prevEl:
          '.swiper-button-prev'

      },


      breakpoints: {

        0: {

          slidesPerView: 1

        },

        768: {

          slidesPerView: 2

        }

      }

    }
  );

}