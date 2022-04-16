import React from "react";
// components
import User from "./User/User";

const UsersList = (props) => {
  console.log("[UsersList.js] return");

  const displayOnPage = (
    <div className="users-container">
      {props.users.map((user) => {
        let userCopy = { ...user };
        return <User key={user.id} user={userCopy} />;
      })}
    </div>
  );

  return displayOnPage;
};

export default UsersList;
