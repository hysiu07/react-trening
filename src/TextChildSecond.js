import React from "react";


const TextChildSecond = (props) => {
    

    let name = 'Zbigniew'


    return(
        <div className="container">
            <p>Moje imie to: {props.name}</p>
            <p>Imie kolegi: {name}</p>
            <p>Numer user: {props.number} </p>
        </div>

    )







}

export default TextChildSecond