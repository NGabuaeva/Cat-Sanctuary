import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Cats from './Cats'
import SingleCat from './SingleCat'

function Root() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/' className='navLink'>Home</Link>
          <Link to='/cats' className='navLink'>Meet Our Cats</Link>
          <Link to='/aboutUs' className='navLink'>About Us</Link>
          <Link to='/news' className='navLink'>News</Link>
          <Link to='/contact' className='navLink'>Contact Us</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cats' component={Cats} />
        <Route path='/cats/:catId' component={SingleCat} />
      </Switch>
    </Router>
  )
}


export default Root;
