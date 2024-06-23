import React from "react";
import img from './img/3.png';
function about(){
    return(
        <div>
        <img src={img} className='img2' />
        <div className="des">
    <p id="des">I am P.Madar vali. I pursued B.Tech with xx% at Santhiram Engineering College in Nandyal. I completed my Intermediate at GSR&PVR College in Nandyal with 68% <a href="https://drive.google.com/file/d/1K-4hqPvJGKr75xLiocZLvOJrLsR8tKAH/view?usp=drive_link" id="click">click here</a>.I completed my SSC at PRAGATHI Public School in Koilkuntla with a 9.2 GPA(92%) <a href="https://drive.google.com/file/d/1JxzhJ6Rn6D9mKWggpyL_wGvAmebrCR7J/view?usp=drive_link" id="click">click Here</a>.</p>

    <p> I learned front-end languages like <mark id="mark">HTML and CSS</mark>, which are used in developing websites. Using my knowledge of front-end languages, I developed two projects named <b><mark id="mark">“Blood Donor” site and “Portfolio”.</mark></b>
        
        I also acquired proficiency in back-end languages such as <mark id="mark">Python, Java, and DBMS</mark>. Utilizing these back-end languages, we, a team of three members, developed an app using <b id="b">Android Studio</b>. The app is based on the curriculum of JNTUA.
        </p>
    </div>
        </div>
    );
}
export default about;