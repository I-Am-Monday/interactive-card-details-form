import React from "react";
import classes from "./sections.module.css";
import cardLogo from "./images/card-logo.svg";
import bgCardBack from "./images/bg-card-back.png";
import bgCardFront from "./images/bg-card-front.png";
import iconComplete from './images/icon-complete.svg'
import CardImg from "./CardImg";
export default function CardSuccess (){
    
    return(
        <>
         <div>
          <div className={classes.carform1}>
            <div>
              <img src={iconComplete} alt="iconComplete" />
              <p style={{ color: "white" }}>THANK YOU</p>
              <span style={{ color: "white" }}>
                We’ve added your card details
              </span>
              <button className={classes.sectionsrightbutton} type="onsubmit">
                Continue
              </button>
            </div>
          </div>
          <div className={classes.sectionrightsimg1}>
                <CardImg />
          </div>
        </div>
        </>
    )
}