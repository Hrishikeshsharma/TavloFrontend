import React from "react";

import LoginFormat from "./LoginFormat";

function LogIn() {
  return (
    <div>
      <LoginFormat
        url={"https://tavloserver.onrender.com/autho/login"}
        logintype={"Log In"}
        to={"/signup"}
        next={"/browse"}
      />
    </div>
  );
}

export default LogIn;
