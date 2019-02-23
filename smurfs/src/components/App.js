import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div className="no-smurfs-error">
          {this.props.error ? (
            <h2>The Smurfs could not be found! We MUST save them!!</h2>
          ) : null}
        </div>
        <SmurfForm />
        {this.props.gettingSmurfs ? (
          <h2>Kidnap-- I mean, looking for the smurfs...</h2>
        ) : (
          <Smurfs smurfs={this.props.smurfs} />
        )}
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    gettingSmurfs: state.gettingSmurfs
  };
};

export default connect(
  mstp,
  { getSmurfs }
)(App);
