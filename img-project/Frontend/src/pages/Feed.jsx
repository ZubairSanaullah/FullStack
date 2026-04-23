import React, { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.pexels.com/photos/23759426/pexels-photo-23759426.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        }
    ])

    return (
        <section className='feed-section'></section>
    )
}

export default Feed