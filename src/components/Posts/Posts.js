import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions";
import { Loading, Error } from "./../Placeholders";
import Post from "./../Post/Post";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    switch (this.props.status) {
      case "SUCCESS":
        return (
          <React.Fragment>
            <h1>Posts</h1>
            <div className="b-posts">
              {this.props.posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </React.Fragment>
        );
      case "ERROR":
        return <Error message={this.props.message} />;
      case "LOADING":
        return <Loading />;
      default:
        return <Loading />;
    }
  };

  render() {
    return <div className="b-container">{this.renderPosts()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.content.posts,
    status: state.content.status,
    message: state.content.message
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
