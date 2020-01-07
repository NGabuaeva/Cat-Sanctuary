import axios from 'axios'


const GOT_CATS = 'GOT_CATS'
const ADDED_CAT = 'ADDED_CAT'


//action creator to set state with cats fetched from the database
const gotCats = (cats) => ({
  type: GOT_CATS,
  cats
})

//thunk creator to fetch all cats from the database
export const getCats = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/cats')
    dispatch(gotCats(data))
  } catch (error) {
    console.log(error)
  }
}


//action creator to add a new cat
const addedCat = (cat) => ({
  type: ADDED_CAT,
  cat
})

//thunk creator to add a new cat
export const addCat = (cat) => async dispatch => {
  try {
    const { data } = await axios.post('/api/cats', cat)
    dispatch(addedCat(data))
  } catch (err) { console.log(err) }
}



//reducer that will update the store based on the action
export const cats = (state = [], action) => {
  switch (action.type) {

    case GOT_CATS:
      return action.cats

    case ADDED_CAT:
      return [...state, action.cat]

    default:
      return state
  }
}
