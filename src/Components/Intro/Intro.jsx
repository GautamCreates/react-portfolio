import React from 'react'
import "./Intro.css"
import img from "../../assets/My Photo.png"

const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <div className="hello">Hello,</div>
            <div className="introtext">I'm <span className="introname">Gautam</span> <br />Website Designer</div>
            <p className="introPara">I am a passionate fresher front-end developer dedicated to ongoing learning, embracing challenges, and expanding my expertise to create impactful digital experiences.</p>
            <button className="btn">Hire Me</button>
        </div>
        <img src={img} alt="" className='bg'/>
    </section>
  )
}

export default Intro
