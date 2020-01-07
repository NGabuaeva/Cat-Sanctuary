import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getCat } from '../reducers/cat'
import { useParams } from "react-router";

const SelectedCat = () => {
  const { catId } = useParams()
  console.log('catId:', catId)
  const cat = useSelector(state => state.cat)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getCat(catId)) }, [])
  return (
    <div className='Single_cat'>
      <img className='image' src={cat.imageUrl} />
    </div>
  )
}


export default SelectedCat
