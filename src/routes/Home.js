import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero" 
        heroImg= "https://assets.cntraveller.in/photos/648c1e413de70554923b9271/3:2/w_7950,h_5300,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg"
        title= "Your Journey Your Story"
        text= "Choose your favourite destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
         />
         <Destination />     
         <Trip /> 
         <Footer />
        </>
    )

}

export default Home;