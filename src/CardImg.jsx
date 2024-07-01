import React from "react";
import classes from "./sections.module.css";
import cardLogo from "./images/card-logo.svg";
import bgCardBack from "./images/bg-card-back.png";
import bgCardFront from "./images/bg-card-front.png";
export default function CardImg(props){
    const {cardNumber,cardholderName,mm,yy,cgv}=props
    
    return(
        < >  <div style={{ position: "relative" }}>
        <img src={bgCardFront} alt="bgCardFront" />
        <img
          className={classes.iconComplete}
          src={cardLogo}
          alt="iconComplete"
        />
        <div className={classes.sectionrightp}>
          <p>{cardNumber ? cardNumber : "000000000000"}</p>
          <div style={{ display: "flex" }}>
            <p>{cardholderName ? cardholderName : "felicia leire"}</p>{""}
            <p style={{ marginLeft: "200px" }}>
              {mm ? mm : "99"}/{yy ? yy : "12"}
            </p>
           
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          className={classes.sectionrightsimg2}
          src={bgCardBack}
          alt="bgCardBack"
        />
        <p className={classes.sectionrightp1}>{cgv ? cgv : "000"}</p>
      </div>
        </>
    )
}