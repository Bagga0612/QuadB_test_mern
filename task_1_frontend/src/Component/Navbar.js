import React from 'react'
import { NavLink } from 'react-router-dom'


import './CSS/navbar.css'

const Navbar = () => {

    const u_type = localStorage.getItem("user_type")

    let final_u_type = u_type.replace(/"/g, '');
    console.log(final_u_type);


    console.log("kkkkk", u_type)

    const logout = () => {
        localStorage.setItem("user_id", "")
        localStorage.setItem("user_type", "")
    }
    return (
        <div>
            {final_u_type === "customer" ?

                <nav id='navbar'>
                    <NavLink id='mee' to="/list">E-Commerse Site</NavLink>
                    <ul >
                        <li>
                            <NavLink id='me' to="/list">View Product</NavLink>
                        </li>
                        <li>
                            <NavLink id='me' to="/" onClick={logout}>Log Out</NavLink>
                        </li>
                    </ul>
                </nav>
                :
                <nav id='navbar'>
                    <NavLink id='mee' to="/list">E-Commerse Site</NavLink>
                    <ul >
                        <li>
                            <NavLink id='me' to="/view">View Product List</NavLink>
                        </li>
                        <li>
                            <NavLink id='me' to="/addProduct">Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink id='me' to="/" onClick={logout}>Log Out</NavLink>
                        </li>
                    </ul>
                </nav>
            }

        </div>
    )
}

export default Navbar