
import { useState } from "react";
import "../DestinationPage.css";


const DestinationPage = () => {
    return (
        
        // <div><Navbar></Navbar></div>
        <div>
        <TitleDiv/>
        <DescriptionDiv/>
        <Activites/>
        </div>
    );
}

const TitleDiv = (props: Object) => {
    return (
        <div className="TitleDiv">
        <h1> Paris </h1>
        <h3> France </h3>
        {/* <h1> Paris {props.city}</h1> */}
        {/* <h3>{props.country}</h3> */}
        </div>
    );
}

const DescriptionDiv = () => {
    return (
        <div>
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
        <h4>Ting å gjøre</h4>
        <ActivityBox/>
        <ActivityBox/>
        <ActivityBox/>
        </div>
    );
} 

const ActivityBox = (props:Object) => {
    return (
        <div className="ActivityBox">
            <p>Fotball</p>
        </div>
    );
}


export default DestinationPage