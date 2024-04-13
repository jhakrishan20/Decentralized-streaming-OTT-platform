/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Template from "../components/Template";
import "../css/template.css";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template title="Log In" formtype="login" setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Login;
