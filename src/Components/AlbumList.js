import React, {useState, useEffect, useContext} from 'react'
import AlbumDetails from "./AlbumDetails"
import { MusicContext } from './MusicContext'

const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems : "center"
}
const AlbumList = () => {
    const {albums} = useContext(MusicContext)


    console.log('albums', albums)

    return (
        <div>
            <div style={container}>
                <h1>Music</h1>
            {albums && albums.map(album => {
                return (
                    <AlbumDetails key={album.id} album={album}/>
                )
            } )}
            </div>
        </div>
    )
}

export default AlbumList
