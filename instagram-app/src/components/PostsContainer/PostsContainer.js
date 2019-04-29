import React from 'react';

const PostsContainer = props => {
    return (
        <div className="posts-container">
            {props.posts.map(post => <Post key={post.timestamp} post={post}/>)}
        </div>
    )
}

export default PostsContainer;

