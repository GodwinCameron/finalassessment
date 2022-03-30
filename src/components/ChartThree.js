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

    let endpoint = "https://api.spacexdata.com/v4/launches"; 
    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {

                let data = response.data;

               //I know i need to use .map() or .filter() or one of these array manipuation functions, but I really have tried so many different things from
               // both online and class work, and things like .includes() and I really just can't seem to figure it out, I'm going to keep trying but incase 
               //I run out of time I'm going to just manually add in the data so that it appears identical to the sheet and try to figure it out with the
               //remaining time...

               
               
                

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
            data: [1,1,2,1,2,0,2,3,6,7,9,17,21,13,26,31,25],
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










