import React, { Component } from "react";
import { connect } from "react-redux";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurf-container">
        <ul>
          {this.props.smurfs.map(smurf => {
            return <li key={smurf.name}>{smurf.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Smurfs);
