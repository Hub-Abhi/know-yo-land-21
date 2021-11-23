import {
	HomePage,
	LoginOwnerPage,
	RegisterOwnerPage,
	RegisterCustomerPage,
	LoginCustomerPage,
} from "../pages";
import AdminPage from "./../pages/AdminPage";

const routes = [
	{
		map: "0",
		path: "/",
		component: HomePage,
		exact: true,
	},
	{
		map: "1",
		path: "/login-owner",
		component: LoginOwnerPage,
		exact: true,
	},
	{
		map: "2",
		path: "/register-owner",
		component: RegisterOwnerPage,
		exact: true,
	},
	{
		map: "3",
		path: "/register-customer",
		component: RegisterCustomerPage,
		exact: true,
	},
	{
		map: "4",
		path: "/home",
		component: HomePage,
		exact: false,
	},
	{
		map: "5",
		path: "/admin",
		component: AdminPage,
		exact: true,
	},
	{
		map: "1",
		path: "/login-customer",
		component: LoginCustomerPage,
		exact: true,
	},
	// {
	// 	path: "/callprep/:id",
	// 	component: CallPrep,
	// 	exact: false
	// },
	// {
	// 	path: "/in-call",
	// 	component: InCall,
	// 	exact: false
	// },
	// {
	// 	path: "/customer-emails",
	// 	component: CustomerEmailsContainer,
	// 	exact: true
	// },
	// {
	// 	path: "/emailprep/:id/:metaid",
	// 	component: EmailPrepContainer,
	// 	exact: false
	// },
	// {
	// 	path: "/freeda-results-emailprep/:id/:metaid",
	// 	component: EmailPrepContainer,
	// 	exact: false
	// },
	// {
	// 	path: "/freeda-results",
	// 	component: FreedaResults,
	// 	exact: false
	// },
	// {
	// 	path: "/post-call",
	// 	component: PostCall,
	// 	exact: false
	// },
	// {
	// 	path: "/final",
	// 	component: Final,
	// 	exact: false
	// }
];

export default routes;
