import React, { Component } from "react";
/* styles */
import "./Input.css";

export default class InputClass extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        value={this.value}
        onChange={this.onChange}
      />
    );
  }
}
