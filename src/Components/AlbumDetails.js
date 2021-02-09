import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function AlbumDetails(props) {
    const album = props.album;
    
if(album)
    return (
        <div>
            
            <h3>{album.title}</h3>
            <h4>{album.genre}</h4>
            
            <p>{album.country}</p>
            
 
        </div>
    )
else return (<p>no album</p>)
}

export default AlbumDetails
