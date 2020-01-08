import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getCat } from '../reducers/cat'
import { useParams } from "react-router";
import Form from './Form'

const SelectedCat = () => {
  const [form, setForm] = useState('')
  const { id } = useParams()
  console.log('cat id:', id)
  const cat = useSelector(state => state.cat)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getCat(id)) }, [])
  return (
    <div className='cat'>
      <img className='image' src={cat.imageUrl} />
      {cat.name ? <h3>Name: {cat.name}</h3> : ''}
      {cat.breed ? <h3>Breed: {cat.breed}</h3> : ''}
      {cat.age ? <h3>Age: {cat.age}</h3> : ''}
      {cat.hobby ? <h3>Hobby: {cat.hobby}</h3> : ''}
      {cat.favoriteSnack ? <h3>Favorite Snack: {cat.favoriteSnack}</h3> : ''}
      <button onClick={() => !form ? setForm(<Form />) : setForm('')} className='button'>UPDATE</button>
      {form ? <Form cat={cat} /> : ''}
    </div>
  )
}


export default SelectedCat
