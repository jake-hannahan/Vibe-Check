import React from "react";
import SongList from "../cards/SongList";
import { useGetVibeQuery } from "../../services/vibes";

function VibeDetailPage(props) {
	const { data, isLoading } = useGetVibeQuery(props);
	if (isLoading) return <div>Vibe Loading...</div>;

	// Our moods are all lower case; this just capitalizes them for pretty aesthetic
	const capitalizeString = (string) => {
		if (string === "food/snack") {
			return "Food/Snack";
		} else if (string === "movie/tv_show") {
			return "Movie/TV Show";
		} else if (string === "physical_activity") {
			return "Movie/TV Show";
		}
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	};

	return (
		<>
			<div className="container m-auto grid grid-cols-3 gap-1 w-screen h-[65vh]">
				{/* Vibe Name Div */}
				<div className="col-span-3 flex justify-center items-center">
					<h1 className="overflow-hidden text-center text-5xl text-white font-bold shake rounded-md bg p-3 mt-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						{data.name}
					</h1>
				</div>
				{/* Detail Card Div */}
				<div className="col-span-3 grid grid-cols-3 gap-1 w-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] rounded-md bg p-3 mt-3 h-content">
					{/* Vibe Info: Pic + Created By Div */}
					<div className="col-span-1 flex flex-col h-100">
						<div className="w-100 h-100 mx-auto">
							<img className="w-full h-full rounded-xl" src={data.picture_url} alt={data.name} />
						</div>
						<h1 className="mt-8 text-center text-2xl text-white font-bold">🤙 You're Vibing With:</h1>
						<h1 className="text-center text-2xl text-white font-bold">{data.created_by}</h1>
					</div>
					{/* Vibe Info: Mood + Activities Div */}
					<div className="col-span-1">
						<div className="pl-4 pr-4">
							<h1
								className="text-center text-2xl text-white font-bold rounded-xl"
								style={{ backgroundColor: "white", color: "#00a896" }}
							>
								Mood: {capitalizeString(data.mood)}
							</h1>
						</div>
						{/* Creating white space between mood and activities */}
						<div className="h-8 w-auto"></div>
						{data.activities.map((activity) => (
							<div key={activity.name}>
								<h1 className="text-center text-2xl text-white font-bold">
									{capitalizeString(activity.category)}
								</h1>
								<h1 className="text-center text-2xl text-white font-bold">• {activity.name}</h1>
							</div>
						))}
					</div>
					{/* Playlist Div */}
					<div className="col-span-1 flex justify-center">
						<SongList spotifyId={data.spotify_id} />
					</div>
				</div>
			</div>
		</>
	);
}

export default VibeDetailPage;
