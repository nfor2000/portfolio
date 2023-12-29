
const Header = () => {
     return(
          <header id="header">
          <div className="container">
               <a href="#" className="logo">
                    <i className="fa fa-lightbulb-o"></i>Web
                    <span>Genie</span>
               </a>
               <ul className="menu">
                    <li className="menu-item">
                         <a href="#hero" className="menu-link active-link">Home</a>
                    </li>
                    <li className="menu-item">
                         <a href="#about" className="menu-link">About</a>
                    </li>
                    <li className="menu-item">
                         <a href="#resume" className="menu-link">Resume</a>
                    </li>
                    <li className="menu-item">
                         <a href="#project" className="menu-link">Projects</a>
                    </li>
                    <li className="menu-item">
                         <a href="#services" className="menu-link">Services</a>
                    </li>
                    <li className="menu-item">
                         <a href="#contact" className="menu-link">Contact</a>
                    </li>

                    <i className="fa fa-close close-icon"></i>
               </ul>
               <i className="fa fa-bars toggle-icon"></i>
          </div>
     </header>

     );
}

export default Header;