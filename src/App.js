import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ReallySmoothScroll from "really-smooth-scroll";
import Footer from "./components/application/Footer";
import Navbar from "./components/application/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Practice from "./components/practice/Practice";
import Contact from "./components/contact/Contact";

import PhotoAlbum from "./components/practice/album/PhotoAlbum";
import Error404 from "./Error404";
import "./App.css";

ReallySmoothScroll.shim();

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.history.pathName === "/classes") {
      document.getElementById("footer").classList.add("pin-bottom");
    }
    return (
      <div className="wrapper-main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/practice" component={Practice} />
          <Route path="/contact" component={Contact} />
          <Route path="/photography" component={PhotoAlbum} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
