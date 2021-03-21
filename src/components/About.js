import React, {Component} from 'react'

import Header from './Header'
// Image
import Image from './img/unnamed.png'
import Image1 from './img/SL6036L-show.png'
import Image2 from './img/25071c6bbd1ad553d2be4f6eebdf9dd8.png'
import Section from "./img/téléchargement.jpg"
import Section2 from "./img/fix1.png"
import Section3 from "./img/fix2.png"
import Section4 from "./img/fix3.png"
import Section5 from "./img/women.jpg"
import Section6 from "./img/men fix.jpg"
import Section7 from "./img/women 2.jpg"
import Section8 from "./img/men2.jpg"
//icons

import './About.css'
class About extends Component {

    render(){
 return (
   <>
    <div className="contents">
     
        <div class="circlz"></div>
        <Header />
    <div className="textBx">
      <h2>It is not  normal <br />It's <span>Speciale</span></h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        when an unknown printer took a galley of type and
      </p>
      <a href="#">Learn More</a>
    </div> 
    <div className="imgbx">
      <img src={Image} className="starbucks" width="75%" />
    </div>
    <ul className="thumbs">
      <li><img className="modi" src={Image1} onclick="imgSlider({Image1}) ;changeCircleColor('#E6B0AA')" width="35%" /></li>
      <li><img className="modi3" src={Image2} onclick="imgSlider({Image2});changeCircleColor('#FCF3CF')" width="45%" /></li>
      <li><img className="modi2" src={Image} onclick="imgSlider({Image});changeCircleColor('#d9d9d9')" width="50%" /></li>
    </ul>
  </div>
  <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h2 className="text-center">Ms Imen</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting
                , remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting
                , remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  
              </p>
            </div>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img src={Section} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="team-section">
          <h1>My Tools</h1>
          <span className="bordee" />
          <div className="ps">
            <a href="#p1"><img src={Section2} alt="" /></a>
            <a href="#p2"><img src={Section3} alt="" /></a>
            <a href="#p3"><img src={Section4} alt="" /></a>
          </div>
          <div className="sect" id="p1">
            <span className="name">HTML</span>
            <span className="bordee" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="sect" id="p2">
            <span className="name">React Js</span>
            <span className="bordee" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="sect" id="p3">
            <span className="name">CSS</span>
            <span className="bordee" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <div>
        <section className="sec4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                {/* Section Title Start*/}
                <div className="section-title">
                  <h1 className="title">Testimoniale</h1>
                  <h2 className="subtitle">Our Satisfied Customer Feedback</h2>
                </div>
                {/* Section Title End*/}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fas fa-quote-left" />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      <i className="fas fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star-half-alt" /></li>
                      <li><i className="far fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Section5} alt="tesitmonial" />
                    <h5>Soshiv Upreti</h5>
                    <p>CEO Webshala</p>
                  </div>
                </div>
              </div> 
              {/* second*/}
              <div className="col-lg-6">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fas fa-quote-left" />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      <i className="fas fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star-half-alt" /></li>
                      <li><i className="far fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Section6} alt="tesitmonial" />
                    <h5>Pine Applei</h5>
                    <p>CEO Webshala</p>
                  </div>
                </div>
              </div>
              {/*third*/}
              <div className="col-lg-6">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fas fa-quote-left" />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      <i className="fas fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star-half-alt" /></li>
                      <li><i className="far fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Section7} alt="tesitmonial" />
                    <h5>Jitender Kumar</h5>
                    <p>CEO Webshala</p>
                  </div>
                </div>
              </div> 
              {/*third*/}
              <div className="col-lg-6">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fas fa-quote-left" />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      <i className="fas fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star-half-alt" /></li>
                      <li><i className="far fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Section8} alt="tesitmonial" />
                    <h5>Peter thomson</h5>
                    <p>CEO Webshala</p>
                  </div>
                </div>
              </div> 
            </div>     
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="container">
              <div className="center-logo-sec"><h1><b className="color-logo">wat</b>ches</h1> </div>
              <p>we hope you can use our app easily and you didn't face problems </p>
              <ul className="socials">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
              </ul>
            </div>
            <div className="footer-bottom">
              <p>copyright ©2020 codeOpacity. designed by <span>Mohemmed and Imen</span></p>
            </div>
          </div>
        </footer>
      </div>
  </>
    )
}
      }
   
export default About;