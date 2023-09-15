import "./TripStyle.css"
 

function TripData(props) {
    return (
      <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="img"/>
            {/* <img src={props.img1} alt="img"/>
            <img src={props.img1} alt="img"/> */}
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
       
      </div>
    );
 }

 export default TripData;