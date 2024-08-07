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
      link.style.animationDelay = `${index * 0.04}s`;
   });
};

const linkAction = () => {
   toggleMenu();
};

hamburgerMenu.addEventListener('click', toggleMenu);
navMenuLinks.forEach((link) => link.addEventListener('click', linkAction));


/**
 * Services infinite scroll animation
*/
const scrollers = document.querySelectorAll('.scroller-wrapper');

const scrollerAnimation = () => {
   scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector('.scroller-inner');
      const scrollerContents = Array.from(scrollerInner.children);

      scrollerContents.forEach((content) => {
         const duplicateContent = content.cloneNode(true);
         duplicateContent.setAttribute('aria-hidden', true);
         scrollerInner.appendChild(duplicateContent);
      });
   });
}

scrollerAnimation();


/**
 * Dynamically add images after skeleton animation
*/
// const imageWrappers = document.querySelectorAll('[data-image-wrapper]');

// imageWrappers.forEach((wrapper) => {
//   const images = wrapper.querySelectorAll('img[data-image]');

//    images.forEach((img) => {
//       const imagePath = `assets/images/${img.dataset.image}`;
//       const image = new Image();

//       image.onload = () => {
//          img.src = imagePath;
//          img.classList.remove('skeleton');
//       };

//       image.src = imagePath;
//    });
// });

// Wait for the page to be fully loaded
window.addEventListener('load', () => {
   // Get all elements with skeleton and skeleton-text classes
   const skeletonElements = document.querySelectorAll('.skeleton, .skeleton-text');

   // Remove the classes from the elements
   skeletonElements.forEach((element) => {
      element.classList.remove('skeleton', 'skeleton-text');
   });
});