import React from 'react'
import Sectionsleft from './Sectionsleft'
import Sectionrifht from './Sectionrifht'
import classe  from './sections.module.css'
export default function Sections() {
  return (
    <div className={classe.sections}>
        <Sectionsleft />
        <Sectionrifht />
    </div>
  )
}
