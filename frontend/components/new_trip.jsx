// import React, { Component } from "react";
// import { Link, BrowserRouter, Redirect } from "react-router-dom";
//
// class Events extends Component {
//   constructor(props) {
//     super(props);
//     this.props.getTrips();
//   }
//
//   render() {
//     return (
//       <div>
//         <ul className="events-list">events go here</ul>
//         <Link className="sidebar-link" to="en-us/event/new">
//           Create new trip
//         </Link>
//       </div>
//     );
//   }
// }
//
// import { connect } from "react-redux";
// import { getEvents } from "../actions/project_actions";
//
// const mapStateToProps = state => ({
//   events: state.events
// });
//
// const mapDispatchToProps = dispatch => ({
//   getEvents: () => dispatch(getEvents())
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Events);
