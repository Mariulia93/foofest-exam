import React from "react";

function AvailableSpots(props){
return(
    
        <tr>
            <td>{props.availableSpot.area}</td>
            <td>{props.availableSpot.spots}</td>
            <td>{props.availableSpot.available}</td>
        </tr>
    // <div>
    //     <p>{props.area}</p>
    //     <p>{props.spots}</p>
    //     <p>{props.available}</p>
    // </div>
)
}
export default AvailableSpots;