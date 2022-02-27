import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tokenomics extends Component {
  render() {
    return (
      <div>
        <h1>Tokenomics</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="Participate">About</Link>
        </nav>
      </div>
    );
  }
}
