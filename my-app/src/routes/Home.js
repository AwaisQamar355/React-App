import React from "react";
import Navbar from "../Mycomponenets/Navbar";
import Hero from "../Mycomponenets/Hero";
import Trip from "../Mycomponenets/Trip";
import Destination from "../Mycomponenets/Destination";
import EndFooter from "../Mycomponenets/EndFooter";
function Home(){
    return(
        <>
        <Navbar />
       <Hero 
       cName = "home-page"
       cName1 = "home1-page"
       title = "Your Journey Your Story"
       text = "Chose Your Favourite Destination."
       buttontext = "Traval Plan"
       btnClass = "show"
       />
       <Destination 
       cName = "des-page"
       title = "Populor Destinations"
       text = "Tour give you the opportunity to saa a lot, within a time frame"
       cName1 = "des2-page"
       cName2 = "des3-page"
       cName3 = "des4-page"
       cName4 = "des5-page"
       cName5 = "des6-page"
       cName6 = "des7-page"
       title1 = "Embark on a Captivating London Expedition"
       text1 = "Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour Immerse yourself in the rich tapestry of history, culture. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour. Immerse yourself in the rich tapestry of history, culture. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's  most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour. Immerse yourself in the rich tapestry of history, culture. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour. Immerse yourself in the rich tapestry of history, culture. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour. Immerse yourself in the rich tapestry of history, culture. Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour.Discover the charm and allure of one of the world's most iconic cities with our exclusive London tour."
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
       title1 = "Trippy"
       title2 = "Contact"
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

export default Home;






