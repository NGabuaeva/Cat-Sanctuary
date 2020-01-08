import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getCats } from '../reducers/cats'
import { Link } from 'react-router-dom'

function Cats() {
  const cats = useSelector(state => state.cats)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getCats()) }, [])
  console.log('cats:', cats)
  return (
    <div className='catList'>

      {cats.map(cat => (<div className='singleCat' key={cat.id}>
        <Link to={`/cats/${cat.id}`}>
          <img className='catImg' src={cat.imageUrl} />
          <h3 className='catName'>{cat.name}</h3>
        </Link>
      </div>))}

    </div>
  )
}


export default Cats
