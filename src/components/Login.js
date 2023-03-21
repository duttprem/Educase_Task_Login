import React from "react";
import Icon from "./Icon";
import Form from "./Form";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="container">
      <div className="Login">
        <Navbar />
        <Form />
        <Icon />
      </div>
    </div>
  );
}

export default Login;