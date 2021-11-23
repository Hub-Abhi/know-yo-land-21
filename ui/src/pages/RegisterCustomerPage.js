/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../components/homePageComps/Navbar/Navbar";
import headerImage from "../assets/images/header.jpg";
import Footer from "../components/commonComps/Footer/Footer";
import leftImg from "../assets/images/left-image.jpg";
import "../css/registerOwner.css";

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
const RegisterCustomerPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phone: "",
	});
	const [registration, setRegistration] = useState("NOT_ATTEMPTED"); // Possible values: NOT_ATTEMPTED, SUCCESSFULL, FAILED

	const registerButtonClickHandler = async (e) => {
		e.preventDefault();
		try {
			const rawResponse = await axios.post(
				"http://localhost:3001/register-customer",
				formData
			);
			const response = await rawResponse.data;
			if (response.success === true) {
				setRegistration("SUCCESSFULL");
			} else {
				setRegistration("FAILED");
			}
		} catch (exception) {
			setRegistration("FAILED");
		}
	};

	const getRegistrationStatus = () => {
		if (registration === "NOT_ATTEMPTED") {
			return <></>;
		}
		if (registration === "FAILED") {
			return (
				<h1 style={{ color: "red" }}>Customer Registration Failed !!! Please try again</h1>
			);
		}

		return <h1 style={{ color: "red" }}>Registered successfully! Login to continue</h1>;
	};

	return (
		<Container>
			<Header>
				<Navbar />
			</Header>
			<Body className="split">
				<div className="split-left">
					<img src={`${leftImg}`} className="image" alt="left-side" />
				</div>

				<div className="split-right">
					<form className="row g-2 form-items" method="POST" action="/register-owner">
						<div className="form-head">
							{getRegistrationStatus()}
							<h2>Customer Registration</h2>
						</div>
						<div className="vert-line"></div>
						<div className="col-md-6 mt-0">
							<input
								type="text"
								id="First-name"
								className="form-control input-group input-group-md col-xs-*"
								placeholder="First name"
								aria-label="First name"
								required
								onChange={(e) =>
									setFormData({ ...formData, firstName: e.target.value })
								}
							/>
						</div>
						<div className="col-md-6 mt-0">
							<input
								type="text"
								id="Last-name"
								className="form-control input-group input-group-lg col-xs-*"
								placeholder="Last name"
								aria-label="Last name"
								required
								onChange={(e) =>
									setFormData({ ...formData, lastName: e.target.value })
								}
							/>
						</div>
						{/* <!-- <label for="inputEmail4" className="form-label">Email</label> --> */}
						<div className="mt-0">
							<input
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder="Email"
								required
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>
						<div className="mt-0">
							<input
								type="text"
								id="inputUsername"
								className="form-control"
								placeholder="Username"
								aria-label="Username"
								aria-describedby="basic-addon1"
								required
								onChange={(e) =>
									setFormData({ ...formData, userName: e.target.value })
								}
							/>
						</div>
						<div className="col-md-6 mt-0">
							{/* <!-- <label for="inputPassword4" className="form-label">Password</label> --> */}
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
								placeholder="Password"
								required
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>
						</div>
						<div className="col-md-6 mt-0">
							{/* <!-- <label for="inputPassword4" className="form-label">Password</label> --> */}
							<input
								type="password"
								className="form-control"
								id="inputConfirmPassword4p"
								placeholder="Confirm-Password"
								required
								onChange={(e) =>
									setFormData({ ...formData, confirmPassword: e.target.value })
								}
							/>
						</div>
						<div className="mt-0">
							<input
								type="tel"
								className="form-control"
								id="inputPhone"
								placeholder="Phone(XXX-XXX-XXXX)"
								required
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
							/>
						</div>
						<div className="col-12 mt-0">
							<input
								type="submit"
								value="Submit"
								style={{ marginBottom: "10px" }}
								className="btn btn-primary btn-signup mb-0"
								id="submit"
								onClick={registerButtonClickHandler}
							/>
							<button
								type="reset"
								value="reset"
								style={{ marginBottom: "10px" }}
								className="btn btn-primary btn-reset mb-0"
								onClick={() => setRegistration("NOT_ATTEMPTED")}
							>
								Reset
							</button>
						</div>
						<div className="vert-line"></div>
					</form>
				</div>
			</Body>
			<Footer />
		</Container>
	);
};

export default RegisterCustomerPage;
