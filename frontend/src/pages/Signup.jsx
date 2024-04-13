/* eslint-disable no-unused-vars */
import React from "react";
import Template from "../components/Template";
import "../css/template.css";
// eslint-disable-next-line react/prop-types
const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template title="Sign Up" formtype="signup" setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Signup;
