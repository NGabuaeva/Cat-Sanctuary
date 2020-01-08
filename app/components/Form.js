import React from 'react'
import { updateCat } from '../reducers/cat'
import { connect } from 'react-redux'

class Form extends React.Component {
  constructor(props) {
    super(props)
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
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.updateCat(this.state, this.props.cat.id)
    this.setState({
      name: '',
      breed: '',
      age: '',
      hobby: '',
      favoriteSnack: ''
    })
  }
  render() {
    console.log('props:', this.props)
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
  updateCat: (cat, catId) => dispatch(updateCat(cat, catId))
})
export default connect(null, mapDispatchToProps)(Form)
