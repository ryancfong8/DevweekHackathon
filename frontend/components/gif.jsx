import React, { Component } from "react";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
const SIDEBAR_LINKS = require("./sidebar_links.js");
import $ from "@rtorr/ajax-only";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    return $.ajax({
      method: "DELETE",
      url: `/users/sign_out`
    }).then(() => {
      window.location.reload();
    });
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
        <li key={SIDEBAR_LINKS.length} className="sidebar-item">
          <Link
            id="logout"
            className="sidebar-link"
            onClick={this.logOut}
            to={"/users/sign_in"}
          >
            Sign Out
          </Link>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
