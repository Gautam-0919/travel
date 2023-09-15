import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About(){
    return(
        <>
        
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg= "https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
        title= "About"
        btnClass="hide"
         />   
          <Footer />        
        </>
        
        
    )

}

export default About;