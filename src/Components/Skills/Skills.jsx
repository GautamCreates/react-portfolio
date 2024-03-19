import React from 'react'
import "./Skills.css"
import img1 from "../../assets/HTML-removebg-preview.png"
import img2 from "../../assets/CSS-removebg-preview.png"
import img3 from "../../assets/Javascript-removebg-preview.png"
import img4 from "../../assets/React-removebg-preview.png"
import img5 from "../../assets/Tailwind-removebg-preview.png"
import img6 from "../../assets/ML-removebg-preview.png"
import img7 from "../../assets/DL-removebg-preview.png"
import img8 from "../../assets/DS-removebg-preview.png"
import img9 from "../../assets/Python-Symbol-removebg-preview.png"

const Skills = () => {
  return (
    <>
    <div className="skills">
        <h1 className='heading1'>Skills</h1>
        <div className="first">
        <img src={img1} alt="" className='image'/>
        <img src={img2} alt="" className='image'/>
        <img src={img3} alt="" className='image'/>
        </div>
        <div className="second">
        <img src={img4} alt="" className='image'/>
        <img src={img5} alt="" className='image'/>
        <img src={img6} alt="" className='image'/>
        </div>
        <div className="third">
            <img src={img7} alt="" className='image'/>
            <img src={img8} alt="" className='image'/>
            <img src={img9} alt="" className='image'/>
            </div>
       
    </div>
    </>
  )
}

export default Skills
