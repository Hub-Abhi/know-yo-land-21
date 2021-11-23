const initialState = {
	isLoggedIn: false,
	userName: "",
	firstName: "",
	lastName: "",
	email: "",
	address: "",
	phone: "",
};

const userProfile = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN": {
			return action.payload;
		}
		case "LOGOUT": {
			return initialState;
		}
		default:
			return state;
	}
};

export default userProfile;
