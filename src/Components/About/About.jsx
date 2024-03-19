import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div className="aboutme">
    <h1 className='header'>About Me</h1>
    <div className="upper">
    Hi there! 👋 I'm Gautam, a passionate front-end developer with a keen eye for crafting immersive and user-friendly digital experiences. I specialize in bringing designs to life and creating engaging interfaces that captivate users.
    </div>
    <div className="middle">
    <span className="word">My Skills</span>
<div className="heading">Proficient in HTML, CSS, and JavaScript: </div> <span className="info">I have a strong foundation in the core technologies of web development, enabling me to create responsive and visually appealing websites.</span>

<div className="heading">Frameworks and Libraries:</div><span className='info'>I'm well-versed in popular front-end frameworks like React.js, allowing me to build dynamic and interactive web applications efficiently.</span>

<div className="heading">UI/UX Design Principles:</div><span className="info">I prioritize user experience in my development process, ensuring that every element of the interface is intuitive and accessible.</span>
    </div>
    <h4 className='word'>Why Choose Me?</h4>
    <div className="lower">
    As a freelancer, I offer several advantages:

<div className="heading">Flexibility:</div><span className='info'>I am adaptable and can tailor my schedule to meet project deadlines and client needs. Whether it's a short-term assignment or a long-term collaboration, I'm committed to delivering high-quality results on time.</span> 

<div className="heading">Communication:</div><span className="info">I believe in clear and transparent communication throughout the project lifecycle. I listen attentively to client requirements and provide regular updates to ensure that the project stays on track.</span>

<div className="heading">Attention to Detail:</div><span className='info'>I pay close attention to detail and strive for perfection in every aspect of my work. From pixel-perfect design implementation to optimizing performance, I take pride in delivering polished and professional solutions.</span>
    </div>
    </div>
    </>
  )
}

export default About
