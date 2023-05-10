import { useState } from "react";
import { useGetVibesQuery } from "../../services/vibes";
import ListCard from "../cards/ListCard";
import Footer from "../cards/Footer";

function VibesListPage() {
	const [selectedMood, setSelectedMood] = useState("All");

	const { data, isLoading, isSuccess, isError, error } = useGetVibesQuery({
		refetchOnMountOrArgChange: true,
	});

	let vibesData;

	const filteredData = () => {
		if (selectedMood === "All") {
			return data;
		} else {
			return data.filter((vibe) => vibe.mood.toLowerCase().includes(selectedMood.toLowerCase()));
		}
	};

	if (isLoading) {
		vibesData = (
			<div className="d-flex justify-content-center">
				<div className="spinner-border">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	} else if (isSuccess) {
		vibesData = filteredData().map((vibe) => {
			return <ListCard vibe={vibe} key={vibe.id} />;
		});
	} else if (isError) {
		vibesData = <div className="alert alert-danger">{error}</div>;
	}

	const moods = [
		{ id: 1, name: "All" },
		{ id: 2, name: "Adventurous" },
		{ id: 3, name: "Chill" },
		{ id: 4, name: "Confident" },
		{ id: 5, name: "Destructive" },
		{ id: 6, name: "Dreamy" },
		{ id: 7, name: "Energetic" },
		{ id: 8, name: "Gloomy" },
		{ id: 9, name: "Lazy" },
		{ id: 10, name: "Melancholic" },
		{ id: 11, name: "Productive" },
		{ id: 12, name: "Rejected" },
		{ id: 13, name: "Romantic" },
	];

	return (
		<>
			<div className="w-full h-[calc(4.5rem)]"></div>
			<div className="bg-neutral-900 min-h-screen h-fit w-full pb-8">
				<div>
					<div
						className="text-center text-6xl md:text-7xl lg:text-8xl
                        xl:text-9xl bg-neutral-900 text-white pt-10 font-megrim"
					>
						<span className="text-[#C43749]">A</span>
						<span>ll </span>
						<span className="text-[#C43749]">T</span>
						<span>he </span>
						<span className="text-[#C43749]">V</span>
						<span>ibes</span>
					</div>
					<div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
						<select
							onChange={(e) => setSelectedMood(e.target.value)}
							className="bg-neutral-900 w-3/4 p-2.5 text-center text-neutral-500
                      border rounded-md focus:ring-[#C43749] focus:border-[#C43749]
                      text-xl sm:text-md shadow-sm outline-none appearance-none
                      hover:bg-[#C43749] hover:text-white font-raleway"
						>
							{moods.map((mood) => (
								<option value={mood.name} key={mood.id}>
									{mood.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="bg-gray-900">
					<div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg 2xl:masonry-xl">
						<div className="">{vibesData}</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</>
	);
}

export default VibesListPage;
