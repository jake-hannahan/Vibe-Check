import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import Nav from "./components/Nav";
import { Main } from "./components/vibes/MainPage";
import VibeDetailPage from "./components/vibes/VibeDetailPage";
import CreateVibeForm from "./components/vibes/CreateVibeForm";
import VibesListPage from "./components/vibes/VibesListPage";
import EditVibeForm from "./components/vibes/EditVibeForm";
import MyVibesPage from "./components/vibes/MyVibesPage";
import ProtectedRoute from "./routing/ProtectedRoute";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="account">
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="logout" element={<Logout />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path="edit" element={<EditVibeForm />} />
					<Route path="new" element={<CreateVibeForm />} />
					<Route path="detail" element={<VibeDetailPage />} />
					<Route path="list" element={<VibesListPage />} />
					<Route path="my" element={<MyVibesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
