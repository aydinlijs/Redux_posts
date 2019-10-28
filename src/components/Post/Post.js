import React from 'react';

const Post = props => {
    return(
        <div className="b-post">
            <h3>{props.post.title.charAt(0).toUpperCase() + props.post.title.substring(1)}</h3>
            <p>{props.post.body}</p>
        </div>
    )
}
export default Post;