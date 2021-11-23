/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
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
const RegisterOwnerPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		address1: "",
		address2: "",
		password: "",
		confirmPassword: "",
		city: "",
		state: "",
		zipcode: "",
		phone: "",
	});
	const [registration, setRegistration] = useState("NOT_ATTEMPTED"); // Possible values: NOT_ATTEMPTED, SUCCESSFULL, FAILED

	const registerButtonClickHandler = async (e) => {
		e.preventDefault();
		try {
			const rawResponse = await axios.post("http://localhost:3001/register-owner", formData);
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
			return <h1 style={{ color: "red" }}>Owner Registration Failed !!! Please try again</h1>;
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
					<img src={`${leftImg}`} className="image" alt="left" />
				</div>

				<div className="split-right">
					<form className="row g-2 form-items">
						<div className="form-head">
							{getRegistrationStatus()}
							<h2>Owner Registration</h2>
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
								// eslint-disable-next-line jsx-a11y/no-autofocus
								autoFocus
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
							{/* <!-- <label for="inputAddress" className="form-label  add1" style="text-align: left;">Address 1</label> --> */}
							<input
								type="text"
								className="form-control"
								id="inputAddress1"
								placeholder="1234 Main st (Address1)"
								required
								onChange={(e) =>
									setFormData({ ...formData, address1: e.target.value })
								}
							/>
						</div>
						<div className="mt-0">
							{/* <!-- <label for="inputAddress2" className="form-label" style="text-align:left;">Address 2</label> --> */}
							<input
								type="text"
								className="form-control"
								id="inputAddress2"
								placeholder="Apartment, studio, or floor(Address2)"
								onChange={(e) =>
									setFormData({ ...formData, address2: e.target.value })
								}
							/>
						</div>
						<div className="col-md-6 mt-0" style={{ paddingLeft: "1%" }}>
							{/* <!-- <label for="inputCity" className="form-label">City</label> --> */}
							<input
								type="text"
								className="form-control"
								id="inputCity"
								aria-placeholder="city"
								placeholder="city"
								required
								onChange={(e) => setFormData({ ...formData, city: e.target.value })}
							/>
						</div>
						<div className="col-md-4 mt-0" style={{ paddingLeft: "1%" }}>
							{/* <!-- <label for="inputState" className="form-label">State</label> --> */}
							<select
								id="inputState"
								className="form-select"
								required
								onChange={(e) =>
									setFormData({
										...formData,
										state: e.target.options[e.target.selectedIndex].text,
									})
								}
							>
								<option defaultValue> States...</option>
								<option>Andhra Pradesh</option>
								<option>Arunachal Pradesh</option>
								<option>Assam</option>
								<option>Bihar</option>
								<option>Chhattisgarh</option>
								<option>Delhi</option>
								<option>Goa</option>
								<option>Gujarat</option>
								<option>Haryana</option>
								<option>Himachal Pradesh</option>
								<option>Jammu & Kashmir</option>
								<option>Jharkhand</option>
								<option>Karnataka</option>
								<option>Kerala </option>
								<option>Madhya Pradesh</option>
								<option>Manipur</option>
								<option>Meghalaya</option>
								<option>Mizoram</option>
								<option>Nagaland</option>
								<option>Odisha</option>
								<option>Punjab</option>
								<option>Rajasthan</option>
								<option>Sikkim</option>
								<option>Tamil Nadu</option>
								<option>Telangana</option>
								<option>Tripura</option>
								<option>Uttarakhand</option>
								<option>Uttar Pradesh</option>
								<option>West Bengal</option>
							</select>
						</div>
						<div className="col-md-2 mt-0" style={{ paddingLeft: "1%" }}>
							{/* <!-- <label for="inputZip" className="form-label">Zip</label> --> */}
							<input
								type="text"
								className="form-control"
								id="inputZip"
								placeholder="Zip"
								required
								onChange={(e) =>
									setFormData({ ...formData, zipcode: e.target.value })
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
								value="Reset"
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

export default RegisterOwnerPage;
