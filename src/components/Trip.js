import "./TripStyle.css"
import TripData from "./TripData";

function Trip () {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
             <div classname="tripcard">
                <TripData 
                 className="t-image"
                 image= {"https://im.indiatimes.in/content/2023/Jun/Spend-Travel-Shop-Indonesia-Declares-5-Day-Weekend_6493ff2851033.jpg?w=1200&h=900&cc=1"}
                 heading="Trip to Indonesia"
                 text="Indonesia, country located off the coast of mainland Southeast
                     Asia in the Indian and Pacific oceans. It is an archipelago
                      that lies across the Equator and spans a distance
                     equivalent to one-eighth of Earth’s circumference.
                     The capital, Jakarta, is located near the northwestern coast of Java. In the early 21st century Indonesia was the most populous country in Southeast 
                     Asia and the fourth most populous in the world."
                />

                <TripData 
                 className="t-image"
                 image= {"https://im.indiatimes.in/content/2023/Jun/Spend-Travel-Shop-Indonesia-Declares-5-Day-Weekend_6493ff2851033.jpg?w=1200&h=900&cc=1"}
                 heading="Trip to Indonesia"
                 text="Indonesia, country located off the coast of mainland Southeast
                     Asia in the Indian and Pacific oceans. It is an archipelago
                      that lies across the Equator and spans a distance
                     equivalent to one-eighth of Earth’s circumference.
                     The capital, Jakarta, is located near the northwestern coast of Java. In the early 21st century Indonesia was the most populous country in Southeast 
                     Asia and the fourth most populous in the world."
                />

                <TripData 
                 className="t-image"
                 image= {"https://im.indiatimes.in/content/2023/Jun/Spend-Travel-Shop-Indonesia-Declares-5-Day-Weekend_6493ff2851033.jpg"}
                 heading="Trip to Indonesia"
                 text="Indonesia, country located off the coast of mainland Southeast
                     Asia in the Indian and Pacific oceans. It is an archipelago
                      that lies across the Equator and spans a distance
                     equivalent to one-eighth of Earth’s circumference.
                     The capital, Jakarta, is located near the northwestern coast of Java. In the early 21st century Indonesia was the most populous country in Southeast 
                     Asia and the fourth most populous in the world."
                />
             </div>
        </div>
    );
}

export default Trip;