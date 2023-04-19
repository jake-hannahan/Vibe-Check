import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import Nav from "./components/Nav";
import MainPage from "./components/vibes/MainPage";
import SongList from "./components/cards/SongList";
// // import VibeDetailPage from "./components/vibes/VibeDetailPage";
import CreateVibeForm from "./components/vibes/CreateVibeForm";
import VibesListPage from "./components/vibes/VibesListPage";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="account">
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="logout" element={<Logout />} />
				</Route>
				<Route
					path="song"
					element={<SongList playlistId="643ecf6a5bbf3e1d03d6ac0a" spotifyId="6dl39Fce97aewH2tI2Rlvi" />}
				/>
				<Route path="new" element={<CreateVibeForm />} />
				{/* {/* <Route path="detail" element={<VibeDetailPage vibeId="64401b1e741a5c8cf7a908db" />} /> */} */}
				<Route path="list" element={<VibesListPage />} />
				{/* Jay */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
