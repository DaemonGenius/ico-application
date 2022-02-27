import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
    );
  }
}

export default Home;
