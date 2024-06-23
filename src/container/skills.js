import React from "react";
import html from './img/languages/html.png';
import css from './img/languages/css.png';
import js from './img/languages/js.png';
import boot from './img/languages/bootstrap.png';
import react from './img/languages/react.png';
import java from './img/languages/java.png';
import dbms from './img/languages/dbms.png';
import git from './img/languages/git.png';
import python from './img/languages/python.png';
import c from './img/languages/c.png';
function skill(){
    return(
        <div className="skills">
            <div id="front">
            <h1 id="sh1">front-end language</h1>
            <img src={html} id="html" />
            <img src={css} id="css" />
            <img src={js} id="js" />
            <img src={boot} id="boot" />
            <img src={react} id="react" />
            </div>
            <div id="back">
            <h1 id="sh2">back-end language</h1>
            <img src={java} id="java" />
            <img src={c} id="c" />
            <img src={python} id="python" />
            <img src={dbms} id="dbms" />
            </div>
            <div id="source">
            <h1 id="sh3">Source language</h1>
            <img src={git} id="gi" />
            </div>
        </div>
    );
}
export default skill;