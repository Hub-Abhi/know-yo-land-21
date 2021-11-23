import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Navbar from "../components/homePageComps/Navbar/Navbar";
import headerImage from "../assets/images/header.jpg";
import Footer from "../components/commonComps/Footer/Footer";
import leftImg from "../assets/images/pexels-markus-spiske-247160.jpg";
import { loginAction } from "../actions/userProfileAction";
import "../css/login.css";

const Container = styled.div``;

const Header = styled.header`
	margin-top: 0px;
	margin-bottom: 40px;
	background: url(${headerImage}) no-repeat center center fixed;
	background-size: cover;
	overflow-x: hidden;
	padding-top: 0px;
`;

const Body = styled.div``;
const LoginPage = () => {
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
			{/* {console.log(formData)} */}
			<Header>
				<Navbar />
			</Header>
			<Body className="split">
				<div className="split-left">
					<img src={`${leftImg}`} alt="left-img" />
				</div>
				<div className="split-right">
					<form className="form-items">
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
				</div>
			</Body>
			<Footer />
		</Container>
	);
};

export default LoginPage;
