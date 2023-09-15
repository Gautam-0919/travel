import DestinationData from "./DestinationData";
import "./DestinationStyle.css" 

const Destination = () => { 
    return (
       <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot,
            within a time frame.</p>

       <DestinationData 
       className="first-des"
       heading="Taal Volcano, Batangas"
       text="Taal Volcano is the second most active volcano found in the province of Batangas. 
       A complex volcano in the middle of Taal Lake and is often called an island within a lake, 
       that is an island within a lake that is on an island as well as one of the lowest volcano 
       in the world having 311 meters elevation. 
       It offers a very a spectacular view seen from Tagaytay Ridge. 
       Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
    
       img1={"https://live.staticflickr.com/65535/50071765342_19660a284c_b.jpg"}
       img2={"https://pbs.twimg.com/media/EOFHZDxVUAE7YDa.jpg"}
       
       />
       <DestinationData 
       className="first-des-reverse"
      heading="Mt. Daguldol, Batangas"
      text="Mt. Daguldol is a coastal mountain located in the province of Batangas. 
            It offers a scenic view of nearby Batangas mountains and beaches. 
            Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet.
            Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan,
            Batangas. It is bound between the municipality of San Juan and Lobo. 
            The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain"
   
      img1={"https://theadventurousherbivore.files.wordpress.com/2018/05/2018-05-13-16-06-06.jpg"}
      img2={"https://hiketomountains.com/wp-content/uploads/2022/01/Mt-Daguldol-Day-Hike-29.jpg"}
       
      />
      
     
     
      </div>

     

    );

};

export default Destination;