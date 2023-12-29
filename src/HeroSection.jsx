function HeroSection() {
     return (
          <section className="hero section" id="hero">
               <div className="hero-container container grid">
                    <div className="hero-content">
                         <h4>Hi there,</h4>
                         <h1>I'm <span className="typed" data-typed-items="Nfor Presly Takop ,A Full Stack Developer "> </span></h1>
                         <p>I'm Full Stack Web Developer  based in Buea, and I'm very passionate and dedicated</p>
                         <div className="hero-social">
                              <a href="#">
                                   <i className="fa fa-dribbble"></i>
                              </a>
                              <a href="#">
                                   <i className="fa fa-linkedin"></i>
                              </a>
                              <a href="#">
                                   <i className="fa fa-github"></i>
                              </a>
                              <a href="#">
                                   <i className="fa fa-twitter"></i>
                              </a>
                         </div>
                         <a href="#contact" className="btn">
                              Read More
                              <i className="chevron-forward-outline"></i>
                         </a>
                    </div>
                    <div class="hero-img">
                         <img src="./src/assets/me.jpg" alt="" className="img-fluid" />
                    </div>
               </div>
          </section>
     )
}

export default HeroSection;