import React from 'react'
import { addCat } from '../reducers/cats'
import { connect } from 'react-redux'


//Form to add a cat
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      breed: '',
      age: undefined,
      hobby: '',
      favoriteSnack: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //update state as we're typing in one of the fields
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //add a new cat to the database by calling the thunk on submit
  handleSubmit(event) {
    event.preventDefault()
    this.props.addCat(this.state)
    this.setState({
      name: '',
      breed: '',
      age: undefined,
      hobby: '',
      favoriteSnack: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label htmlFor='name'>Name</label>
        <input onChange={this.handleChange} type='text' name='name' value={this.state.name} />

        <label htmlFor='age'>Age</label>
        <input onChange={this.handleChange} type='text' name='age' value={this.state.age} />

        <label htmlFor='hobby'>Hobby</label>
        <input onChange={this.handleChange} type='text' name='hobby' value={this.state.hobby} />

        <label htmlFor='favoriteSnack'>Favorite Snack</label>
        <input onChange={this.handleChange} type='text' name='favoriteSnack' value={this.state.favoriteSnack} />

        <label htmlFor='breed'>Breed</label>
        <input onChange={this.handleChange} type='text' name='breed' value={this.state.breed} />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addCat: (cat) => dispatch(addCat(cat))
})
export default connect(null, mapDispatchToProps)(Form)
