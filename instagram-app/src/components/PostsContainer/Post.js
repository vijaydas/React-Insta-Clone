import React from 'react';
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'


const Post = props => {
    return (
        <div className="Post">
            <PostHeader username={props.post.thumbnailUrl} />
            <div className="image">
                <img alt="post thumb" className="post-image" src={props.post.imageURL} />
            </div>
            <CommentSection comments={props.post.comments} />
          </div>
    );
};

export default Post;

