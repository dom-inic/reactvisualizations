import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2'

const DynamicChart = () => {
    const [chartData, setChartData]  = useState({});
    // const []

    // const []

 const Chart = () => {
        let AprilTotalllins = [];
        let Aprilquantity = [];
        let lists = [];
        let months = [];

        axios.get("https://json.link/S6LGvKZQLt.json")
        .then(result => {
            console.log(result)
            console.log(result.data)
            // April 
            const dipensedApril = result.data.rows[0].map((test) => test);
            // console.log(dipensedApril[2]);
            const MOH711c = result.data.rows[4].map((llinschildA) => llinschildA);
            // console.log(MOH711c[2]);
            const MOH711A =  result.data.rows[7].map((llinsclients) => llinsclients);
            // console.log(MOH711A[2])
        
            console.log(MOH711A);
            const totalllins = parseFloat(MOH711c[2])+parseFloat(MOH711A[2]);
            // console.log(totalllins);
        
            // March
            const dispensedMarch = result.data.rows[3].map((dispensed) => dispensed);
            // console.log(dispensedMarch[2]);
            const MOH711CM = result.data.rows[1].map((llinschildM) => llinschildM);
            // console.log(MOH711CM[2]);
            const MOH711AM = result.data.rows[6].map((llinclientsM) => llinclientsM);
            // console.log(MOH711AM[2]);
        
            const totalllinsM = parseFloat(MOH711CM[2]) + parseFloat(MOH711AM[2]);
            // console.log(totalllinsM);
        
            // February
            const MOH711CF = result.data.rows[2].map((llinchildF) => llinchildF);
            // console.log(MOH711CF[2]);
            const MOH711AF = result.data.rows[5].map((llinclientsF)=> llinclientsF);
            // console.log(MOH711AF[2]);
            const totalllinsF = parseFloat(MOH711CF[2]) + parseFloat(MOH711AF[2]);
            const threemonthtotalllins = parseFloat(totalllins) + parseFloat(totalllinsM) + parseFloat(totalllinsF);
            console.log(threemonthtotalllins)
            // console.log(totalllinsF);
            lists.push(parseInt(totalllinsF));
            lists.push(parseInt(totalllinsM));
            lists.push(parseInt(totalllins));
            console.log(lists)
            console.log(result.data.metaData.items.LAST_3_MONTHS.name)
            console.log(result.data.metaData.items[1])
            
            // lists.push(parseInt(totalllinsF));
            // lists.push(parseInt(totalllinsM));
            Aprilquantity.push(parseInt(0));
            Aprilquantity.push(parseInt(dispensedMarch[2]));
            Aprilquantity.push(parseInt(dipensedApril[2]));
            console.log(Aprilquantity);
            months.push('February 2021');
            months.push('March 2021');
            months.push('April 2021');
            // for(const dataObj of result.data.metaData.items){
            //     months.push(parseInt(dataObj.name));

            // }
            setChartData({
                labels: months,
                datasets: [{
                    // barPercentage: 2.0,
                    // barThickness: 200,
                    // // maxBarThickness: 100,
                    // minBarLength: 2,
                                             label: 'Total LLINS',
                                             data: lists,
                                             backgroundColor: [
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                             ],
                            
                                             borderWidth: 1
                                         },
                                         {
                                            label: 'total quantity dispensed',
                                            data: Aprilquantity,
                                             borderColor: [
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                             ],
                                            }
                                        ]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
      }, []);
      return(
          <div className="App">
              <h1>April Bar Chart Representation</h1>
              <div>
                  <Bar
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "value", display: true },
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                  />
              </div>
          </div>
      )
}

export default DynamicChart;