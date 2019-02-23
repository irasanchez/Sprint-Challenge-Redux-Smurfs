import React, { Component } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputCHange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, height } = this.state;
    this.props.createFriend({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
          Add New Smurf
        </button>
      </form>
    );
  }
}

const mstp = state => {
  return {
    error: state.error,
    creatingSmurf: state.creatingSmurf
  };
};

export default connect(
  mstp,
  { createSmurf }
)(SmurfForm);
