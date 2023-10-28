// fixed header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function(){
  header.classList.toggle('sticky', this.window.scrollY>0)
})

// active hamburger icon
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.nav-mobile');
hamb.addEventListener('click', function(){
  this.classList.toggle('active');
  nav.classList.toggle('active');
});
