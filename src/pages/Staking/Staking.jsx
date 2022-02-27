import React, { Component } from "react";
import { Link } from "react-router-dom";

class Staking extends Component {
  render() {
    return (
      <div>
        <h1>Staking</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
    );
  }
}

export default Staking;
