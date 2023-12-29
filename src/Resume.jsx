import React from 'react'

const Resume = () => {
     return (
          <section className="resume section" id="resume">
               <h2 className="section-title">Resume</h2>

               <div className="resume-container container grid">
                    <div className="resume-tabs">
                         <ul>
                              <li>
                                   <a href="#page-1" className="current">Education</a>
                              </li>
                              <li>
                                   <a href="#page-2">Experience</a>
                              </li>
                              <li>
                                   <a href="#page-3">Skills</a>
                              </li>
                         </ul>
                    </div>
                    <div className="resume-content">

                         <div id="page-1" className="page one">
                              <div className="page-heading">Education</div>
                              <div className="resume-wrap">
                                   <div className="resume-wrap-icon">
                                        <i className="fa fa-graduation-cap"></i>
                                   </div>
                                   <div className="resume-wrap-content">
                                        <span className="date">2022-present</span>
                                        <h4>Software Developer</h4>
                                        <span className="position">University of Buea</span>
                                        <p>Currently persuing a Bachelors of Techmology degree in the university of Buea. </p>
                                   </div>
                              </div>
                         </div>

                         <div id="page-2" className="page two">
                              <div className="page-heading">Experience</div>
                              <div className="resume-wrap">
                                   <div className="resume-wrap-icon">
                                        <i className="fa fa-briefcase"></i>
                                   </div>
                                   <div className="resume-wrap-content">
                                        <span className="date">01/07/2023-31/08/2023</span>
                                        <h4>Web Developer</h4>
                                        <span className="position">Intern</span>
                                        <p>Two months internship training in Bitsvalley Bamenda. </p>
                                   </div>
                              </div>
                              
                         </div>

                         <div id="page-3" className="page three">
                              <div className="page-heading">Skills</div>
                              <div className="progress-boxes grid">
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>HTML</span>
                                             <span>78%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "78%"}}></div>
                                        </div>
                                   </div>
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>CSS</span>
                                             <span>60%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "60%"}}></div>
                                        </div>
                                   </div>
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>jAVASCRIPT</span>
                                             <span>65%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "65%"}}></div>
                                        </div>
                                   </div>
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>Nodejs/Express js</span>
                                             <span>70%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "70%"}}></div>
                                        </div>
                                   </div>
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>React</span>
                                             <span>50%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "50%"}}></div>
                                        </div>
                                   </div>
                                   <div className="progress-box">
                                        <div className="progress-name">
                                             <span>Mongo Db</span>
                                             <span>74%</span>
                                        </div>
                                        <div className="progress">
                                             <div className="progress-bar" style={{width: "74%"}}></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Resume
