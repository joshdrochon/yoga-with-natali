import React, { Component } from "react";
import PropTypes from "prop-types";
import BlogPostList from "./BlogPostList";

export default class Blog extends Component {
  state = {
    opacity: 0
  };

  fadeIn = () => {
    this.setState({
      opacity: 1
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <BlogPostList
          fadeIn={this.fadeIn}
          opacity={this.state.opacity}
          blogPostList={this.props.blogPostList}
          onBlogPostSelection={this.props.onBlogPostSelection}
          selectedPost={this.props.selectedPost}
        />
      </div>
    );
  }
}

Blog.propTypes = {
  blogPostList: PropTypes.object,
  onBlogPostSelection: PropTypes.func,
  selectedPost: PropTypes.string
};
