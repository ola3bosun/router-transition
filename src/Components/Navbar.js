import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <Link className='nav-link' to="/">OTB</Link>
            </div>
            <div className='nav-links>'>
                <div nav-item>
                    <link className='nav-link' to="/">
                        Home
                    </link>
                </div>
                <div nav-item>
                    <link className='nav-link' to="/about">
                        About
                    </link>
                </div>
                <div nav-item>
                    <link className='nav-link' to="/contact">
                        Contact
                    </link>
                </div>
            </div>
        </div>
    )
}

export default NavBar