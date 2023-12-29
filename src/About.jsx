import React from 'react'
import me from '../public/me.jpg'

const About = () => {
     return (
          <section class="about section" id="about">
               <h2 class="section-title">About Me</h2>

               <div class="about-container container grid">
                    <div class="about-img">
                    <img src={me} alt="" class="img-fluid" />
                    </div>
                    <div class="about-content">
                         <h1>I make a professional Websites</h1>
                         <p>Welcome to webGenie, where I specialize in creating professional websites tailored to meet your unique business needs. We are passionate about crafting visually stunning and highly functional websites that enhance your online presence and drive business growth.</p>
                         <div class="about-info">
                              <div>
                                   <span class="number">20</span>
                                   <br />
                                   <span class="text">Completed <br />projects</span>
                              </div>
                              <div>
                                   <span class="number">30</span>
                                   <br />
                                   <span class="text">Positive <br />reviews</span>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default About
