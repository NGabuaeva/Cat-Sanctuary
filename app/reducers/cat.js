import axios from 'axios'


const GOT_CAT = 'GOT_CAT'
const UPDATED_CAT = 'UPDATED_CAT'


//action creator to set state with selected cat fetched from the database
const gotCat = (cat) => ({
  type: GOT_CAT,
  cat
})

//thunk creator to fetch selected cat from the database
export const getCat = (id) => async dispatch => {
  try {
    console.log('from getCat thunk')
    const { data } = await axios.get(`/api/cats/${id}`)
    dispatch(gotCat(data))
  } catch (error) {
    console.log(error)
  }
}


//action creator to edit a cat
const updatedCat = (cat) => ({
  type: UPDATED_CAT,
  cat
})

//thunk creator to edit the cat in the database
export const updateCat = (newCat, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/cats/${id}`, newCat)
    dispatch(updatedCat(data))
  }
  catch (err) { console.log(err) }
}


//reducer that will update the store based on the action
export const cat = (state = {}, action) => {
  switch (action.type) {

    case GOT_CAT:
      return action.cat

    case UPDATED_CAT:
      return action.cat

    default:
      return state
  }
}
