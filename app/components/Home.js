import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getCats } from '../reducers/cats'
import * as d3 from 'd3'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getCats()) }, [])
  const cats = useSelector(state => state.cats)
  const snacks = cats.map(cat => cat.favoriteSnack)

  return (
    <div>
      <h1 className='componentTitle'>Welcome to the Cat Sanctuary!</h1>

    </div>
  )
}
export default Home
