import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Participate extends Component {
  render() {
    return (
      <div>
        <h1>Participate</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
    );
  }
}
