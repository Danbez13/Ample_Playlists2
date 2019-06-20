import React from 'react'

import { Link } from 'react-router-dom'
import data from '../../data/playlists'


const Rank = props => {
  
  const show = props.match.params.playlistName
  console.log(show)
  console.log(data[show])
  const names = data[show]
  return (
    // React.Fragment === <>
    <React.Fragment>
      <h2>{props.match.params.playlistName}</h2>
      <ul>
        {names.map(listName =>{
          console.log(listName)
          console.log(listName.name)
                return(
                <li><Link to={`/listDescription/${listName.name}`}>{listName.name}</Link></li>
                )
                })}
              
      </ul>
      

    </React.Fragment>
  )
}
export default Rank