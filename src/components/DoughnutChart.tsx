"use client"
import React from 'react'
import {Chart as ChartJs , ArcElement,Tooltip,Legend} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement,Tooltip,Legend);

const DoughnutChart =({accounts}:DoughnutChartProps)=>{
    const data={
            datasets:[
                        {
                            label:'Banks',
                            data:[1333,25555,3777],
                            backgroundColor:['#0747b6','#227b5','#2f91fa']
                        }
                     ],
                     labels:['Bank1 ', 'Bank 2', 'Bank 3']
    }
  return( <Doughnut data={data} options={{
    cutout:'60%',
    plugins:{
        legend:{
            display:false
        }
    }
  }} />
  )
}

export default DoughnutChart
