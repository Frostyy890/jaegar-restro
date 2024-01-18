import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.styles.scss";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loginUser } from "../../redux/auth/auth-actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { success, message, loading, user } = useAppSelector(
    (state) => state.auth
  );
  const toast = useToast();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(inputValue));
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  if (loading) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
    <div className="login_form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
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
          Submit
        </button>
        <span>
          Don't have an account? <Link to={"/"}>Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
