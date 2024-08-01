/**
 * Handle Navigation
 */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navMenuLinks = document.querySelectorAll('.nav-menu-link');

const toggleMenu = () => {
   navMenu.classList.toggle('nav-menu-show');
   hamburgerMenu.classList.toggle('open');
   animateLinks();
};

const animateLinks = () => {
   navMenuLinks.forEach((link, index) => {
      if (navMenu.classList.contains('nav-menu-show')) {
         link.classList.add('nav-menu-link-in');
         link.classList.remove('nav-menu-link-out');
      } else {
         link.classList.remove('nav-menu-link-in');
         link.classList.add('nav-menu-link-out');
      }
      link.style.animationDelay = `${index * 0.1}s`;
   });
};

const linkAction = () => {
   toggleMenu();
};

hamburgerMenu.addEventListener('click', toggleMenu);
navMenuLinks.forEach((link) => link.addEventListener('click', linkAction));


/**
 * Dynamically add images after skeleton animations
 */
const imageWrappers = document.querySelectorAll('.hero-image-wrapper');

imageWrappers.forEach((wrapper) => {
   const img = wrapper.querySelector('img');
   const imagePath = `assets/images/${img.dataset.image}`; // with data-image attribute is set on the img tag
   const image = new Image();

   image.onload = () => {
      img.src = imagePath;
      img.classList.remove('skeleton');
   };

   image.src = imagePath;
});


/**
 * Scroll reveal animation
 */
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true
});

// sr.reveal(`.home__perfil, .contact__mail`, {origin: 'right'});
// sr.reveal(`.home__name, .home__info, .contact__social, .contact__data`, {origin: 'left'});
// sr.reveal(`.services .section__title-2, .projects .section__title-1, .about__container, .footer__container`, {
//    opacity: 0,
//    distance: '0px',
// })
// sr.reveal(`.services__card, .projects__card`, {interval: 110});
