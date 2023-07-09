import React from 'react'
import './navbar.css'
import {Link } from 'react-router-dom';

export default function Navbar()
{

    return(

       <div>

        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to="/Servies">Servies</Link>
            <Link to="/About">About</Link>
        </nav>

       </div> 
    )
}