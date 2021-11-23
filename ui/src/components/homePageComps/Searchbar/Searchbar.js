import React from "react";
import styled from "styled-components";
import { mobile } from "./../../../responsive";

const SearchBarWrapper = styled.div`
	margin: 15% 20%;
	margin-left: 30%;
	display: flex;
	${mobile({ margin: "15% 2% 15% 8%" })}
`;

const SearchBarInput = styled.input`
	height: 45px;
	width: 360px;
	border: none;
	background-color: rgb(236, 236, 236);
	border-radius: 2%;
	:placeholder-shown {
		font-size: 80%;
		padding-left: 2.8%;
		color: rgba(0, 0, 0, 0.473);
	}
	${mobile({
		height: "40px",
		width: "300px",
		"min-height": "40px",
		"min-width": "300px",
	})}
`;

const SearchBarSubmitButton = styled.button`
	border-radius: 2%;
	height: 45px;
	width: 115px;
	margin-left: 0%;
	border: none;
	font-size: 80%;
	padding-left: 0%;
	color: rgb(236, 236, 236);
	background-color: orangered;
	:hover {
		background-color: rgb(26, 107, 228);
	}
	${mobile({
		height: "40px",
		width: "100px",
		"min-height": "40px",
		"min-width": "100px",
	})}
`;
const Searchbar = () => {
	return (
		<div>
			<SearchBarWrapper className="searchbar">
				<SearchBarInput
					type="text"
					name="search"
					id="search"
					placeholder="Enter Location"
				/>
				<SearchBarSubmitButton>SEARCH</SearchBarSubmitButton>
			</SearchBarWrapper>
		</div>
	);
};

export default Searchbar;
