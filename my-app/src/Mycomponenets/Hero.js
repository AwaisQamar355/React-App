import React from "react";
import '../Mycomponenets/Herostyle.css';
function Hero(props) {
    return(
        <>
         <div className={props.cName}>
            <div className={props.cName1}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                {/* <a href=""><button>Traval Plan</button></a> */}
                <a href=""><button className={props.btnClass}>{props.buttontext}</button></a>
            </div>
        </div> 
        </>
    )
}

export default Hero;







