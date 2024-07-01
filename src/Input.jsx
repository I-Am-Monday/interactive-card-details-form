import React from "react";
import classes from "./sections.module.css";
export default function Input(props) {
const {
    width,
    height,
    type,
    placeholder,
    datacard,
    setDatacard,
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
        value={datacard}
        onChange={(event) => setDatacard(event.target.value)}
      />
     
    </div>
  );
}
