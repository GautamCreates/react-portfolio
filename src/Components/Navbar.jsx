import { React, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.jpg"
import img from "../assets/contact.png"
import { Link } from "react-scroll"
import Menu from "../assets/Menu.png"
const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    return (
        <>
        <nav className="navbar">
            <img className='logo' src={logo} alt="" style={{ height: "3rem", width: "4rem" }} />
            <div className="desktopMenu">
                <ul className='links'>
                    <li className='linksitems'><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Home</Link></li>
                    <li className='linksitems'><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={-60} duration={500} className="linksinneritems" href="#">About</Link></li>
                    <li className='linksitems'><Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={500} className="linksinneritems" href="#">Portfolio</Link></li>
                    <li className='linksitems'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Skills</Link></li>
                    <li className='linksitems'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Contact</Link></li>
                </ul>
            </div>

            <button className="desktopMenubtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}>
                <img src={img} alt="" style={{ height: "2rem", width: "2rem" }} />
                Contact Me
            </button>



            
        </nav>
        <div className='mainNav'>
        <img className='Menu' src={Menu} alt="Menubar" style={{ height: "3rem", width: "3.5rem" }} onClick={() => { setshowMenu(!showMenu) }} />
            
        <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
            <ul className='lists'>
                <li className='listsitems'><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Home</Link></li>
                <li className='listsitems'><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={-60} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>About</Link></li>

                <li className='listsitems'><Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Portfolio</Link></li>
                <li className='listsitems'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-5} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Skills</Link></li>
                <li className='listsitems'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Contact</Link></li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar
