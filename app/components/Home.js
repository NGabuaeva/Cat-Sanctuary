import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getCats } from '../reducers/cats'
import * as d3 from 'd3'


//home page component
const Home = () => {
  const dispatch = useDispatch()

  //fetch all cats from the database using a thunk and update the state
  useEffect(() => {
    dispatch(getCats())

  }, [])

  //grab all cats from the state
  const cats = useSelector(state => state.cats)

  //get all the favorite snacks
  const snacks = cats.map(cat => cat.favoriteSnack)

  //create an object with snacks-amounts of cats pairs
  const snacksObj = snacks.reduce((accum, snack) => {
    if (snack in accum) { accum[snack]++ }
    else { accum[snack] = 1 }
    return accum
  }, {})

  //get snacks' names as an array
  const keys = Object.keys(snacksObj)
  //get snacks amounts as an array
  const values = Object.values(snacksObj)

  //set up dimensions for the chart
  const w = 300
  const h = 60

  //create the chart
  function drawChart() {
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
      .attr("y", (d, i) => h - 30)
  }
  drawChart()
  return (
    <div>
      <h1 className='componentTitle'>Welcome to the Cat Sanctuary!</h1>
      <h3 className='componentTitle'>Favorite snacks:</h3>

      <div id='chart'>
      </div>
    </div>
  )
}
export default Home
