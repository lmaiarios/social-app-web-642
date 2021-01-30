import { useState, useEffect } from 'react'
import Post from './components/Post'

function Home(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(({results}) => results.map(user => ({
                fullName: user.name.first+' '+user.name.last,
                profilePic: user.picture.thumbnail
            })))
            .then(newPosts=>setPosts(newPosts))
    },[])
    return(
        <div className="home">
            {posts.map( (post, index) => <Post key={index} {...post} /> )}
        </div>
    )
}

export default Home