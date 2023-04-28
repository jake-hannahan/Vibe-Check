import { useSelector, useDispatch } from "react-redux";
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
import CreateVibeSuccess from "../notifications/CreateVibeSuccess";
import { useCreateVibeMutation } from "../../services/vibes";
import { useState } from "react";
import "../auth/form.css";
import TipMessage from "../TipMessage";


function CreateVibeForm() {
	const [notification, setNotification] = useState(false);
	const dispatch = useDispatch();
	const [createVibe] = useCreateVibeMutation();
	const newVibe = useSelector((state) => state.newVibe);
	const activities = useSelector((state) => state.newVibe.activities);
	const [showTip, setShowTip] = useState(false)


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newVibe);
		createVibe(newVibe);
		dispatch(reset());
		setNotification(true);
	};

	const handleAddActivity = () => {
		dispatch(handleAddActivityChange());
	};

	const handleRemoveActivity = () => {
		dispatch(handleRemoveActivityChange());
	};
	return (
		<>
			<div className="grid gap-8 m-8 justify-items-center">
				<div className="relative group">
					<div className="bg-neutral-900 rounded-lg">
						<form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-gray-400 rounded-lg shadow-md">
							<h5 className="text-4xl font-bolder text-gray-900 text-center">Create a Vibe</h5>
							<label className="block mb-2 font-bold text-gray-600">
								Name:
								<input
									type="text"
									placeholder="Name"
									value={newVibe.name}
									onChange={(e) => dispatch(handleNameChange(e.target.value))}
									className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
								/>
							</label>
							<label className="block mb-2 font-bold text-gray-600">
								Mood:
								<select
									id={"moods"}
									value={newVibe.mood}
									onChange={(e) => dispatch(handleMoodChange(e.target.value))}
									className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option value="">Choose a Mood</option>
									<option value="Productive">Productive</option>
									<option value="Adventurous">Adventurous</option>
									<option value="Confident">Confident</option>
									<option value="Romantic">Romantic</option>
									<option value="Energetic">Energetic</option>
									<option value="Destructive">Destructive</option>
									<option value="Gloomy">Gloomy</option>
									<option value="Rejected">Rejected</option>
									<option value="Melancholic">Melancholic</option>
									<option value="Chill">Chill</option>
									<option value="Lazy">Lazy</option>
									<option value="Dreamy">Dreamy</option>
								</select>
							</label>
							<label className="block mb-2 font-bold text-gray-600">
								Spotify ID:
									<span>
										<button type="button" className="absolute right-4 p-1 rounded-full text-red-400 hover:text-white" onClick={() => {if(showTip===false){setShowTip(true)}else{setShowTip(false)} }}>
											?
										</button>
									</span>
									{ showTip ? <TipMessage /> : null }
								<input
									type="text"
									placeholder="Spotify ID"
									value={newVibe.spotify_id}
									onChange={(e) => dispatch(handleSpotifyIdChange(e.target.value))}
									className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
								/>
							</label>
							<label className="block mb-2 font-bold text-gray-600">
								Picture URL:
								<input
									type="text"
									placeholder="Picture URL"
									value={newVibe.picture_url}
									onChange={(e) => dispatch(handlePictureUrlChange(e.target.value))}
									className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
								/>
							</label>
							<label className="block mb-2 font-bold text-gray-600">
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
											className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
												dispatch(handleActivitiesChange({ index, field: "name", value: e.target.value }))
											}
											className="w-full p-2 mt-2 mb-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
										/>
									</div>
								))}
							</label>
							<button
								type="button"
								onClick={handleAddActivity}
								className="p-2 mt-4 mr-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
							>
								Add another Activity
							</button>
							<button
								type="button"
								onClick={handleRemoveActivity}
								className="p-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
							>
								Remove last Activity
							</button>
							<button type="submit" className="w-full p-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700">
								Create Vibe
							</button>
						</form>
						<div className="fixed bottom-5 right-5 hover:drop-shadow-xl">
							{notification === true ? <CreateVibeSuccess className="fixed bottom-5 right-5" /> : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateVibeForm;
