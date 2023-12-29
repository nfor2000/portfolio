import React from 'react'

const Footer = () => {
     return (
          <footer>
               <div className="footer-bg">
                    <div className="footer-container container">
                         <div className="main-footer">
                              <div className="footer-social">
                                   <a href="">
                                        <i className="fa fa-whatsapp"></i>
                                   </a>
                                   <a href="">
                                        <i className="fa fa-facebook"></i>
                                   </a>
                                   <a href="">
                                        <i className="fa fa-twitter"></i>
                                   </a>
                              </div>
                              <h3>webGenie</h3>
                              <p>I professionally craft websites to enhance your online presence and drive business growth.</p>
                         </div>
                         <div className="footer-copy">&copy; webGenie. All rights reserved</div>
                    </div>
               </div>
          </footer>
     )
}

export default Footer
