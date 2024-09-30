import React from "react";
import './Tripstype.css';
// import Navbar from "./Navbar";
import img from '../assets/6.jpg';
import img1 from '../assets/4.jpg';
import img2 from '../assets/3.jpg';
function Trip(props){
    return(
        <>     
        {/* <Navbar /> */}
        <div className={props.cName}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        <div className={props.cName1}>
            <div className={props.cName2}>
                <div className={props.cName3}>
                    <img src={img}></img>
                </div>
                <div className={props.cName4}>
                    <h1>{props.title1}</h1>
                    <p>{props.text1}</p>
                </div> 
            </div>
            <div className={props.cName2}>
                <div className={props.cName3}>
                    <img src={img1}></img>
                </div>
                <div className={props.cName4}>
                    <h1>{props.title2}</h1>
                    <p>{props.text1}</p>
                </div> 
            </div>
            <div className={props.cName2}>
                <div className={props.cName3}>
                    <img src={img2}></img>
                </div>
                <div className={props.cName4}>
                    <h1>{props.title3}</h1>
                    <p>{props.text1}</p>
                </div> 
            </div>
            
        </div>
        </>
    )
}

export default Trip;













