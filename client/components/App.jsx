import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Playlist from './Playlist';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <div className="blackness">
        <h1>Ample Playlists</h1>
        </div>
        <div className="wrapper">
        <div className="nav">
        <Route path="/" component={Nav} />
        </div>
        <div className='home'>
        <Route path="/home" component={Home} />
        <Route path="/list/:playlistName" component={Playlist} />
        </div>
        </div>
      </React.Fragment>
    </Router>
    
  )
}

export default App
