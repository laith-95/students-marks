import React, { Component } from "react";
// components
import User from "./User/User";

class UsersList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // this.props.users === nextProps.users => returns false, because it is a shallow copy (different references)
    // this.props.users[0] === nextProps.users[0] => returns true, we compare the same references
    // console.log("[UsersList.js] nextProps.users = ", nextProps.users[1]);

    /*
      if the user is unsuccessful (this.props.users[1] === nextProps.users[1])
        has to return false
    */
    // console.log(
    //   "[UsersList.js] this.props.users = ",
    //   this.props.users[1] === nextProps.users[1]
    // );

    return true;
  }

  render() {
    console.log("[UsersList.js] render");

    const displayOnPage = (
      <div className="users-container">
        {this.props.users.map((user, index) => {
          let userCopy = { ...user };
          return (
            <User
              key={user.id}
              user={userCopy}
              deleteUser={() => this.props.deleteUser(index)}
            />
          );
        })}
      </div>
    );

    return displayOnPage;
  }
}

export default UsersList;
