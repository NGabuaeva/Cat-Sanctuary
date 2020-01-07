import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getCats } from '../reducers/cats'

function Cats() {
  const cats = useSelector(state => state.cats)
  const dispatch = useDispatch()

  function getData() {
    return dispatch(getCats)
  }

  useEffect(() => { dispatch(getCats()) }, [])
  console.log('cats:', cats)
  return (
    <div className='catList'>
      <ul>
        {cats.map(cat => (<li key={cat.id}>{cat.name}</li>))}
      </ul>
    </div>
  )
}


export default Cats
