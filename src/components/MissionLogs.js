import axios from "axios";
import React from "react";
import MissionCard from "./MissionCard";
import { useEffect, useState } from "react";

const MissionLogs = () => {

    let endpoint = "https://api.spacexdata.com/v3/missions";

    const [genMissionCard, setGenMissionCard] = useState([]);


        useEffect(() =>{
            axios.get(endpoint)

            .then((response) => {
                let data = response.data;

                const missions = [];

                for (let i = 0; i < data.length; i++) {
                    missions.push({
                        name: data[i].mission_name,
                        discription: data[i].description,
                        manu: data[i].manufacturers,
                        manuLink: data[i].website

                    });
                }

                let startItem = missions.map((item) => <MissionCard mname={item.name} mdisc={item.discription} mmanu={item.manu} mlink={item.manuLink} />)
                setGenMissionCard(startItem);
            })
        }, []);

    return (
        <div className="cards-holder">
            {genMissionCard}
        </div>
    );
}

export default MissionLogs;