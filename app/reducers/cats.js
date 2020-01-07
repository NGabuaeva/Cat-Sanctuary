import axios from 'axios'


const GOT_CATS = 'GOT_CATS'
const GOT_CAT = 'GOT_CAT'
const ADDED_CAT = 'ADDED_CAT'
const UPDATED_CAT = 'UPDATED_CAT'

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

//action creator to set state with selected cat fetched from the database
const gotCat = (cat) => ({
  type: GOT_CAT,
  cat
})

//thunk creator to fetch selected cat from the database
export const getCat = (catId) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cats/${catId}`)
    dispatch(gotCat(data))
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

//action creator to edit a cat
const updatedCat = (cat) => ({
  type: UPDATED_CAT,
  cat
})

//thunk creator to edit the cat in the database
export const updateCat = (newCat, catId) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/students/${catId}`, newCat)
    dispatch(updatedCat(data))
  }
  catch (err) { console.log(err) }
}

const defaultState = { cats: [], selectedCat: {} }

//reducer that will update the store based on the action
export const cats = (state = defaultState, action) => {
  switch (action.type) {

    case GOT_CATS:
      return { ...state, cats: action.cats }

    case GOT_CAT:
      return { ...state, selectedCat: action.cat }

    case ADDED_CAT:
      return { ...state, cats: [...state.cats, action.cat] }

    case UPDATED_CAT:
      return { ...state, selectedCat: action.cat }

    default:
      return state
  }
}
