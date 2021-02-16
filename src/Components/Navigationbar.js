import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useLocation
} from "react-router-dom";

//retrieve user from auth context and display his email
const activeStyle = { color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}
const normalStyle = { color: "black"}
const Navigationbar = () => {
    const { user } = useContext(AuthContext)
    let location = useLocation()
    console.log('location', location.pathname)

   
    
    return (
        <nav className="navbar">
        <div >
                <Link to="/" style={location.pathname == "/" ? activeStyle : normalStyle} >Home</Link>
            <Link to="/registration" style={location.pathname == "/registration" ? activeStyle : normalStyle}>Registration</Link>
            <Link to="/searchbar" style={location.pathname == "/searchbar" ? activeStyle : normalStyle}>Search</Link>
        </div>
        {user ? <p>{user.email}</p> : <p>No user</p>}
            </nav>
    )
}

export default Navigationbar
 