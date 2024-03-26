import {React} from 'react'
import "./Contact.css"
import facebook from "../../assets/Facebbok logo.png"
import instagram from "../../assets/Instagram.png"
import linkedin from "../../assets/Linkedin.png"
import emailjs from '@emailjs/browser';
import { useRef } from "react"


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ik0x9ck', 'template_s408fas', form.current, {
        publicKey: '0TGK4fXrS5DoUOthF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="contact">
      <h1 className="contatctpagetitle">Contact Me</h1>
      <span id="contactdesc">Please fill out the form below to discuss any work opportunities</span>
      <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your name' name='your_name' />
        <input type="email" className='email' placeholder='Your Email' name='your_email' />
        <textarea name="message" className='msg' rows="5" placeholder='Your Message' ></textarea>
        <button type='submit' value="send" className='submitbtn'>Submit </button>
      </form >
      <div className="links">
        <a href="https://www.facebook.com/profile.php?id=100026055941851"><img className="facebook" src={facebook} alt="" /></a>
        <a href="https://www.instagram.com/gautam_gup26/"><img className="Instagram" src={instagram} alt="" /></a>
        <a href="https://www.linkedin.com/in/gautam-gupta-b630aa248/"><img className="Linkedin" src={linkedin} alt="" /></a>
      </div>
    </div>
  )
}

export default Contact
