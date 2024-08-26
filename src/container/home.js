import React from "react";
import im from './img/pic2.jpg';
import {FaFacebookF} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io5";
import {CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa";
function home(){
    return(
        <div>
     <img src={im} className="img1" />
     <a href="https://wa.me/918897711970?text=hello"><button id="hb2">Hire Me</button></a>
     
     <div id="info">
        <h1 id="Iam">I'M</h1>
     <h1 id="h1">PATAN</h1>
     <h2 id="h2">MADAR VALI</h2>
     <div id="icon">
     <a href="https://www.linkedin.com/in/patan-madar-vali-942197292/"><CiLinkedin id="li"/></a>
     <a href="https://github.com/madar-123"><FaGithub id="git"/></a>
     <a href="https://www.instagram.com/m_a_d_a_r_vali/?hl=en"><IoLogoInstagram id="in"/></a>
     <a href="https://www.facebook.com/madar.vali.96930"><FaFacebookF id="fa"/></a>
     </div>
     <a href="https://drive.google.com/file/d/1buAeta4_fx_6T1AnjkRsq-WzvmIsLwcB/view?usp=sharing" ><button id="hb1">Download CV</button></a>
     </div>
     </div>
    );
}
export default home;