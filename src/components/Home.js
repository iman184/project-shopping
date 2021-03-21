import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
// Image

import Image from './img/1437986.png.scale.314.high.panthère-de-cartier-watch-pink-gold.webp'
import Image1 from './img/c270a06fcc514a8f9e38cd7e6b18865d.png'
import Image2 from './img/590492.png.scale.314.high.ballon-bleu-de-cartier-watch-pink-gold (1).webp'
import Image3 from './img/1704492.webp'
import Image4 from './img/C035.417.16.037.01_SLD.png'
//icons
import Icon from "./img/facebook-f-brands.svg"
import Icon1 from "./img/instagram-brands.svg"
import Icon2 from "./img/twitter-brands.svg"
import Swiper from "swiper" 
import './Home.css'
class Home extends Component {
    componentDidMount(){
  var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
    }
      render(){
 return (
        <div>
      <section className='sections1'>
        <div className="circles" />
       <Header />
        <div className="content">
          <div className="textBox">
            <h2>Diffrent Watches </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of</p>
            <a href="#">Learn More</a>
          </div>
          <div className="imgBox">
            {/* Swiper */}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={Image} /></div>
                <div className="swiper-slide"><img src= {Image1}/></div>
                <div className="swiper-slide"><img src={Image2} /></div>
                <div className="swiper-slide"><img src={Image3} /></div>
                <div className="swiper-slide"><img src={Image4}/></div>
              </div>
            </div>
          </div>
        </div>
        <ul className="sci">
          <li><a href="#"><img src={Icon} width="70%" /></a></li>
          <li><a href="#"><img src={Icon1}/></a></li>
          <li><a href="#"><img src={Icon2} /></a></li>
        </ul>
      </section> 
        </div>
    )
}
      }
   
export default Home;