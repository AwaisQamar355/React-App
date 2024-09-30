import React from "react";
import img from "../assets/1.png";
import img1 from "../assets/2.png";
import img2 from "../assets/3.png";
import './Ensdtyle.css';
function EndFooter(props){
    return(
        <>
        <div className={props.cName}>
            <div className={props.cName1}>
                <h1>{props.title1}</h1>
                <h2>{props.title2}</h2>
                <h3>{props.title3} : <span>{props.text}</span></h3>
                <h3>{props.title4} : <span>{props.text1}</span></h3>
                <h3>{props.title5} : <span>{props.text2}</span></h3>
                <div className={props.cName2}>
                    <h1>{props.title6}</h1>
                    <div className={props.cName3}>
                        <i	className="fa fa-facebook-square"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="	fa fa-linkedin-square"></i>
                    </div>
                </div>
            </div>
            <div className={props.cName4}>
                <h1>{props.title7}</h1>
                <ul>
                    <li>{props.title8}</li>
                    <li>{props.title9}</li>
                    <li>{props.title10}</li>
                    <li>{props.title11}</li>
                    <li>{props.title12}</li>
                </ul>
            </div>
            <div className={props.cName7}>
                <h1>{props.title13}</h1>
                <ul>
                    <li>{props.title14}</li>
                    <li>{props.title15}</li>
                    <li>{props.title16}</li>
                    <li>{props.title17}</li>
                    <li>{props.title18}</li>
                </ul>
            </div>
            <div className={props.cName5}>
                <h1>{props.title19}</h1>
                <h4>{props.title20}</h4>
                <div className={props.cName6}>
                    <img src={img}></img>
                    <img src={img1}></img>
                </div>
                <h4>{props.title21}</h4>
                <img src={img2}></img>
            </div>
        </div>
        <div className={props.cName8}>
        <h6>{props.title22}</h6>
        </div>
        </>
    )
}

export default EndFooter;













