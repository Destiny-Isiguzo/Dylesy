/**
 * Add active class and remove menu onclick
*/
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');
const navMenuToggleBtn = document.querySelector('.nav-menu-toggle-btn')

function linkAction() {
   navLinks.forEach((link) => link.classList.remove('nav-link-active'));
   this.classList.add('nav-link-active');
   nav.classList.toggle('show-menu');
   navMenuToggleBtn.classList.toggle('show-menu-icon');
}

navLinks.forEach((link) => link.addEventListener('click', linkAction));


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