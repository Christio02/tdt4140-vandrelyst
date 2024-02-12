
// import { useState } from "react";
import "../style/DestinationPage.css";
import CityPhoto from "./paris.jpg"; // Tell webpack this JS file uses this image

// console.log(cityPhoto);



const DestinationPage = () => {
    return (
        
        // <div><Navbar></Navbar></div>
        <div>
        <PhotoOfCity/>
        <TitleDiv/>
        <AllRatings/>
        <DescriptionDiv/>
        <Activites/>
        </div>
    );
}

const AllRatings = () => {
    return (
        <div className="AllRatings">
        <StarRating/>
        <PriceRating/>
        <SeasonRating/>
        <TempRating/>
        </div>
    )
}

const StarRating = () => {
    let numberOfStars = 5;
    // Henter antall stjerner fra DB
    let actualRating = 3
    let numberOfEmptyStars = numberOfStars - actualRating;
    let emptyStar = <span>☆</span>;
    let fullStar = <span>★</span>
    
    return (
        <div className="StarRating" id="Rating">
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        </div>
    )
}
const PriceRating = () => {
    let numberOfDollarSigns = 3;
    // Henter antall stjerner fra DB
    let actualRating = 3
    let numberOfEmptyStars = numberOfDollarSigns - actualRating;
    let dollarSign = <span>$</span>

    return (
        // Database hente data
        <div className="PriceRating" id="Rating">
        <span>$</span>
        <span>$</span>
        <span>$</span>
        <span>$</span>
        </div>
    )
}

const SeasonRating = () => {
    // hente fra DB
    let seasonRating = 'Sommer';

    return (
        // Database hente data
        <div className="SeasonRating" id="Rating">
        <span>{seasonRating}</span>
        </div>
    )
}

const TempRating = () => {
    // hente fra DB
    let tempRating = '21,0';

    return (
        // Database hente data
        <div className="SeasonRating" id="Rating">
        <span>{tempRating}</span>
        </div>
    )
}



const PhotoOfCity = () => {
    return (
        <div className="PhotoOfCity">
        <img src={CityPhoto} alt="Photo of city"/>;
        </div>
    )
}

const TitleDiv = (props: Object) => {
    return (
        <div className="TitleDiv">
        <h1> Paris </h1>
        <h2> France </h2>
        {/* <h1> Paris {props.city}</h1> */}
        {/* <h3>{props.country}</h3> */}
        </div>
    );
}

const DescriptionDiv = () => {
    return (
        <div>
            <h3>Beskrivelse</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem facere ex cum expedita aliquam eum, rem dignissimos molestiae 
                blanditiis dolore sint beatae repellat quam! Deserunt assumenda reiciendis 
                pariatur inventore et!</p>
        </div>
    )
}

const Activites = () => {
    let thingsToDo = {
        football : "Football"
    };
    return (
        <div className="activityDescriptions">
        <h3>Ting å gjøre</h3>
        <ActivityBox/>
        <ActivityBox/>
        <ActivityBox/>
        </div>
    );
} 

const ActivityBox = (props:Object) => {
    return (
        <div className="ActivityBox">
            <span>Fotball</span>
        </div>
    );
}


export default DestinationPage