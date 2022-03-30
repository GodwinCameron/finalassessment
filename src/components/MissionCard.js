import React from "react";

const MissionCard = (props) => {

    let discription = props.mdisc.substring(0,255);

    return(
        <div className="mission-card">
            <br></br>
            <h2>{props.mname}</h2>
            <br></br>
            <p>{discription}...</p>
            <br></br>
            <h3>{props.mmanu}</h3>
            <br></br>
            <a href={props.mlink}><p>Click to See Website</p></a>

        </div>
    );
};

export default MissionCard;