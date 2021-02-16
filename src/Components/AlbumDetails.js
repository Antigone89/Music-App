import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const item = {
    width : "100%"
}

function AlbumDetails(props) {
    const album = props.album;
    

    return (
        <div>
            
            <h3>{album.title}</h3>
            <h4>{album.genre}</h4>
        
            <img src={album.cover_image} width="200px" height="auto"></img>
            
 
        </div>
    )
}

export default AlbumDetails
