import React from "react";
import "./navbar.css";
import brand from "../../assets/images/simpsons/brand1.png";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div id="nav-background"></div>
            <div className="col-auto">
                <img id="brand" src={brand} alt={brand + " Logo"}/>
            </div>
            <div id="titleBox" className="col-auto simpson-yellow h2 text-center bg-secondary rounded p-3">
                <a href="#sec-game">Clicky Game</a>
            </div>
        </nav>

    );
}

export default Navbar;