import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useGetVibeQuery } from "../../services/vibes";
import SongList from "../cards/SongList";
import Footer from "../cards/Footer";

function VibeDetailPage() {
	const location = useLocation();
	const { state } = location;
	const { data, isLoading } = useGetVibeQuery(state);

	const addDefaultSrc = (e) => {
		e.target.src =
			"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif";
	};

	if (isLoading) return <div>Vibe Loading...</div>;
	return (
		<>
			<div className="w-full h-[calc(4.5rem)]"></div>
			<div className="min-h-[calc(100vh-4.5rem)] h-fit bg-neutral-900 px-12">
				<div className="w-full grid grid-cols-3 gap-1 min-h-screen font-raleway tracking-wider">
					{/* Vibe Name Div */}
					<div className="col-span-3 flex justify-center items-center">
						<h1 className="overflow-hidden text-center text-5xl text-white rounded-md p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							{data.name}
						</h1>
					</div>
					{/* Detail Card Div */}
					<div className="p-8 col-span-3 bg-gray-400 bg-opacity-50 grid grid-cols-3 gap-1 w-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] h-content border-b-[6px] border-r-8 rounded-3xl">
						{/* Vibe Info: Pic + Created By Div */}
						<div className="col-span-1 flex flex-col h-100">
							<div className="w-100 h-100 mx-auto">
								<img
									className="w-full h-full rounded-xl"
									onError={addDefaultSrc}
									src={data.picture_url}
									alt={data.name}
								/>
							</div>
							<h1 className="mt-8 text-center text-2xl text-white font-bold">🤙 You're Vibing With:</h1>
							<h1 className="text-center text-2xl text-white font-bold">{data.created_by}</h1>
						</div>
						{/* Vibe Info: Mood + Activities Div */}
						<div className="col-span-1">
							<div className="pl-4 pr-4">
								<h1 className="text-center text-2xl text-white font-bold rounded-xl bg-gray-400 bg-opacity-75">
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
					<div className="col-span-3 flex justify-end items-end h-fit py-4">
						<button className="text-white font-bold rounded-full bg-gray-400 hover:bg-gray-700">
							<NavLink className="text-xl font-semibold text-white p-4" to="../list">
								All the Vibes 🡆
							</NavLink>
						</button>
					</div>
				</div>
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</>
	);
}

export default VibeDetailPage;
