import React  from "react";

export default class Aside extends React.Component{
    render(){
        return(
            <div>
            <div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/aside.jpeg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Vinay Acharya</a></h1>
                <span className="position"><a href="#">Fronted/Backend Designer</a> in India</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                    <li><a href="#" data-nav-section="about">About</a></li>
                    <li><a href="#" data-nav-section="projects">Skills</a></li>
                    <li><a href="#" data-nav-section="timeline">Education</a></li>
                    <li><a href="#" data-nav-section="contact" className="icon-phone">9538948160</a></li>
                    
                  </ul>
                  
                
                </div> 
              </nav>
              <div className="colorlib-footer">
           
                <ul>
                  <li><i className="icon-facebook2" /></li><br/>
                  <li><i className="icon-twitter2" /></li><br/>
                  <li><i className="icon-instagram" /></li><br/>
                  <li><i className="icon-linkedin2" /></li>
                </ul>
              </div>
            </aside>
          </div>
            </div>
        )
    }
}

