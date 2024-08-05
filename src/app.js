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
 * Header active class
*/
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	const scrollHeight = window.scrollY;
	if (scrollHeight > 40) {
		header.classList.add('header-active');
	} else {
		header.classList.remove('header-active');
	}
})


/**
 * Services infinite scroll animation
*/
const scrollers = document.querySelectorAll('.scroller-wrapper');

const scrollerAnimation = () => {
   scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true);
   });
   
}


/**
 * Dynamically add images after skeleton animation
 */
const images = document.querySelectorAll('img[data-image]');

images.forEach((img) => {
   const imagePath = `assets/images/${img.dataset.image}`;
   const image = new Image();

   image.onload = () => {
      img.src = imagePath;
      img.classList.remove('skeleton');
   };

  image.src = imagePath;
});
