import React from 'react'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            <div className="nav">
                <h2 className="logo"><NavLink className="logo-link" to="/">Tiger Code</NavLink></h2>
                <div className="nav-menu">
                    <NavLink className="nav-menu__link" exact to="/">Home</NavLink>
                    <NavLink className="nav-menu__link" to="/about">About</NavLink>
                    <NavLink className="nav-menu__link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-menu__link" to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}
