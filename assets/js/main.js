/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
   strings: ['Web Front-End Developer', 'Graphic Designer'],
   typeSpeed: 80,
   backSpeed: 40,
   backDelay: 2000,
   loop: true,
   cursorChar: '|'
});

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow-header')
      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   emailjs.sendForm('service_0cwdegb','template_hbh5ihb','#contact-form','eUjJAlZZnMeE9c-Hq')
   .then(()=>{
      contactMessage.textContent = 'Message sent successfully ✅'

      setTimeout(()=>{
         contactMessage.textContent = ''
      } , 6000)
      contactForm.reset()
   } , () =>{
      contactMessage.textContent = 'Message not sent (service error) ❌'
   })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, 
            top = section.offsetTop - 50, 
            height = section.offsetHeight, 
            link = document.querySelector('.nav_menu a[href*=' + id + ']') 

      if(scrollY > top && scrollY <= top + height){
         link.classList.add('active-link')
      }else{
         link.classList.remove('active-link')
      }

      // link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 200,
   reset: true
})

sr.reveal('.home_content, .section_title, .project_name')
sr.reveal('.home_data', { delay: 400, origin: 'bottom' })

sr.reveal('.about_content, .contact_form', { origin: 'left' })
sr.reveal('.about_image, .contact_content', { origin: 'right' })

sr.reveal('.projects_card, .resume_content', { interval: 100, origin: 'bottom' })
sr.reveal('.footer_container, .footer_copy', { origin: 'bottom' })
