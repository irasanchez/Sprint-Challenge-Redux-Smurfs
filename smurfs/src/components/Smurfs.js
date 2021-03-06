import React, { Component } from "react";
import { connect } from "react-redux";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurf-container">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <div>{smurf.name}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
                <div>{smurf.id}</div>
              </li>
            );
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
