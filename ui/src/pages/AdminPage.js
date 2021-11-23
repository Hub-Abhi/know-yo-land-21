/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import profilePic from "../assets/images/profile-pic.jpg";
import logo from "../assets/images/eagle-transparent-logo.png";
import "../css/admin.css";
import { logoutAction } from "../actions/userProfileAction";

const AdminPageWrapper = styled.div`
	background-color: rgb(231, 239, 252);
	width: 100vw;
	height: 100vh;
`;

const DASHBOARD = "DASHBOARD";
const POST_LAND = "POST_LAND";
const BUY_LAND = "BUY_LAND";
const MY_WORKLIST = "MY_WORKLIST";
const VERIFICATION = "VERIFICATION";
const CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT";

const AdminPage = () => {
	const [activePageName, setActivePageName] = useState(DASHBOARD);
	const userProfileData = useSelector((state) => state.userProfile);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logoutButtonClickHandler = () => {
		navigate("/");
		dispatch(logoutAction());
	};
	const getFirstName = () =>
		`${userProfileData?.firstName?.[0]?.toUpperCase()}${userProfileData?.firstName?.slice(1)}`;
	const getFormattedName = () =>
		`${getFirstName()} ${userProfileData?.lastName?.[0]?.toUpperCase()}${userProfileData.lastName?.slice(
			1
		)}`;

	const getContentToRender = () => {
		switch (activePageName) {
			case DASHBOARD:
				return (
					<>
						<div className="dashboard">
							<h2 style={{ height: "17%" }}>Your Dashboard</h2>

							<div className="about-admin">
								<div className="profile-pic">
									<img src={profilePic} alt="" />
								</div>

								<div className="personal-info">
									<h1>{getFormattedName()}</h1>
									<h3>{userProfileData?.userName}</h3>
								</div>

								<div className="contact-admin">
									<h3>
										<i className="fas fa-phone"></i> {userProfileData?.phone}
									</h3>
									<h3>
										<i className="fas fa-envelope"></i> {userProfileData.email}
									</h3>
									<h4>
										<i className="fas fa-map-marker-alt"></i>{" "}
										{userProfileData.address}
									</h4>
								</div>

								<div className="social-media">
									<div style={{ width: "100%", marginTop: "7px" }}>
										<ul>
											<li>
												<i className="fab fa-facebook"></i>
											</li>
											<li>
												<i className="fab fa-instagram"></i>
											</li>
											<li>
												<i className="fab fa-twitter"></i>
											</li>
											<li>
												<i className="fab fa-linkedin-in"></i>
											</li>
										</ul>
										<div className="vertical-line"></div>
									</div>
									<div className="edit">
										<button type="button">Edit Profile</button>
									</div>
								</div>
							</div>
						</div>
						<div className="preferences">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<h2>My Preferences</h2>
								<button type="button">Edit Preferences</button>
							</div>
							<div className="preferences-blocks">
								<div className="area pref">
									<i className="fas fa-chart-area"></i>
									<span>1200 Sqft.</span>
								</div>
								<div className="location pref">
									<i className="fas fa-search-location"></i>
									<span>Delhi</span>
								</div>
								<div className="price pref">
									<i className="far fa-money-bill-alt"></i>
									<span>&lt; 10 Lakhs</span>
								</div>
								<div className="distance pref">
									<i className="fas fa-road"></i>
									<span>&lt; 20 Km.</span>
								</div>
							</div>
						</div>
					</>
				);
			case POST_LAND:
				return (
					<div className="postland">
						<h2>Post Your Land</h2>
					</div>
				);
			case BUY_LAND:
				return (
					<div className="buyland">
						<h2>Buy a Land</h2>
					</div>
				);
			case MY_WORKLIST:
				return (
					<div className="buyland">
						<h2>My Watchlist</h2>
					</div>
				);
			case VERIFICATION:
				return (
					<div className="buyland">
						<h2>Get KYL Verified</h2>
					</div>
				);
			case CUSTOMER_SUPPORT:
				return (
					<div className="buyland categoryitem cath">
						<h2>Customer Support</h2>
					</div>
				);
			default:
				return <></>;
		}
	};

	const ListItemsData = [
		{
			iClassName: "fas fa-bars",
			linkName: "Dashboard",
			linkId: DASHBOARD,
		},
		{
			iClassName: "fas fa-map-marked-alt",
			linkName: "Post your Land",
			linkId: POST_LAND,
		},
		{
			iClassName: "fas fa-rupee-sign",
			linkName: "Buy a Land",
			linkId: BUY_LAND,
		},
		{
			iClassName: "far fa-star",
			linkName: "My Watchlist",
			linkId: MY_WORKLIST,
		},
		{
			iClassName: "far fa-check-circle",
			linkName: "Get KYL Verified",
			linkId: VERIFICATION,
		},
		{
			iClassName: "fas fa-headset",
			linkName: "Customer Support",
			linkId: CUSTOMER_SUPPORT,
		},
	];

	return (
		<AdminPageWrapper>
			<div style={{ width: "100vw", height: "100vh", padding: "2%", display: "flex" }}>
				<div className="vert-nav left-part-ap">
					<div>
						<div className="icon">
							<img src={logo} alt="icon" />
						</div>

						<div className="nav-head">
							<i className="fas fa-user-lock"></i>
							<span>Admin</span>
						</div>

						<div className="nav-links">
							<ul className="list-items">
								{ListItemsData.map((listItem) => (
									<li
										key={listItem.linkId}
										onClick={() => setActivePageName(listItem.linkId)}
										className="category cath activecat"
									>
										<i className={listItem.iClassName}></i>
										<span>{listItem.linkName}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="footer-wrapper">
						<div className="vertical-line"></div>

						<div className="copywrite">
							<p>&copy; Know Yo Land 2021.</p>
						</div>
					</div>
				</div>
				<div className="right-part-ap">
					<div style={{ height: "15%" }}>
						<div className="hori-nav">
							<p>
								<i className="fab fa-waze"></i>&nbsp;
								<span>{`Hello ${getFirstName()}, Welcome Back`}</span>
							</p>
							<ul className="notify">
								<li>
									<i className="far fa-bell"></i>
								</li>
								<li>
									<p onClick={logoutButtonClickHandler}>Logout</p>
								</li>
							</ul>
						</div>
						<div className="blue-line"></div>
					</div>
					<div className="content-wrapper">{getContentToRender()}</div>
				</div>
			</div>
		</AdminPageWrapper>
	);
};

export default AdminPage;
