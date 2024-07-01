import React from "react";
import classes from "./sections.module.css";
export default function CardLabel (props){
  
    const {name}=props

    return(
        <>
        
        <label  className={`${classes.sectionsrightformlap} ${classes.sectionsrightformlap1}`} >{name}</label>
       
       
        </>
    )
    
}