/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/template.css";
import Button from "./Button";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setformData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="formheight">
        <label htmlFor="email"> Email </label>
        <br />
        <input
          required
          type="email"
          placeholder="Enter your email address"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <br />

        <div className="outsideEye">
          <label htmlFor="password">Password </label>
          <br />
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            id="password"
            value={formData.password}
            onChange={changeHandler}
          />

          <span className="eye" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={14} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={14} fill="#AFB2BF" />
            )}
          </span>
        </div>



        {/* <Link to="#">
        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
          Forgot Password?
        </p>
      </Link> */}

        <Button text="Log In"
          color="#00A3FF"
          border="1.5px solid #999999"
          align="yes"
          mright="no">

        </Button>
      </form></div>
  );
};

export default LoginForm;
