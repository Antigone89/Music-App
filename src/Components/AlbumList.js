import React, {useState, useEffect, useContext} from 'react'
import AlbumDetails from "./AlbumDetails"
import { MusicContext } from './MusicContext'

const AlbumList = () => {
    const {albums} = useContext(MusicContext)


    console.log('albums', albums)

    return (
        <div>
            <h1>api</h1>
            {albums && albums.map(album => {
                return (
                    <AlbumDetails key={album.id} album={album}/>
                )
            } )}
        </div>
    )
}

export default AlbumList
