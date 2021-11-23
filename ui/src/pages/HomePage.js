import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar from "../components/homePageComps/Navbar/Navbar";
import Searchbar from "../components/homePageComps/Searchbar/Searchbar";
import Footer from "../components/commonComps/Footer/Footer";
import LoginCustomerPopup from "../components/commonComps/LoginCustomerPopup/LoginCustomerPopup";
import headerImage from "../assets/images/header.jpg";
import plotImg1 from "../assets/images/plot1.jpg";
import plotImg2 from "../assets/images/plot2.jpg";
import plotImg3 from "../assets/images/plot3.jpg";
import "../css/home.css";

const Container = styled.div``;

const Header = styled.header`
	margin-top: 0px;
	margin-bottom: 40px;
	background: url(${headerImage}) no-repeat center center fixed;
	background-size: cover;
	overflow-x: hidden;
	padding-top: 0px;
`;
const Body = styled.main``;

const HomePage = () => {
	const cardData = [
		{
			id: 0,
			imgSrc: `${plotImg1}`,
			cardTitle: "Bhubaneswar",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
		{
			id: 1,
			imgSrc: `${plotImg2}`,
			cardTitle: "Patia",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
		{
			id: 2,
			imgSrc: `${plotImg3}`,
			cardTitle: "Jaidev Vihar",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
		{
			id: 3,
			imgSrc: `${plotImg1}`,
			cardTitle: "Bhubaneswar",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
		{
			id: 4,
			imgSrc: `${plotImg2}`,
			cardTitle: "Patia",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
		{
			id: 5,
			imgSrc: `${plotImg3}`,
			cardTitle: "Jaidev Vihar",
			cardText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium atque nemo blanditiis eaque id ducimus esse? Quidem, totam modi exercitationem assumenda dolorum molestiae deleniti iusto aut quas incidunt animi.",
		},
	];
	const ContainerRef = useRef(null);
	const [isInterestedButtonClicked, setIsInterestedButtonClicked] = useState(false);
	const userProfileData = useSelector((state) => state.userProfile);
	// useEffect(() => {
	// 	if (tempState === null) setTempState(window.scrollY);
	// }, [window.scrollY]);

	return (
		<Container ref={ContainerRef}>
			{/* {console.log(ContainerRef.current)} */}
			<Header>
				<Navbar />
				<Searchbar />
			</Header>
			<Body>
				<div className="row row-cols-md-3 property">
					{cardData.map((cardObj) => (
						<div key={`${cardObj.id}`} className="col">
							<div className="card">
								<img src={cardObj.imgSrc} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{cardObj.cardTitle}</h5>
									<p className="card-text">{cardObj.cardText}</p>
								</div>
								<div className="card-footer">
									<button
										type="button"
										onClick={() => setIsInterestedButtonClicked(true)}
										className="btn btn-primary"
									>
										Interested
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</Body>
			<Footer />
			{userProfileData.isLoggedIn === false && isInterestedButtonClicked && (
				<LoginCustomerPopup onClickAway={() => setIsInterestedButtonClicked(false)} />
			)}
		</Container>
	);
};

export default HomePage;
