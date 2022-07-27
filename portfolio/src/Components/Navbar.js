import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container font-m-plus-rounded'>
            <div className='navbar-container-items'>
                <div className='navbar-container-name'>
                    <p>
                        David Meléndez
                    </p>
                </div>
                <div className='navbar-container-links'>
                    {/* <a>
                        Works
                    </a>
                    <a>
                        Projects
                    </a> */}
                </div>
                <div className='navbar-container-menu'>
                    {/* <p>Github</p> */}
                    <p>menu</p>

                </div>
            </div>
        </div>
    )
}

export default Navbar