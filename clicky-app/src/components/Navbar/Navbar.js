import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-auto">
                Clicky Game
            </div>
            <div className="col-auto">
                <h1>The Simpsons Edition</h1>
            </div>
            <Scoreboard />
        </nav>

    );
}

export default Navbar;