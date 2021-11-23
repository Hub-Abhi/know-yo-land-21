/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/eagle-transparent-logo.png";
import "./navbar.css";
import { logoutAction } from "../../../actions/userProfileAction";

const NavBarContainer = styled.nav``;

const Navbar = () => {
	const userProfileData = useSelector((state) => state.userProfile);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logoutButtonClickHandler = () => {
		navigate("/");
		dispatch(logoutAction());
	};
	const getFormattedName = () =>
		`${userProfileData?.firstName?.[0]?.toUpperCase()}${userProfileData?.firstName?.slice(
			1
		)} ${userProfileData?.lastName?.[0]?.toUpperCase()}${userProfileData.lastName?.slice(1)}`;

	return (
		<NavBarContainer className="navbar-expand-lg navbar-dark navbar">
			<Link to="/" className="navbar-brand">
				<img
					src={`${logo}`}
					width="40"
					height="30"
					className="d-inline-block align-top"
					alt="logo"
				/>
				<p>Know Yo Land</p>
			</Link>
			{userProfileData?.isLoggedIn && (
				<div>
					<p style={{ color: "white", fontSize: "120%" }}>
						{`Welcome ${getFormattedName()}`}
					</p>
				</div>
			)}
			<div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse active-links" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/admin">
								Contact
							</Link>
						</li>
						{userProfileData?.isLoggedIn && (
							<li className="nav-item active">
								<Link className="nav-link" to="/admin">
									Profile
								</Link>
							</li>
						)}
						<li className="nav-item active">
							{!userProfileData?.isLoggedIn ? (
								<Link className="nav-link" to="/login-owner">
									Login
								</Link>
							) : (
								// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
								<p className="nav-link" onClick={logoutButtonClickHandler}>
									Logout
								</p>
							)}
						</li>
					</ul>
				</div>
			</div>
		</NavBarContainer>
	);
};

export default Navbar;
