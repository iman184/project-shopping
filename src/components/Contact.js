import React from 'react'
import Shape from './img/shape.png'
import Location from "./img/location.png"
import Phone from "./img/phone.png"
import "./Contact.css"
import Header from './Header'
export default function Contact() {

    return (
      <>
      
            <div className="containers">
            <Header />
            <div className="space">
            <span className="big-circle" />
        <img src={Shape} className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <img src={Location} className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src={Phone} className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" placeholder="Username"/>
               
              </div>
              <div className="input-container">
                <input type="email" name="email" placeholder="Email" className="input" />
              </div>
              <div className="input-container">
                <input type="tel" name="phone" placeholder="Phone" className="input" />
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" placeholder="Message" defaultValue={""} />
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
            </div>
        
      </>
    )
}
