export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (data) => ({
	type: LOGIN,
	payload: data,
});

export const logoutAction = () => ({
	type: LOGOUT,
	payload: null,
});
