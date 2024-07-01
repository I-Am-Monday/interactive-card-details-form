import React from 'react'
import classes  from './sections.module.css'
import bgMainDesktop from './images/bg-main-desktop.png'
export default function Sectionsleft() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgMainDesktop})`,
       
      }}
      className={classes.sectionsleft}>
    
    </div>
  )
}
