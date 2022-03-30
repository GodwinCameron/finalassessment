import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import axios from 'axios';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend);


const ChartOne = () => {

    let endpoint = "https://api.spacexdata.com/v5/launches";

    const [chartInfo, setChartInfo] = useState([]);


    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {


                let success = response.data.filter((item) => item.success == true).length;
                let fail = response.data.filter((item) => item.success == false).length;




                setChartInfo([success, fail]);

            })
    }, [])


    const data = {
        labels: ['Successes', 'Failures'],
        datasets: [
            {
                label: 'Mission Amount',
                data: chartInfo,
                backgroundColor: [
                    '#222222',
                    'rgb(170,170,170)',
                ],
                borderColor: [
                    '#222222',
                    '#222222',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Doughnut data={data} />
        </>
    )
}

export default ChartOne;











