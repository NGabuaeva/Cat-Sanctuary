import React, { Component } from 'react';
import * as d3 from "d3";


class Chart extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.drawChart();
    console.log('props:', this.props)
  }

  drawChart() {
    const values = this.props.values
    const keys = this.props.keys
    const w = this.props.width
    const h = this.props.height
    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

    svg.selectAll("rect")
      .data(values)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    svg.selectAll("text")
      .data(keys)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
  }

  render() {
    return <div></div>
  }
}

export default Chart
