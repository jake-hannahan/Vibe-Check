import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import MyVibesCard from "../cards/MyVibeCard";

function MyVibesPage() {
	const { data, isLoading } = useGetVibesByCreatorQuery();
	if (isLoading) return <div>Loading...</div>;
	const rows = Math.ceil(data.length / 3);

	return (
		<div className="grid justify-center bg-white">
			<div className="container text-center text-4xl p-4 text-bold text-black">My Vibes!</div>
			{/* loop through each row */}
			{Array.from({ length: rows }).map((_, i) => (
				<div className="flex container gap-4 grid xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 w-content" key={i}>
					{/* display up to 3 items in each row */}
					{data.slice(i * 3, i * 3 + 3).map((vibe) => (
						<div className="mx-1 mb-4" key={vibe.id}>
							<MyVibesCard vibe={vibe} />
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default MyVibesPage;
