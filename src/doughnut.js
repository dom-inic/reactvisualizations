import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import React, { Component } from 'react'


const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };



export default class DoughNut extends Component {

    
    render() {
        return (
            <div>
                <Doughnut data={data} />
            </div>
        )
    }
}
