import React, { Component } from "react";
import { Link, BrowserRouter, Redirect } from "react-router-dom";

class Trips extends Component {
  constructor(props) {
    super(props);
    // this.props.getTrips();
  }

  render() {
    return (
      <div>
        <ul className="events-list">events go here</ul>
        <Link className="sidebar-link" to="en-us/trips/new">
          Create new trip
        </Link>
      </div>
    );
  }
}

import { connect } from "react-redux";
import { getTrips } from "../actions/project_actions";

const mapStateToProps = state => ({
  trips: state.trips
});

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);
