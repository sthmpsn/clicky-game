import React from "react";
import "./card.css";

function Card(props) {
    return(
        <div className="card">
            <div className="img-container" onClick={() => props.selectCard(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>        
        </div>
    );
}

export default Card;