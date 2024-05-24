import React from 'react'
import { NavLink } from 'react-router-dom'
import '../layout/header.css'
import { LuMenu } from "react-icons/lu";
const Header = () => {
    return (
        <header>
            <div>
                <h1 className='foundation'>FOUNDATION</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={'/'} className={(navData) => navData.isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to={'/add'} className={(navData) => navData.isActive ? "active" : ""}>Add</NavLink></li>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Donate</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='menus'>
                <p><LuMenu /></p>
            </div>
        </header>
    )
}

export default Header