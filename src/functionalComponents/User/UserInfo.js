import React from "react";

const UserInfo = ({ user }) => {
  console.log("[UserInfo.js] render");
  const {
    email,
    phone,
    address: { city, street },
  } = user;

  return (
    <ul className="user-info">
      <li>{email}</li>
      <li>{phone}</li>
      <li>
        {city} / {street}
      </li>
    </ul>
  );
};

export default UserInfo;
