import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import Nav from "./components/Nav";
import MainPage from "./components/vibes/MainPage";
import SongList from "./components/cards/SongList";
import VibeDetailPage from "./components/vibes/VibeDetailPage";
import CreateVibeForm from "./components/vibes/CreateVibeForm";
// import VibesListPage from "./components/vibes/VibesListPage";
import EditVibeForm from "./components/vibes/EditVibeForm";

const testVibe = {
    mood: "chill",
    name: "string",
    spotify_id: "6dl39Fce97aewH2tI2Rlvi",
    picture_url: "string",
    activities: [
      {
        category: "food/snack",
        name: "string"
      },
      {
        category: "game",
        name: "feawfe"
      }
    ],
    id: "643ecab3b8ea601398ca835f",
    created_by: "user",
    playlist_id: "643ecf6a5bbf3e1d03d6ac0a"
  };
import MyVibesCard from "./components/cards/MyVibeCard";

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
				<Route path="edit" element={<EditVibeForm vibe={testVibe} />} />
				<Route path="new" element={<CreateVibeForm />} />
				<Route path="detail" element={<VibeDetailPage vibeId="64417679a41679470e8a72d3" />} />
				{/* Alana */}
				{/* Jay */}
				<Route path="my" element={<MyVibesCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
