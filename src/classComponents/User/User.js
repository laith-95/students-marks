import React, { Component } from "react";
// components
import UserInfo from "./UserInfo";

class User extends Component {
  state = {
    isOpen: false,
  };

  showUserInfoHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  shouldComponentUpdate(nextProps, nextState) {
    /*
      I solved the problem of prevent re-render unnecessary user,
        but there is a new problem, I can't show user info when click on his button
    */

    // if (nextProps.user.mark !== this.props.user.mark) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }

  render() {
    console.log("[User.js] render");
    const { id, name, mark } = this.props.user;

    const displayOnPage = (
      <article>
        <div className="user">
          <h4>{id}</h4>
          <p>{name}</p>
          <p className={mark >= 50 ? "success" : "failure"}>
            mark : <b>{mark}</b>
          </p>
          <button className="user-details" onClick={this.showUserInfoHandler}>
            Show user info
          </button>
          <button onClick={this.props.deleteUser}>Delete</button>
        </div>

        {this.state.isOpen && <UserInfo user={this.props.user} />}
      </article>
    );

    return displayOnPage;
  }
}

export default User;
