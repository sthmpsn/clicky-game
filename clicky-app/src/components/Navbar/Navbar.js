import React from "react";
import "./navbar.css";
import brand from "../../assets/images/brand1.png";
import Scoreboard from "../Scoreboard/Scoreboard";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div id="nav-background"></div>
            <div className="col-auto col-lg-4 simpson-red h2 text-center">
                Clicky Game
            </div>
            <div className="col-auto col-lg-4">
                <img id="brand" src={brand} alt={brand + " Logo"}/>
            </div>
            <Scoreboard />
        </nav>

    );
}

export default Navbar;