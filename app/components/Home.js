import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getCats } from '../reducers/cats'
import * as d3 from 'd3'
import Chart from './Chart'

const Home = () => {
  const [catData, setCatData] = useState({ cats: [] })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCats())
  }, [])
  console.log('state', useSelector(state => state))
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
  console.log('type', typeof values[0])
  console.log('values:', values)



  return (
    <div>
      <h1 className='componentTitle'>Welcome to the Cat Sanctuary!</h1>

      <div id='chart'>
        <h3>Favorite snacks:</h3>
        <Chart values={values} keys={keys} width={700} height={200} />
      </div>
    </div>
  )
}
export default Home
