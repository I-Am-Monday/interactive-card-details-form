import React from "react";
import classes from "./sections.module.css";
export default function Input(props) {
const {
    width,
    height,
    type,
    placeholder,
    cardholderName,
    setCardholderName,
    name,
  } = props;
 
  return (
    <div>
      <input
        name={name}
        style={{width,height}}
        className={classes.sectionsrightcardinput}
        type={type}
        placeholder={placeholder}
        value={cardholderName}
        onChange={(event) => setCardholderName(event.target.value)}
      />
     
    </div>
  );
}
