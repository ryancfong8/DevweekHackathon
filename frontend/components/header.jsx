import React from "react";
import { Link, withRouter, hashHistory } from "react-router";
import $ from "@rtorr/ajax-only";

class Header extends React.Component {
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
      <div className="navbar-header">
        <div className="navbar-left">
          <h1>Welcome User</h1>
        </div>
        <div className="navbar-center">
          <h1>Field Trip Manager</h1>
        </div>
        <div className="navbar-right">
          <h1>Log Out</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
