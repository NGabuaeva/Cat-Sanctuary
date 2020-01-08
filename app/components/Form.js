import React from 'react'
import { updateCat } from '../reducers/cat'
import { connect } from 'react-redux'


//Form to update cat information
class Form extends React.Component {
  constructor(props) {
    super(props)
    //set the state with existing information from the database
    this.state = {
      name: this.props.cat.name,
      breed: this.props.cat.breed,
      age: this.props.cat.age,
      hobby: this.props.cat.hobby,
      favoriteSnack: this.props.cat.favoriteSnack,
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
  //update cat information in the database by calling the thunk on submit
  handleSubmit(event) {
    event.preventDefault()
    this.props.updateCat(this.state, this.props.cat.id)
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
  updateCat: (cat, id) => dispatch(updateCat(cat, id))
})
export default connect(null, mapDispatchToProps)(Form)
