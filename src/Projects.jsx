import React from 'react'
import data from './data'

const Project = ({ data }) => {
     return (
          <div className="project-item">
               <div className="project-wrap">
                    <img src={data.imgUrl} alt="" className='img-fluid' />
                    <div className="project-info">
                         <h4>{data.title}</h4>
                         <div className="project-links">
                              <a href={data.link} target='_blank'><i className="fa fa-link"></i></a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

const Projects = () => {

     return (
          <section id='project' className="section">
               <h2 className="section-title">Projects</h2>
               <div className="project-wrap-container container">
                    {
                         data.map((data_item, index) => (
                              <Project key={index} data={data_item} />
                              )
                         )
                    }
               </div>
          </section>
     )
}

export default Projects
