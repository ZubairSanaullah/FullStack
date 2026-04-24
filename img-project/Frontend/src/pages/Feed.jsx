import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'This is a caption for the image.',

        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                setPosts(res.data.posts)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? posts.map((post) => (
                    <div className='post-card' key={post._id}>
                        <img src={post.image} alt="" />
                        <p>{post.caption}</p>
                    </div>
                )) : (
                    <p>No posts yet.</p>
                )
            }
        </section>
    )
}

export default Feed