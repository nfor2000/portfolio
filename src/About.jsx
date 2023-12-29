import React from 'react'

const About = () => {
     return (
          <section class="about section" id="about">
               <h2 class="section-title">About Me</h2>

               <div class="about-container container grid">
                    <div class="about-img">
                         <img src="./src/assets/me.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="about-content">
                         <h1>I make a professional Websites</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eveniet, commodi voluptate, voluptatem doloremque dolores corporis totam quo quos fugiat odio blanditiis officia accusamus provident mollitia ab explicabo ipsam aperiam exercitationem earum! Architecto totam est provident dolorem eum dicta ad?</p>
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
