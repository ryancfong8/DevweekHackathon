import React, { Component } from "react";
import { createTrip } from "../util/project_api_util";

// Creates new trips

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      drop_off_location_long: "",
      drop_off_location_lat: "",
      pick_up_location_long: "",
      pick_up_location_lat: "",
      transportation: "",
      itinerary: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSubmit() {
    const form = {
      name: this.state.name,
      start_date: this.state.start_date,
      start_time: this.state.start_time,
      end_date: this.state.end_date,
      end_time: this.state.end_time,
      drop_off_location_long: this.state.drop_off_location_long,
      drop_off_location_lat: this.state.drop_off_location_lat,
      pick_up_location_long: this.state.pick_up_location_long,
      pick_up_location_lat: this.state.pick_up_location_lat,
      transportation: this.state.transportation,
      itinerary: this.state.itinerary
    };
    createTrip({ trip: form }).then(() => {
      this.props.history.push("/en-us/forms");
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
        </label>
        <br />
        <label>
          Start date:
          <input
            type="text"
            value={this.state.start_date}
            onChange={this.handleChange("start_date")}
          />
        </label>
        <br />
        <label>
          Start time:
          <input
            type="text"
            value={this.state.start_time}
            onChange={this.handleChange("start_time")}
          />
        </label>
        <br />
        <label>
          End date:
          <input
            type="text"
            value={this.state.end_date}
            onChange={this.handleChange("end_date")}
          />
        </label>
        <br />
        <label>
          End time:
          <input
            type="text"
            value={this.state.end_time}
            onChange={this.handleChange("end_time")}
          />
        </label>
        <br />
        <label>
          Itinerary:
          <textarea
            value={this.state.itinerary}
            onChange={this.handleChange("itinerary")}
          />
        </label>
        <br />
        <label>
          Transportation:
          <textarea
            value={this.state.transportation}
            onChange={this.handleChange("transportation")}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
