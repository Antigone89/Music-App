import React, {useState, useEffect} from 'react'


const FetchApi = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('https://api.discogs.com//database/search?q=rihana&key=bsJCAGTsbOBTVFHLLILq&secret=fWchXQtBWETnYKeYagJLnBTqmWaaUokV')
            .then(res => {
                return res.json();
            })
            .then(data => {
            console.log(data)
        })
    }, []);

    

    return (
        <div>
            <h1>api</h1>
        </div>
    )
}

export default FetchApi
