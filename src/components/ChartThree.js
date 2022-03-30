import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

const ChartThree = () => {

    const [values, setValues] = useState([]);
    const pushedValues = [];

    let endpoint = "https://api.spacexdata.com/v4/launches"; 
    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {

                let data = response.data;

               const year1 = data.filter(data => data.date_local.includes("2006"));
               const year2 = data.filter(data => data.date_local.includes("2007"));
               const year3 = data.filter(data => data.date_local.includes("2008"));
               const year4 = data.filter(data => data.date_local.includes("2009"));
               const year5 = data.filter(data => data.date_local.includes("2010"));
               const year6 = data.filter(data => data.date_local.includes("2011"));
               const year7 = data.filter(data => data.date_local.includes("2012"));
               const year8 = data.filter(data => data.date_local.includes("2013"));
               const year9 = data.filter(data => data.date_local.includes("2014"));
               const year10 = data.filter(data => data.date_local.includes("2015"));
               const year11 = data.filter(data => data.date_local.includes("2016"));
               const year12 = data.filter(data => data.date_local.includes("2017"));
               const year13 = data.filter(data => data.date_local.includes("2018"));
               const year14 = data.filter(data => data.date_local.includes("2019"));
               const year15 = data.filter(data => data.date_local.includes("2020"));
               const year16 = data.filter(data => data.date_local.includes("2021"));
               const year17 = data.filter(data => data.date_local.includes("2022"));


               pushedValues.push(year1.length,year2.length,year3.length,year4.length,year5.length,year6.length,year7.length,year8.length,year9.length,year10.length,year11.length,year12.length,year13.length,year14.length,year15.length,year16.length,year17.length);
               
               setValues(pushedValues,[]);

               // I DID IT!!!!!!! LETS GOO!!!!!!
                

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
      
      const labels = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Launches Per Year',
            data: values, 
            borderColor: '#222222',
            backgroundColor: '#222222',
          }
        ],
      };


    return(
        <>
        <Line options={{ maintainAspectRatio: false }} width={10}
  height={5} data={data}/>
        </>
    )
}

export default ChartThree;










