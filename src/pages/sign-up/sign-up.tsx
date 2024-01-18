import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up.styles.scss";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { registerUser } from "../../redux/auth/auth-actions";
import { userInfo } from "../../redux/auth/auth-slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { message, success, loading, user } = useAppSelector(
    (state) => state.auth
  );
  // const toast = useToast();
  const [inputValue, setInputValue] = useState<userInfo>({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(inputValue));

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  if (loading) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
    <div className="form_container">
      <h2>Create Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="form-input"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Sign up
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
