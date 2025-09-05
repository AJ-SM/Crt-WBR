
"use client"
import React from 'react';
import {Chart,LinearScale,CategoryScale,Title,Tooltip,Legend,Filler,PointElement,LineElement, LineController} from "chart.js"
import { Line } from 'react-chartjs-2';



Chart.register(LinearScale,CategoryScale,Title,Tooltip,Legend,Filler,PointElement,LineElement,LineController,Legend)


export default function Charts(){
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  
  datasets: [
    
    {
      label: 'Dataset 1',
      data: [12,13,123,32,16,35,204],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [12,76,54,14,75,234,64],
      borderColor: 'rgb(53, 162, 235)',
      fill: false,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  const options = {
  
    
    scales: {
      x: {
        grid: {
          display: true,
        },
        labels: labels,
        ticks: {
          color: "red",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: true,
        },
        min: 0,
        max: 500,
        ticks: {
          stepSize: 10,
          color: "green",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
    },
  };



  return(<>
<div className=' flex h-screen w-screen justify-between bg-slate-950'> 

  <div className="h-150 w-250">
    <Line options={options} data={data} />
  </div>
    <div className='h-150 w-100 border-2 border-amber-50 m-8 rounded-3xl p-2'>
      <div className=' flex justify-center  w-93 text-3xl font-extrabold'> Configs</div>
      
      


    </div>


</div>

  
  
  
  
  
  
  
  </>)
}