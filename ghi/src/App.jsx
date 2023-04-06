import "./App.css";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import Nav from "./components/Nav";

function App() {
	return (
		<div>
			{/* <Login />
			<Logout />
			<Signup /> */}
			<Nav>Bar</Nav>
		</div>
	);
}

export default App;
