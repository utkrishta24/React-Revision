import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login!</div>;

  return (
    <div>
      <h2>{user.username}, Logged In!</h2>
    </div>
  );
}

export default Profile;
