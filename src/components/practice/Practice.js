import React, { Component, Fragment } from "react";
import Header from "./Header";
import PracticeView1 from "./PracticeView1";
import PracticeView2 from "./PracticeView2";
import "./Practice.css";

export default class Practice extends Component {
  state = {
    opacity: 0,
    activeTab: null
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
      <Fragment>
        <Header fadeIn={this.fadeIn} opacity={this.state.opacity} />
        <PracticeView1 />
        <PracticeView2 />
      </Fragment>
    );
  }
}
