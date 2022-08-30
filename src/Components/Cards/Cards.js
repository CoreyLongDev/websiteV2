import React from "react";
import "./cards.css"


function Cards(props) {

    return (

        <div>
            {props.imgURL}
            {props.name}
            {props.subTitle}
            {props.info}
            {props.infoTwo}
            {props.githubLink}
            {props.liveSite}
        </div>
    )
}

export default Cards;