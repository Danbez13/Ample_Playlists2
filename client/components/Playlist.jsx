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
          console.log(listName.artists[0].art1)
          
                return(
                  <div>
                    <li>{listName.songs[0].Song1}{listName.artists[0].art1}</li>
                    <li>{listName.songs[1].Song2}{listName.artists[1].art2}</li>
                    <li>{listName.songs[2].Song3}{listName.artists[2].art3}</li>
                    <li>{listName.songs[3].Song4}{listName.artists[3].art4}</li>
                    <li>{listName.songs[4].Song5}{listName.artists[4].art5}</li>
                    <li>{listName.songs[5].Song6}{listName.artists[5].art6}</li>
                    <li>{listName.songs[6].Song7}{listName.artists[6].art7}</li>
                    <li>{listName.songs[7].Song8}{listName.artists[7].art8}</li>
                    <li>{listName.songs[8].Song9}{listName.artists[8].art9}</li>
                    <li>{listName.songs[9].Song10}{listName.artists[9].art10}</li>
                    <li>{listName.songs[10].Song11}{listName.artists[10].art11}</li>
                    <li>{listName.songs[11].Song12}{listName.artists[11].art12}</li>
                    <li>{listName.songs[12].Song13}{listName.artists[12].art13}</li>
                    <li>{listName.songs[13].Song14}{listName.artists[13].art14}</li>
                    <li>{listName.songs[14].Song15}{listName.artists[14].art15}</li>
                    <li>{listName.songs[15].Song16}{listName.artists[15].art16}</li>
                    <li>{listName.songs[16].Song17}{listName.artists[16].art17}</li>
                    <li>{listName.songs[17].Song18}{listName.artists[17].art18}</li>
                    <li>{listName.songs[18].Song19}{listName.artists[18].art19}</li>
                    <li>{listName.songs[19].Song20}{listName.artists[19].art20}</li>
                    <div className="listen-move">
                    <li><a href={listName.playlistLink} className="listen">Listen Here</a></li>
                    </div>
                </div>
                )
                })}
              
      </ul>
      

    </React.Fragment>
  )
}
export default Playlist