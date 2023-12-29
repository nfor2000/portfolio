import React from 'react'

const Services = () => {
  return (
    <section className='services section' id='services'>
          <h2 className="section-title">Services</h2>
          <div className="services-container container grid">
               <div className="service-item">
                    <i className="fa fa-th-large"></i>
                    <h3 className="service-title">Frontend <br />Development</h3>
                    <span className="services-button">
                         view more <i className="fa fa-chevron-right"></i>
                    </span>
                    <div className="services-modal">
                         <div>
                              <i className="fa fa-close modal-close-icon"></i>
                              <h3 className="service-modal-title">Frontend Development</h3>
                              <p className="services-modal-description"></p>
                              <ul>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">I develope user interfaces</p>
                                   </li>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">web page  developement</p>
                                   </li>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">I create UX element interactions.</p>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div className="service-item">
                    <i className="fa fa-th-large"></i>
                    <h3 className="service-title">Backend <br />Developement</h3>
                    <span className="services-button">
                         view more <i className="fa fa-chevron-right"></i>
                    </span>
                    <div className="services-modal">
                         <div>
                              <i className="fa fa-close modal-close-icon"></i>
                              <h3 className="service-modal-title">Backend Developement</h3>
                              <p className="services-modal-description"></p>
                              <ul>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">I develope Rest APIs</p>
                                   </li>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">Manage Databases</p>
                                   </li>
                                   <li>
                                        <i className="fa fa-check-circle"></i>
                                        <p className="services-modal-info">Manage security aspects.</p>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Services
