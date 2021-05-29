import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { dhisdata } from "./data";

export default class BarChart extends Component {
  state = {
    dhisdata: [],
  };

  async componentDidMount() {
    let result = await axios.get("https://json.link/S6LGvKZQLt.json");
    console.log(result.data);
    // April 
    const dipensedApril = result.data.rows[0].map((test) => test);
    console.log(dipensedApril[2])
    const MOH711c = result.data.rows[4].map((llinschildA) => llinschildA);
    console.log(MOH711c[2])
    const MOH711A =  result.data.rows[7].map((llinsclients) => llinsclients);
    console.log(MOH711A[2])

    console.log(MOH711A)
    const totalllins = parseFloat(MOH711c[2])+parseFloat(MOH711A[2]);
    console.log(totalllins);

    // March
    const dispensedMarch = result.data.rows[3].map((dispensed) => dispensed);
    console.log(dispensedMarch[2])
    const MOH711CM = result.data.rows[1].map((llinschildM) => llinschildM);
    console.log(MOH711CM[2]);
    const MOH711AM = result.data.rows[6].map((llinclientsM) => llinclientsM);
    console.log(MOH711AM[2]);

    const totalllinsM = parseFloat(MOH711CM[2]) + parseFloat(MOH711AM[2]);
    console.log(totalllinsM)

    // February
    const MOH711CF = result.data.rows[2].map((llinchildF) => llinchildF);
    console.log(MOH711CF[2])
    const MOH711AF = result.data.rows[5].map((llinclientsF)=> llinclientsF);
    console.log(MOH711AF[2])
    this.setState({
      dhisdata: result.data,
    });
    console.log(this.dipensedApril1);
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "county",
  };
  render() {
    return (
      <div>
        <Bar
          data={this.state.dhisdata}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}
