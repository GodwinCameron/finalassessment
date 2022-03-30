import React from "react";
import axios from "axios";
import { useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const ChartTwo = () => {

    let endpoint = "https://api.spacexdata.com/v4/rockets";


    const [chartInfo1, setChartInfo1] = useState([]);
    const pushedChartInfo1 = [];
    const [chartInfo2, setChartInfo2] = useState([]);
    const pushedChartInfo2 = [];
    const [labeInfo, setLabeInfo] = useState([]);
    const pushedLabelInfo = [];
    const [dataSetLabel1, setDataSetLabel1] = useState([]);
    const pushedDataSetLabel1 = [];
    const [dataSetLabel2, setDataSetLabel2] = useState([]);
    const pushedDataSetLabel2 = [];

    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {

                let data = response.data;


                for (let i = 0; i < data.length; i++) {
                    pushedChartInfo1.push(
                        data[i].first_stage.thrust_sea_level.kN
                    )
                    
                }
                for (let i = 0; i < data.length; i++) {
                    pushedChartInfo2.push(
                        data[i].first_stage.thrust_vacuum.kN
                    )
                    
                }

                pushedLabelInfo.push(
                    data[0].name,
                    data[1].name,
                    data[2].name,
                    data[3].name
                )

                let object = data[0].first_stage;
                pushedDataSetLabel1.push(
                    Object.keys(object)[0]
                )

                let object2 = data[0].first_stage;
                pushedDataSetLabel2.push(
                    Object.keys(object2)[1]
                )

                setDataSetLabel1(pushedDataSetLabel1,[]);
                setDataSetLabel2(pushedDataSetLabel2,[]);
                setLabeInfo(pushedLabelInfo,[]);
                setChartInfo1(pushedChartInfo1,[]);
                setChartInfo2(pushedChartInfo2,[]);
            })
    }, [])



    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      
      const labels = labeInfo;
      
      const data = {
        labels,
        datasets: [
          {
            label: dataSetLabel1,
            data: chartInfo1,
            backgroundColor: '#222222',
          },
          {
            label: dataSetLabel2,
            data: chartInfo2,
            backgroundColor: 'rgb(170,170,170)',
          },
        ],
      };


    return(
        <>
        <Bar options={options} data={data} />
        </>
    )
}

export default ChartTwo;







