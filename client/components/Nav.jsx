import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/playlists'

const list = Object.keys(data)
console.log(data, list)


const Nav = props => {

  return (
    // React.Fragment === <>
    <React.Fragment>
      <h2>Navigation</h2>
        <ul>
            <li><Link to="/home">Home</Link></li>
            {list.map((listName, key) =>{
                return(
                <li><Link to={`/list/${listName}`}>{listName}</Link></li>
                )
            })}
        </ul>
    </React.Fragment>
  )
}
export default Nav