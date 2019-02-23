import React, { Component } from "react";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
const SIDEBAR_LINKS = require("./sidebar_links.js");
import $ from "@rtorr/ajax-only";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  checkOnclick(id) {
    if (id === "sign_out") {
      return this.logOut;
    }
  }

  render() {
    return (
      <ul className="sidebar-list">
        {SIDEBAR_LINKS.default.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link
                className="sidebar-link"
                onClick={this.checkOnclick(item.id)}
                to={`${item.route}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Sidebar;
