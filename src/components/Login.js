import React from 'react'
import './Login.css';
/*images*/
import Wave from "./img/wave.png";
import User from "./img/User interface_Monochromatic.svg";
import Female from "./img/undraw_female_avatar_w3jk.svg";
export default function Login() {
    return (
        <div>
                  <img className="wave" src={Wave} />
        <div className="containerz">
          <div className="imgs">
            <img src={User} />
          </div>
          <div className="login-content">
            <form action="index.html">
              <img src={Female} />
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                 
                  <input type="text" className="input" placeholder="Username"/>
                </div>
              </div>
              <div className="input-div pass">
                <div className="i"> 
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                 
                  <input type="password" className="input" placeholder="Password"/>
                </div>
              </div>
              <a href="#">Forgot Password?</a>
              <input type="submit" className="btn" defaultValue="Login" />
            </form>
          </div>
        </div> 
        </div>
    )
}
