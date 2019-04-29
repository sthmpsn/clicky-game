import React from "react";
import "./card.css";

function Card(props) {
    return <img className="card-imgs img-thumbnail m-2" alt={props.name} src={props.image} onClick={() => props.selectCard(props.id)}/>
}

export default Card;