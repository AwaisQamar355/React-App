import React from "react";
import Navbar from "../Mycomponenets/Navbar";
import Hero from "../Mycomponenets/Hero";
import EndFooter from "../Mycomponenets/EndFooter";
import Trip from "../Mycomponenets/Trip";
function Services(){
    return(
        <>
        <Navbar />
        <Hero
         cName = "home-page"
         cName1 = "home3-page" 
       title = "Services"
       btnClass = "hide"
        />
        <Trip 
       cName = "trip-page"
       title = "Recent Trips"
       text = "You can discover unique destintions using Google Maps."
       cName1 = "trip1-page"
       cName2 = "trip2-page"
       cName3 = "trip3-page"
       cName4 = "trip4-page"
       title1 = "Trip in Indonesia"
       text1 = "Embark on a mesmerizing journey through the enchanting landscapes of Indonesia, where every step unveils a tapestry of diverse cultures, lush greenery, and pristine beaches. Your Indonesian adventure begins in Jakarta, the bustling capital, where modern skyscrapers stand tall alongside historic landmarks.Your Indonesian adventure begins in Jakarta, the bustling capital, where modern skyscrapers stand tall alongside historic landmarks."
       title2 = "Trip in Malaysia"
       title3 = "Trip in France"
       />
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

export default Services;