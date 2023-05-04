import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Main } from "./components/vibes/MainPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import ProtectedRoute from "./routing/ProtectedRoute";
import EditVibeForm from "./components/vibes/EditVibeForm";
import CreateVibeForm from "./components/vibes/CreateVibeForm";
import VibeDetailPage from "./components/vibes/VibeDetailPage";
import VibesListPage from "./components/vibes/VibesListPage";
import MyVibesPage from "./components/vibes/MyVibesPage";
import TheTeamPage from "./components/vibes/TheTeamPage";
import Resources from "./components/other/Resources";
import Team from "./components/vibes/Team";
import "./App.css";

function App() {
	return (
		<div className="w-[100vw]">
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
						<Route path="team" element={<TheTeamPage />} />
						<Route path="resources" element={<Resources />} />
						<Route path="teampic" element={<Team />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
