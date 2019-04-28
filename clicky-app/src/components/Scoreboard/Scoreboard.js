import React from "react";
import "./scoreboard.css";

function Scoreboard(props){
    return (
        <div id="scoreboard" class="col-auto" >
            Score: {props.score}  | Top Score: {props.score}
        </div>
    );
}

export default Scoreboard;