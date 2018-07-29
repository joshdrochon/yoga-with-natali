import React, { Component, Fragment } from "react";
import "./../../App.css";
import "./About.css";
import Header from "./header/Header";
import AboutView1 from "./AboutView1";
import AboutView2 from "./AboutView2";

export default class About extends Component {
  state = {
    opacity: 0
  };

  fadeIn = () => {
    this.setState({
      opacity: 1
    });
  };

  render() {
    const { opacity } = this.state;
    return (
      <Fragment>
        <Header fadeIn={this.fadeIn} opacity={opacity} />
        <AboutView1 />
        <AboutView2 />
      </Fragment>
    );
  }
}
