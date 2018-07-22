import React, { Component, Fragment } from "react";
import Header from "./Header";
import ContactView1 from "./ContactView1";
import "./Form.css";

export default class Contact extends Component {
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
    const { opacity } = this.state;

    return (
      <Fragment>
        <Header fadeIn={this.fadeIn} opacity={opacity} />
        <ContactView1 />
      </Fragment>
    );
  }
}
