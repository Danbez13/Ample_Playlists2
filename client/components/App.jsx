import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>Ample Playlists</h1>
        <div className="wrapper">
        <div className="nav">
        <Route path="/" component={Nav} />
        </div>
        <div className='home'>
        {/* <Route path="/home" component={Home} /> */}
        </div>
        </div>
      </React.Fragment>
    </Router>
    
  )
}

export default App
