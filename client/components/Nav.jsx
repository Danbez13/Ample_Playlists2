import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/playlists'

const list = Object.keys(data)
// console.log(data, list)


const Nav = props => {

  return (
    // React.Fragment === <>
    <React.Fragment>
      <h2>Genres</h2>
        <ul>
            {list.map((listName, key) =>{
                return(
                  <div className="navie">
                    <li><Link to={`/list/${listName}`} className="navo">{listName}</Link></li>
                  </div>
                )
            })}
        </ul>
    </React.Fragment>
  )
}
export default Nav