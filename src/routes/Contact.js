import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact(){
    return(
        <>

        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg= "https://assets.weforum.org/article/image/8tRX5dc449USpSXA4jCfKtGUZ1IkHdv21KJLAycctOA.jpg"
        title= "Contact"
        btnClass="hide"
         />  
         <Footer />      
        </>
        
        
        
        
    )

}

export default Contact;