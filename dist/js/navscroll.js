var nav = document.querySelector('nav');
var brand = document.querySelector('.brand');
let navHeight = window.getComputedStyle(nav, null);
navHeight = Number(navHeight.getPropertyValue('height').replace('px', ''));

window.addEventListener('scroll', function(e) {
  var y = window.scrollY;
  if(y > 150) {
    if(nav.className !== 'nav-scroll') {
      nav.className = 'nav-scroll';
      brand.style.fontSize = '1.75rem';
    }
  } else {
    if(nav.className === 'nav-scroll') {
      nav.classList.remove('nav-scroll');
      brand.style.fontSize = '2.25rem';
    }
  }
})
