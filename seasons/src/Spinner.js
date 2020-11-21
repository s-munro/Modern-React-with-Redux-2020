import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          {this.props.message || "Loading..."}
        </div>
      </div>
    );
  }

  // THIS CAN BE USED FOR FUNCTIONAL CMPNTS, BUT HOW FOR CLASSES?
  // Spinner.defaultProps = {
  //   message: 'Loading...'
  // }
}
export default Spinner;
