import React from "react";
import { NavLink } from "react-router-dom";
import SongList from "../cards/SongList";
import { useGetVibeQuery } from "../../services/vibes";
import { useLocation } from "react-router-dom";

function VibeDetailPage() {
	const location = useLocation();
	const { state } = location;
	const { data, isLoading } = useGetVibeQuery(state);

	if (isLoading) return <div>Vibe Loading...</div>;
	return (
		<>
			<div className="container m-auto grid grid-cols-3 gap-1 w-screen h-screen font-raleway tracking-wider">
				{/* Vibe Name Div */}
				<div className="col-span-3 flex justify-center items-center">
					<h1 className="overflow-hidden text-center text-5xl text-white rounded-md p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						{data.name}
					</h1>
				</div>
				{/* Detail Card Div */}
				<div className="p-8 col-span-3 bg-gray-400 bg-opacity-50 grid grid-cols-3 gap-1 w-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] rounded-md h-content">
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
								className="text-center text-2xl text-white font-bold rounded-xl bg-gray-400 bg-opacity-75"
								// style={{ backgroundColor: "white", color: "#00a896" }}
							>
								{data.mood}
							</h1>
						</div>
						{/* Creating white space between mood and activities */}
						<div className="h-8 w-auto"></div>
						{data.activities.map((activity) => (
							<div key={activity.name} className="mb-3">
								<h1 className="text-center text-2xl text-white font-bold">{activity.category}</h1>
								<h1 className="text-center text-2xl text-white font-bold">• {activity.name}</h1>
							</div>
						))}
					</div>
					{/* Playlist Div */}
					<div className="col-span-1 flex justify-center">
						<SongList spotifyId={data.spotify_id} />
					</div>
				</div>
				<div className="col-span-3 flex justify-end items-end mt-2">
					<button className="text-white font-bold py-2 px-4 rounded-full bg-[#02c39a] hover:bg-[#00a896]">
						<NavLink className="pr-2 text-xl font-semibold text-white" to="../">
							Back to All the Vibes
						</NavLink>
					</button>
				</div>
			</div>
		</>
	);
}

export default VibeDetailPage;
