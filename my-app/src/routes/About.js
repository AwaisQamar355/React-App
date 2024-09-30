import React from "react";
import Navbar from "../Mycomponenets/Navbar";
import Hero from "../Mycomponenets/Hero";
import EndFooter from "../Mycomponenets/EndFooter";
import './aout.css';
function About(){
    return(
        <>
        <Navbar />
        <Hero
         cName = "home-page"
         cName1 = "home2-page"
       title = "About"
       btnClass = "hide"
       />
       <div className="aout-page">
        <div className="aout1-page">
            <h1>Our History</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et aliquid natus vero repellat 
                minima illo, obcaecati nulla odio. Explicabo sapiente corporis possimus dolorem sit dignissimos 
                doloremque impedit enim quaerat.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et aliquid natus vero repellat 
                minima illo, obcaecati nulla odio. Explicabo sapiente corporis possimus dolorem sit dignissimos 
                doloremque impedit enim quaerat.
            </p>

            </div>
            <div className="aout1-page">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et aliquid natus vero repellat 
                minima illo, obcaecati nulla odio. Explicabo sapiente corporis possimus dolorem sit dignissimos 
                minima illo, obcaecati nulla odio. Explicabo sapiente corporis possimus dolorem sit dignissimos 
                minima illo, obcaecati nulla odio. </p>

            </div>
            <div className="aout1-page">
            <h1>Our Vision</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et aliquid natus vero repellat 
                </p>
            </div>
            
       </div>
       <EndFooter
       cName = "footer-page"
       cName1 = "footer1-page"
       cName2 = "footer2-page"
       cName3 = "footer3-page"
       cName4 = "footer4-page"
       cName5 = "footer5-page"
       cName6 = "footer6-page"
       cName7 = "footer7-page"
       cName8 = "footer8-page"
       title = "Trippy"
       title1 = "Contact"
       title3 = "Address"
       title4 = "Phone"
       title5 = "Hours"
       title6 = "Follow Us:"
       title7 = "About"
       title8 = "Home"
       title9 = "About"
       title10 = "Service"
       title11 = "Contact"
       title12 = "Sign Up"
       title13 = "My Account"
       title14 = "Sign In"
       title15 = "Track My Location"
       title16 = "View Cart"
       title17 = "My Wishlist"
       title18 = "Help"
       title19 = "My Wishlist"
       title20 = "Form My store Or Google Play"
       title21 = "Secured Payment Getways"
       title22 = "@Copyright2023 - Muhammd Awais Qamar Full Stack Develope"
       text = "Usma Masjid Jameel Colony Kabirwala"
       text1 = "0322-6550052 +923065874752"
       text2 = "8:00AM to 10PM Monday to Sunday"
       />
        </>
    )
}

export default About;