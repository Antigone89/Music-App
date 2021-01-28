import React from 'react'


const FetchApi = () => 

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('https://api.discogs.com/artists/1?callback=callbackname')
            .then(res => {
                return res.json();
            })
            .then(data => {
            console.log(data)
        })
    }, []);

    

    return (
        <div>
            
        </div>
    )
}

export default FetchApi
