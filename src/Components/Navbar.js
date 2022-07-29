import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";

const Navbar = () => {
    return (
        <div className='navbar-container font-m-plus-rounded'>
            <div className='navbar-container-items'>
                <div className='navbar-container-name'>
                    <Link to="/">
                        David Meléndez
                    </Link>
                </div>
                <div className='navbar-container-links font-m-plus-rounded'>
                    <Link to="skills">
                        Skills
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>

                </div>
                <div className='navbar-container-menu'>
                    <a href='https://www.linkedin.com/in/david-mel%C3%A9ndez-439901204/' target="_blank">

                        Linked
                        <SiLinkedin size={15} className='navbar-container-menu-linked-in' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Navbar