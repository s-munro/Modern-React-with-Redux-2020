import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   // what does constructor do?
  //   super(props); // is a reference to the parent's constructor function
  //   this.state = {
  //     // THIS ONLY TIME WE DO DIRECT ASSIGNMENT
  //     lat: null,
  //     long: null, // null because is a NUMBER
  //   };
  // }

  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    // GET USER'S CURRENT POSITON ----------------------------------------
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          errorMessage: "",
        });
        //DONT DO A DIRECT ASSIGNMENT
        //this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
        console.log(err);
      }
    );
    // GOT IT FAM ----------------------------------------------------------
  }

  componentDidUpdate() {
    console.log("this baby updated, gang gang");
  }

  RenderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      // IF ERROR
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      // IF SUCCESS
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }
    return <Spinner message={"Fetching your location..."} />; // IF LOADING
  }

  // must define render in classes
  render() {
    return <div className="border red">{this.RenderContent()}</div>;
  }
}

export default App;
