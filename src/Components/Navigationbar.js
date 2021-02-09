import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navigationbar = () => {
    return (
        <nav className="navbar">
        <div >
                <Link to="/" style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}}>Home</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/Searchbar">Search</Link>
            </div>
            </nav>
    )
}

export default Navigationbar
 