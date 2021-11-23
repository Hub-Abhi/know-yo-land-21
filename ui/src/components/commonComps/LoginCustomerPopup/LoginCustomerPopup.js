/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../actions/userProfileAction";
import ClickAwayListener from "../ClickAwayListener";
// import "../../../css/login.css";
import "./LoginCustomerPopup.css";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgb(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Body = styled.div``;
const LoginPage = (props) => {
	const [formData, setFormData] = useState({ username: "", password: "", remember: true });
	const [login, setLogin] = useState("NOT_ATTEMPTED");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const loginButtonClickHandler = async (e) => {
		e.preventDefault();
		try {
			const rawResponse = await axios.post("http://localhost:3001/login-customer", formData);
			const response = await rawResponse.data;
			if (response.success === true) {
				setLogin("SUCCESS");
				const data = {
					isLoggedIn: true,
					userName: response.userName,
					firstName: response.firstName,
					lastName: response.lastName,
				};
				dispatch(loginAction(data));
				navigate("/home");
			} else {
				setLogin("FAILED");
			}
		} catch (exception) {
			setLogin("FAILED");
			console.error(exception);
		}
	};

	return (
		<Container>
			<ClickAwayListener onClickAway={props.onClickAway}>
				<Body className="body-lcp">
					<form className="form-items-lcp">
						<div className="container">
							{login === "FAILED" && (
								<h1 style={{ color: "red" }}>Oops!!! Invalid credentials</h1>
							)}
							<h1>Login/Sign-up (Customer)</h1>
							<div className="dashed"></div>
							<label htmlFor="uname">
								<b>Username</b>
							</label>
							<input
								id="username-input"
								// eslint-disable-next-line jsx-a11y/no-autofocus
								autoFocus
								type="text"
								placeholder="Enter Username/Email"
								// value={formData.username}
								onChange={(e) =>
									setFormData({ ...formData, username: e.target.value })
								}
								required
							/>

							<label htmlFor="psw">
								<b>Password</b>
							</label>
							<input
								type="password"
								placeholder="Enter Password"
								// value={formData.password}
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
								required
							/>

							<button type="submit" onClick={loginButtonClickHandler}>
								Login
							</button>
							<label>
								<input
									type="checkbox"
									defaultChecked
									onChange={(e) =>
										setFormData({ ...formData, remember: e.target.checked })
									}
								/>
								Remember me
							</label>
							<span className="psw">
								<a href="/#" style={{ color: "rgb(110, 42, 165)" }}>
									Forgot password?
								</a>
							</span>
						</div>

						<div className="register">
							<h4>New user?</h4>
							<div className="flex-container">
								<span className="user-owner">
									<Link to="/register-owner">Register as Land Owner</Link>
								</span>
								<span className="user-customer">
									<Link to="/register-customer">Register as Customer</Link>
								</span>
							</div>
						</div>
						<div className="dashed"></div>
					</form>
				</Body>
			</ClickAwayListener>
		</Container>
	);
};

export default LoginPage;
