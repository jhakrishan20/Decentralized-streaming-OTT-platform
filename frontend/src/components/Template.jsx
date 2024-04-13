// eslint-disable-next-line no-unused-vars
import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import "../css/template.css";
import { Navigate, useNavigate } from "react-router-dom";

const Template = ({ title, formtype, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="alignment">
      <h1 className="titlee">{title}</h1>
      <div className="formmm">
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="button-other">
          {formtype == "signup" ? (
            <button
              onClick={() => {
                return navigate("/login");
              }}
            >
              Already a User? Log In
            </button>
          ) : (
            <button
              onClick={() => {
                return navigate("/signup");
              }}
            >
              New User? Sign Up
            </button>
          )}
        </div>

        <div className="parentOr">
          <div className="line"></div>
          <p className="or">OR</p>
          <div className="line"></div>
        </div>

        <button className="googlebutton">
          <FcGoogle />
          {title} with Google
        </button>
      </div>
    </div>
  );
};

export default Template;
