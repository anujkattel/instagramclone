import React from 'react'

function InstagramStories({ posts }) {
    return (
        <>
            <div className="photo-gallery">
                {posts.map((post, index) => (
                    <div key={index} className="post" >
                        <img src={post.imageUrl} alt={`Post ${index + 1}`} />
                        <div className="post-info">
                            <span className="username">{post.username}</span>
                           
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default InstagramStories