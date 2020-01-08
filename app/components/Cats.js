import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getCats } from '../reducers/cats'
import { Link } from 'react-router-dom'


//component to list all the cats
function Cats() {
  const cats = useSelector(state => state.cats)
  const dispatch = useDispatch()

  //fetch all cats from the database
  useEffect(() => { dispatch(getCats()) }, [])
  return (
    <div className='catList'>

      {/* map through the cats array to create a container for each one */}
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
