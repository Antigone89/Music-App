import React from 'react'
import AlbumList from './AlbumList'

const Searchbar = (props) => {
    const album = props.album;
    return (
        <div className="Searchbar">
            <input type="text" placeholder="Search..." />
            {album.map((album, title) => {
                return (
                    <div className="user" key={key}>
                        <p>{album.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Searchbar
