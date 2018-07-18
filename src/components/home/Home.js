import React, { Component, Fragment } from "react";
import Header from "./Header";
import HomeView1 from "./HomeView1";
import HomeView2 from "./HomeView2";
import { fetchQuote } from "./../../helpers";

export default class Home extends Component {
  state = {
    opacity: 0
  };

  fadeIn = () => {
    this.setState({
      opacity: 1
    });
  };

  componentDidMount() {
    fetchQuote();
  }
  render() {
    return (
      <Fragment>
        <Header fadeIn={this.fadeIn} opacity={this.state.opacity} />
        <HomeView1 />
        <HomeView2 />
      </Fragment>
    );
  }
}
