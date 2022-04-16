import React, { useState } from "react";
// components
import UserInfo from "./UserInfo";

const User = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showUserInfoHandler = () => {
    setIsOpen(!isOpen);
  };

  console.log("[User.js] return");
  const { id, name, mark } = props.user;

  const displayOnPage = (
    <article>
      <div className="user">
        <h4>{id}</h4>
        <p>{name}</p>
        <p className={mark >= 50 ? "success" : "failure"}>
          mark : <b>{mark}</b>
        </p>
        <button className="user-details" onClick={showUserInfoHandler}>
          Show user info
        </button>
      </div>

      {isOpen && <UserInfo user={props.user} />}
    </article>
  );

  return displayOnPage;
};

export default User;
