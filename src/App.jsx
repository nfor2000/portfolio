import { useEffect, useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'
import Services from './Services'
import Footer from './Footer'
import Alert from './Alert'

function App() {
     const [message, setMessage] = useState('')
     useEffect(() => {

          const menu = document.querySelector('.menu');
          const toggleIcon = document.querySelector('.toggle-icon');
          const closeIcon = document.querySelector('.close-icon');
          const menuLinks = document.querySelectorAll('.menu-link');

          toggleIcon.addEventListener('click', () => {
               menu.classList.add('active');
          })

          closeIcon.addEventListener('click', () => {
               menu.classList.remove('active');
          })

          menuLinks.forEach(link => {
               link.addEventListener('click', () => {
                    menu.classList.remove('active');
               })
          })

          /* change header backgrond */

          function scrollHeader() {
               const header = document.querySelector('header');
               this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
          }

          window.addEventListener('scroll', scrollHeader);

          /* Hero type effect */
          const typed = document.querySelector('.typed');

          if(typed) {
               let typed_strings = typed.getAttribute('data-typed-items');
               typed_strings = typed_strings.split(',');
               new Typed('.typed', {
                    strings:typed_strings,
                    loop:true,
                    typeSpeed: 100,
                    backSpeed:50,
                    backDelay:2000
               })
          }
         
          // Scroll sections active Link

          const sections = document.querySelectorAll('section[id]');

          function scrollActive() {
               const scrollY = window.pageYOffset;
               sections.forEach(section => {
                    const sectionHeight = section.offsetHeight;
                    const sectionTop = section.offsetTop - 70;

                    let sectionId = section.getAttribute('id');

                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                         document.querySelector('.menu a[href *=' + sectionId + ' ]').classList.add('active-link');
                    } else {
                         document.querySelector('.menu a[href *=' + sectionId + ' ]').classList.remove('active-link');
                    }
               })
          }

          window.addEventListener("scroll", scrollActive);

          // Resume Scroll 

          const pages = document.querySelectorAll('.page');
          const resume = document.querySelector('.resume');

          function resumeActive() {
               const scrollY = window.pageYOffset;
               pages.forEach(page => {
                    const pageHeight = page.offsetHeight;
                    const pageTop = page.offsetTop - 170;

                    let pageId = page.getAttribute('id');

                    if (scrollY > pageTop && scrollY <= pageTop + pageHeight) {
                         document.querySelector('.resume-tabs a[href *=' + pageId + ' ]').classList.add('current');
                    } else {
                         document.querySelector('.resume-tabs a[href *=' + pageId + ' ]').classList.remove('current');
                    }
               })
          }

          window.addEventListener("scroll", resumeActive);

          const modalBtns = document.querySelectorAll('.services-button'),
                modalViews = document.querySelectorAll('.services-modal'),
                modalClose = document.querySelectorAll('.modal-close-icon');

          const modal = function(modalClick) {
               modalViews[modalClick].classList.add('active-modal');
          }

          modalBtns.forEach((modalBtn,i) => {
               modalBtn.addEventListener("click", () => {
                    modal(i)
               })
          })

          modalClose.forEach(close => {
               close.addEventListener("click", ()=> {
                    modalViews.forEach(modalView => {
                         modalView.classList.remove('active-modal');
                    })
               })
          })

          const closeAlert = document.querySelector('.close-alert');
          if(closeAlert){
               closeAlert.addEventListener('click', (e)=> {
                    console.log(e.currentTarget);
                    e.target.parentElement.style.display = "none";
               })
          }
     }, [])

     return (
          <>
               {message? <Alert message={message} />: ""}
               <Header />
               <HeroSection />
               <About />
               <Resume />
               <Projects />
               <Services />
               <Contact setMessage={setMessage} />
               <Footer />
          </>
     )
}

export default App
