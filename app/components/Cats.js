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
      <ul>
        {cats.map(cat => (<div className='listItem' key={cat.id}>
          <li>
            <div className='singleCat'>
              <Link className='Link' to={`/cats/${cat.id}`}>
                <img className='catImg' src={cat.imageUrl} />
                <h1>{cat.name}</h1>
              </Link>
            </div>
          </li>
        </div>))}
      </ul>
    </div>
  )
}


export default Cats
