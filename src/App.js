import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReallySmoothScroll from "really-smooth-scroll";
import Footer from "./components/application/Footer";
import Navbar from "./components/application/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Practice from "./components/practice/Practice";
import Contact from "./components/contact/Contact";
// import Blog from "./blog/Blog";
// import NewBlogPostControl from "./admin/NewBlogPostControl";
import PhotoAlbum from "./components/practice/album/PhotoAlbum";
import Error404 from "./Error404";
import "./App.css";

ReallySmoothScroll.shim();

export default class App extends Component {
  // state = {
  //     masterBlogPostList: {},
  //     selectedPost: null
  //   };
  // }
  //
  // handleAddingNewBlogPost = (newPost) => {
  //   let newPostId = v4();
  //   let newMasterBlogPostList = Object.assign(
  //     {},
  //     this.state.masterBlogPostList,
  //     {
  //       [newPostId]: newPost
  //     }
  //   );
  //   this.setState({ masterBlogPostList: newMasterBlogPostList });
  // }
  // handleSelectedBlogPost = (postId) => {
  //   this.setState({ selectedPost: postId });
  //
  //   console.log(this.state.masterBlogPostList[postId].title);
  // }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="wrapper-main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/*<Route
            path="/admin"
            render={() => (
              <NewBlogPostControl
                onNewPostCreation={this.handleAddingNewBlogPost}
              />
            )}
          />*/}
          <Route path="/practice" component={Practice} />
          <Route path="/contact" component={Contact} />
          <Route path="/photography" component={PhotoAlbum} />

          {/*<Route
            path="/blog"
            render={() => (
              <Blog
                blogPostList={this.state.masterBlogPostList}
                onBlogPostSelection={this.handleSelectedBlogPost}
                selectedPost={this.state.selectedPost}
              />
            )}
          />*/}
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
