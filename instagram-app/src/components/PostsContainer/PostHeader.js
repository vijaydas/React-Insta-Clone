import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-div">
                <img alt="post header" className="post-thumbnail" src={props.thumbnailUrl} />
            </div>
            <div>
                {props.username}
            </div>
    
            
        </div>
    );
};

export default PostHeader;

