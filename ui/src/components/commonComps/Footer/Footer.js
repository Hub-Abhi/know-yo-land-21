/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../actions/userProfileAction";
import "./footer.css";

const FooterWrapper = styled.footer``;

const Footer = () => {
	const userProfileData = useSelector((state) => state.userProfile);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logoutButtonClickHandler = () => {
		navigate("/");
		dispatch(logoutAction());
	};
	return (
		<FooterWrapper className="footer-distributed" id="contact">
			<div className="footer-left">
				<h3>
					About<span>Know Yo Land</span>
				</h3>

				<div className="footer-links">
					<Link to="/">Home</Link>|<a href="/#">Contact Us</a>|
					{!userProfileData?.isLoggedIn ? (
						<Link to="/login-owner">Login</Link>
					) : (
						// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
						<p className="nav-link" onClick={logoutButtonClickHandler}>
							Logout
						</p>
					)}
				</div>

				<p className="footer-company-name">© Know Yo Land Ltd.</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p>
						<span>KIIT University</span>
						BHUBANESWAR, ODISHA - 756012
					</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 987654321</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p>
						<a href="mailto:kiit@kiit.ac.in">kiit@kiit.ac.in</a>
					</p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About the Project</span>
					This is a full fledged property/lands buying and selling website.
				</p>
				<div className="footer-icons">
					<a href="/#">
						<i className="fab fa-facebook" style={{ fontSize: "20px" }}></i>
					</a>
					<a href="/#">
						<i className="fab fa-twitter" style={{ fontSize: "20px" }}></i>
					</a>
					<a href="/#">
						<i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
					</a>
					<a href="/#">
						<i className="fab fa-linkedin" style={{ fontSize: "20px" }}></i>
					</a>
					<a href="/#">
						<i className="fab fa-youtube" style={{ fontSize: "20px" }}></i>
					</a>
				</div>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
