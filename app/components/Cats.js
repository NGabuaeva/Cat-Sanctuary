// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux"
// import { getCats } from '../reducers/cats'

// export default function Cats() {
//   const cats = useSelector(state => state.cats)
//   const dispatch = useDispatch()
//   function getData() {
//     return dispatch(getCats)
//   }
//   useEffect(() => { getData() })
//   return (
//     <div className='catList'>
//       <ul>
//         {cats.map(cat => (<li>{cat.name}</li>))}
//       </ul>
//     </div>
//   )
// }
