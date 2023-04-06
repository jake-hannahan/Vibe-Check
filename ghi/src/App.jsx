import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import Nav from "./components/Nav";
import MainPage from "./components/vibes/MainPage";


function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<MainPage />}/>
				<Route path="account">
					<Route path="login" element={<Login />}/>
					<Route path="signup" element={<Signup />}/>
					<Route path="logout" element={<Logout />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
