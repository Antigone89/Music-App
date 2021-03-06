import React, {useContext, useState} from 'react'
import AlbumList from './AlbumList'
import { MusicContext } from './MusicContext'


const Searchbar = () => {
    const { albums } = useContext(MusicContext)

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    } 

    const filteredAlbums = albums.filter(album => {
        return album.title.includes(input)
    }) 
console.log(filteredAlbums)
    return (
        <div className="Searchbar ">
            <input onChange={handleChange} type="text" placeholder="Search..." value={input} />
            {filteredAlbums && filteredAlbums.map((album, index) => {
                return (
                    <div className="user" key={index}>
                        <p>{album.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Searchbar
