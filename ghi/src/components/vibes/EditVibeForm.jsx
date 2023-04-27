import { useSelector, useDispatch } from "react-redux";
import {
	handleNameChange,
	handleMoodChange,
	handleSpotifyIdChange,
	handlePictureUrlChange,
	handleActivitiesChange,
	handleAddActivityChange,
	handleRemoveActivityChange,
	// reset,
} from "../../features/vibes/newVibeSlice";
import EditVibeSuccess from "../notifications/EditVibeSuccess";
import { useUpdateVibeMutation } from "../../services/vibes";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

function EditVibeForm() {
	const [notification, setNotification] = useState(false);
	const dispatch = useDispatch();
	const [updateVibe] = useUpdateVibeMutation();
	const newVibe = useSelector((state) => state.newVibe);
	const activities = useSelector((state) => state.newVibe.activities);
	const location = useLocation();
	const { state } = location;

	const handleAddActivityCallback = useCallback(() => {
		dispatch(handleAddActivityChange());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateVibe({ id: state.vibe.id, body: newVibe });
		// dispatch(reset());
		setNotification(true);
	};

	useEffect(() => {
		const setNewVibeData = () => {
			dispatch(handleNameChange(state.vibe.name));
			dispatch(handleMoodChange(state.vibe.mood));
			dispatch(handleSpotifyIdChange(state.vibe.spotify_id));
			dispatch(handlePictureUrlChange(state.vibe.picture_url));
			for (let i = 0; i < state.vibe.activities.length - 1; i++) {
				handleAddActivityCallback();
			}
			state.vibe.activities.forEach((activity, index) => {
				dispatch(handleActivitiesChange({ index, field: "category", value: activity.category }));
				dispatch(handleActivitiesChange({ index, field: "name", value: activity.name }));
			});
		};
		setNewVibeData();
	}, [
		dispatch,
		handleAddActivityCallback,
		state.vibe.activities,
		state.vibe.mood,
		state.vibe.name,
		state.vibe.picture_url,
		state.vibe.spotify_id,
	]);

	const handleAddActivity = () => {
		dispatch(handleAddActivityChange());
	};

	const handleRemoveActivity = () => {
		dispatch(handleRemoveActivityChange());
	};
	return (
		<>
			<h1 className="text-4xl mt-4 mb-2 font-bolder text-gray-900 text-center">Edit a Vibe</h1>
			<form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-gray-400 rounded-lg shadow-md">
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
					Edit Vibe
				</button>
			</form>
			<div className="fixed bottom-5 right-5 hover:drop-shadow-xl">
				{notification === true ? <EditVibeSuccess className="fixed bottom-5 right-5" /> : null}
			</div>
		</>
	);
}

export default EditVibeForm;
