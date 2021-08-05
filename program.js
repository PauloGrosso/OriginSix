const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

function HeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
}

// swiper slides
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
})

function backToTop() {
const buttonTop = document.querySelector('.back-top')
  if(window.scrollY >= 600) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
}
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  ` #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonial .testimonial,
    #contact .text, #contact .links,
    #footer .brand, footer .social`, {inteval: 100}
)

window.addEventListener('scroll', function() {
  HeaderWhenScroll()
  backToTop()
})