import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../CommentSection/Comment.js'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
     }

     render() {
         return (
             <div>
                 {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
             </div>
         );
     }
    }

    CommentSection.propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})
        )
    };

    export default CommentSection;

