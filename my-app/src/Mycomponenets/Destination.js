import React from "react";
import '../Mycomponenets/destinationstyle.css';
import img from '../assets/1.jpg';
import img1 from '../assets/2.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/8.jpg';
function Destination(props){
    return(
        <>
        <div className={props.cName}>
            <h1>{props.title}</h1>
            <p>{props.text} </p>
        </div>
        <div className={props.cName1}>
            <div className={props.cName2}>
                <h2>{props.title1}</h2>
                <p>
                {props.text1}
                </p>
            </div>
            <div className={props.cName3}>
                <div className={props.cName4}>
                    <img src={img}></img>
                </div>
                <div className={props.cName5}>
                    <img src={img1}></img>
                </div>
            </div>
        </div>

        <div className={props.cName1}>
        <div className={props.cName6}>
                <div className={props.cName4}>
                    <img src={img2}></img>
                </div>
                <div className={props.cName5}>
                    <img src={img3}></img>
                </div>
            </div>
            <div className={props.cName2}>
                <h2>{props.title1}</h2>
                <p>
                {props.text1}
                </p>
            </div>
           
        </div>
        </>
    )
}

export default Destination















