import React from "react";
import './Style.css';
import chatGPT_Response from "./AIPlanner";

const TripPlanner = () => {
    const createUserQuery = () => {
        const startingLocation = document.querySelector("#starting-point").value;
        const endingLocation = document.querySelector("#ending-point").value;
        let noOfDays = document.querySelector("#number-of-days").value;
        
        if (noOfDays*0 != 0) {
            console.log("not a number");
            return;
        }

        if (noOfDays == 0) {
            return
        } else {
            const query = `plan a ${noOfDays} day trip from ${startingLocation} to ${endingLocation}.`;
            chatGPT_Response(query);
        }
    };
    
    return (
        <React.Fragment>
            <div className="trip-planner">
                <div className="input-fields-for-planner">
                    <input id="starting-point" type="text" placeholder="Starting point..."/>
                    <input id="ending-point" type="text" placeholder="Ending point..."/>
                    <input id="number-of-days" type="text" placeholder="Number of days.."/>

                    <button id="generate-trip-btn" onClick={() => {createUserQuery()}}>Generate?</button>
                </div>

                <div className="planning-img">
                    <img src="./Assets/travel.svg" />
                </div>
            </div>

            <div className="planned-trip">
            </div>
        </React.Fragment>
    );
}

export default TripPlanner;