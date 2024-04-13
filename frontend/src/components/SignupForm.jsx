/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../css/template.css";
import Button from "./Button";
const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: "oneDay",
  });

  function changeHandler(evt) {
    setFormData((oldData) => {
      return { ...oldData, [evt.target.name]: evt.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created Successfully");
    const accountData = {
      ...formData,
    };

    console.log("printing data");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="formheight">
        <label htmlFor="userName">Username*</label>
        <br />
        <input
          type="text"
          required
          placeholder="janeDoe12"
          onChange={changeHandler}
          value={FormData.firstName}
          name="userName"
          id="userName"
        />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          required
          placeholder="janedoe@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          id="email"
        />

        <div className="outsideEye">

          <label htmlFor="password">Create Password</label>
          <br />
          <input
            type={showCreatePass ? "text" : "password"}
            required
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
            id="password"
          />
          <span className="eye" onClick={() => setShowCreatePass(!showCreatePass)}>
            {showCreatePass ? (
              <AiOutlineEyeInvisible fontSize={14} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={14} fill="#AFB2BF" />
            )}
          </span>
        </div>


        <div className="outsideEye">
          <label htmlFor="finalPassword">Confirm Password</label>
          <br />
          <input
            type={showConfirmPass ? "text" : "password"}
            required
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
            name="confirmPassword"
            id="finalPassword"
          />

          <span className="eye" onClick={() => setShowConfirmPass(!showConfirmPass)}>
            {showConfirmPass ? (
              <AiOutlineEyeInvisible fontSize={14} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={14} fill="#AFB2BF" />
            )}
          </span>

        </div>

        <label htmlFor="plan">Choose your plan</label>
        <br />
        <select name="plan" id="plan" onChange={changeHandler}>
          <option value="oneDay">One Day plan</option>
          <option value="monthly">Monthly plan</option>
          <option value="yearly">Yearly plan</option>
        </select>

        <Button text="Create Account"
          color="#00A3FF"
          border="1.5px solid #999999"
          align="yes"
          mright="yes">
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
``;
