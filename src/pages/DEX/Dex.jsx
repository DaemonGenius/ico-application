import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dex extends Component {
  render() {
    return (
      <div>
        <h1>DEX</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
    );
  }
}

export default Dex;
