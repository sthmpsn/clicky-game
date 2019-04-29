import React from "react";
import "./scoreboard.css";

function Scoreboard(props){
    return (
        <div id="scoreboard" className="col-auto col-lg-4 simpson-yellow h2 text-center" >
            Score: {props.score} <br/>
            Top Score: {props.score}
        </div>
    );
}

export default Scoreboard;