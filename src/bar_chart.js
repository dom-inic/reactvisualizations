import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import axios from 'axios';



export default class BarChart extends Component {
  state = {dhisdata : []};


  async componentDidMount(){

    let result = await axios.get("https://json.link/S6LGvKZQLt.json")
    console.log(result.data.rows)
    this.setState({dhisdata: result.data})

  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'county'
  }
    render() {
        return (
            <div>

          <Bar
          data={this.state.dhisdata}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

  
                
            </div>
        )
    }
}
