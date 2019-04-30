import React from 'react';
import Post from './Post'
//import PropTypes from 'prop-types';


const PostsContainer = props => {
    return (
        <div className="posts-container">
            {props.posts.map(post => <Post key={post.imageUrl} post={post}/>)}
        </div>
    )
}



export default PostsContainer;

