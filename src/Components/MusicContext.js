import React, { useState, createContext, useEffect } from 'react';

export const MusicContext = createContext();


export const MusicProvider = ({ children }) => {

    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        fetch('https://api.discogs.com//database/search?q=rihana&key=ndqiGGFVIuiLYHmjQExU&secret=ADOGBtMyjsEJjQkyVcoNQTASKAuLfdCW')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setAlbums(data.results)
            })
    }, []);
    return (
        <MusicContext.Provider value={{ albums }}>
            {children}
        </MusicContext.Provider>
    )
        
}