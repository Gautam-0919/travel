import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        <>

        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg= "https://ipt.imgix.net/201352/x/0/travel-photography-explained-4.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
        title= "Service"
        btnClass="hide"
         /> 
         <Trip />
         <Footer />       
        </>
        
        
        
    )

}

export default Service;