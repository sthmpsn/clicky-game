import React from "react";
import "./scoreboard.css";

function Scoreboard(props){
    return (
        <div id="scoreboard" className="col-12 simpson-red h2 text-center my-4 d-flex justify-content-center" >
            <div className="row">
                <div className="col-12 col-md-auto px-5">Score: <span className="scores px-3">{props.score}</span></div>
                <div className="col-12 col-md-auto px-5">Top Score: <span className="scores px-3">{props.topScore}</span></div>
            </div>
        </div>
    );
}

export default Scoreboard;