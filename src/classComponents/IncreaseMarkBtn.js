// class base component
import React, { Component } from "react";

class IncreaseMarkBtn extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.unsuccessfulUsersLength === 0) {
    //   return false;
    // } else {
    //   return true;
    // }

    // we returned false, because there is no need to rerender this component
    return false;
  }

  render() {
    console.log("[IncreaseMarkBtn.js] render");
    return (
      <button
        className="increase-mark-btn"
        onClick={this.props.increaseMarkHandler}
      >
        Increase +1
      </button>
    );
  }
}

export default IncreaseMarkBtn;
