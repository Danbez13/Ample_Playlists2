import React from 'react'

import { Link } from 'react-router-dom'
import data from '../../data/playlists'


const Playlist = props => {
  
  const show = props.match.params.playlistName
  // console.log('E',show)
  // console.log(data[show])
  const names = data[show]
  return (
    // React.Fragment === <>
    <React.Fragment>
      <h2>{props.match.params.playlistName}</h2>
      <ul className="songs">
        {names.map(listName =>{
          console.log(listName)
          
                return(
                  <div>
                    <li>Songs: {listName.songs} </li>
                    <li>Artists: {listName.artists} </li>
                    <li><a href={listName.playlistLink} className="listen">Listen Here</a></li>
                </div>
                )
                })}
              
      </ul>
      

    </React.Fragment>
  )
}
export default Playlist