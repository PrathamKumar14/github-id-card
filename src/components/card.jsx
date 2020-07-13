import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <div className="line"></div>
        </div>
    )
}

export default Card;