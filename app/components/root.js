import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
// import Cats from './components/Cats'
// import SingleCat from './SingleCat'

function Root() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/' className='navlink'>Home</Link>
          <Link to='/cats' className='navLink'>Adopt a cat</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/cats' component={Cats} /> */}
        {/* <Route path='/cats/:catId' component={SingleCat} /> */}
      </Switch>
    </Router>
  )
}


export default Root;
