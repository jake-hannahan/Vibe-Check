import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useCreateVibeMutation } from "../../services/vibes";
import {
	handleNameChange,
	handleMoodChange,
	handleSpotifyIdChange,
	handlePictureUrlChange,
	handleActivitiesChange,
	handleAddActivityChange,
	handleRemoveActivityChange,
	reset,
} from "../../features/vibes/newVibeSlice";
import TipMessage from "../TipMessage";
import CreateVibeSuccess from "../notifications/CreateVibeSuccess";
import "../auth/form.css";
import Footer from "../cards/Footer";

function CreateVibeForm() {
	const dispatch = useDispatch();
	const [notification, setNotification] = useState(false);
	const [showTip, setShowTip] = useState(false);
	const [createVibe] = useCreateVibeMutation();
	const newVibe = useSelector((state) => state.newVibe);
	const activities = useSelector((state) => state.newVibe.activities);

	const handleAddActivity = () => {
		dispatch(handleAddActivityChange());
	};

	const handleRemoveActivity = () => {
		dispatch(handleRemoveActivityChange());
	};

	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		createVibe(newVibe);
		dispatch(reset());
		setNotification(true);
	};

	return (
		<>
			<div className="bg-neutral-900 min-h-screen max-h-fit flex justify-center items-center font-raleway tracking-wide">
				<div className="grid gap-8 justify-items-center">
					<div className="relative group">
						<div className="bg-neutral-900 rounded-lg glow">
							<form
								onSubmit={handleSubmit}
								className="max-w-sm mx-auto p-6 bg-neutral-900 rounded-lg shadow-md"
							>
								<h5 className="text-4xl my-2 font-bolder text-white text-center">Craft a Vibe</h5>
								<label className="block mb-2 font-bold text-gray-300">
									Name:
									<input
										type="text"
										placeholder="Name"
										value={newVibe.name}
										onChange={(e) => dispatch(handleNameChange(e.target.value))}
										className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63]"
									/>
								</label>
								<label className="block mb-2 font-bold text-gray-300">
									Mood:
									<select
										id={"moods"}
										value={newVibe.mood}
										onChange={(e) => dispatch(handleMoodChange(e.target.value))}
										className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5"
									>
										<option value="">Choose a Mood</option>
										<option value="Adventurous">Adventurous</option>
										<option value="Chill">Chill</option>
										<option value="Confident">Confident</option>
										<option value="Destructive">Destructive</option>
										<option value="Dreamy">Dreamy</option>
										<option value="Energetic">Energetic</option>
										<option value="Gloomy">Gloomy</option>
										<option value="Lazy">Lazy</option>
										<option value="Melancholic">Melancholic</option>
										<option value="Productive">Productive</option>
										<option value="Rejected">Rejected</option>

										<option value="Romantic">Romantic</option>
									</select>
								</label>
								<label className="block mb-2 font-bold text-gray-300">
									Spotify ID:
									<span>
										<button
											type="button"
											className="absolute right-4 p-1 rounded-full text-red-400 hover:text-white"
											onClick={() => {
												if (showTip === false) {
													setShowTip(true);
												} else {
													setShowTip(false);
												}
											}}
										>
											?
										</button>
									</span>
									{showTip ? <TipMessage /> : null}
									<input
										type="text"
										placeholder="Spotify ID"
										value={newVibe.spotify_id}
										onChange={(e) => dispatch(handleSpotifyIdChange(e.target.value))}
										className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63]"
									/>
								</label>
								<label className="block mb-2 font-bold text-gray-300">
									Picture URL:
									<input
										type="text"
										placeholder="Picture URL"
										value={newVibe.picture_url}
										onChange={(e) => dispatch(handlePictureUrlChange(e.target.value))}
										className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63]"
									/>
								</label>
								<label className="block mb-2 font-bold text-gray-300">
									Activities:
									{activities.map((activity, index) => (
										<div key={index}>
											<select
												id={`category-${index}`}
												value={activity.category}
												onChange={(e) =>
													dispatch(
														handleActivitiesChange({
															index,
															field: "category",
															value: e.target.value,
														})
													)
												}
												className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5"
											>
												<option value="">Choose a Category</option>
												<option value="Food or Snack">Food or Snack</option>
												<option value="Movie or TV Series">Movie or TV Series</option>
												<option value="Game">Game</option>
												<option value="Physical Activity">Physical Activity</option>
											</select>
											<input
												type="text"
												placeholder="Name"
												value={activity.name}
												onChange={(e) =>
													dispatch(
														handleActivitiesChange({
															index,
															field: "name",
															value: e.target.value,
														})
													)
												}
												className="w-full p-2 mt-2 mb-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63]"
											/>
										</div>
									))}
								</label>
								<button
									type="button"
									onClick={handleAddActivity}
									className="p-2 mt-4 mr-1 bg-blue-700 text-white rounded-lg hover:bg-blue-900"
								>
									Add another Activity
								</button>
								<button
									type="button"
									onClick={handleRemoveActivity}
									className="p-2 mt-4 bg-red-700 text-white rounded-lg hover:bg-red-900"
								>
									Remove last Activity
								</button>
								<button
									type="submit"
									className="w-full p-2 mt-4 bg-gray-500 hover:bg-[#e21f63] text-white rounded-lg hover:bg-gray-700"
								>
									Create Vibe
								</button>
							</form>
							<div className="fixed bottom-5 right-5 hover:drop-shadow-xl">
								{notification === true ? (
									<CreateVibeSuccess className="fixed bottom-5 right-5" />
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</>
	);
}

export default CreateVibeForm;
