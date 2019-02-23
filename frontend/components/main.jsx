import React, { Component } from "react";

import Sidebar from "./sidebar";
import Header from "./header";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="main-body">
          <Sidebar />
          <div className="children-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Main;
