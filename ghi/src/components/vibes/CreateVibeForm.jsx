import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleNameChange, handleMoodChange, handleSpotifyIdChange, handlePictureUrlChange, handleActivitiesChange, handleAddActivityChange, reset } from "../../features/vibes/newVibeSlice";
import { useCreateVibeMutation } from "../../services/vibes";


function CreateVibeForm() {
  const dispatch = useDispatch()
  const [createVibe] = useCreateVibeMutation()
  const newVibe = useSelector((state) => state.newVibe);
  const activities = useSelector((state) => state.newVibe.activities);


  const handleSubmit = (e) => {
    e.preventDefault()
    createVibe(newVibe)
    dispatch(reset())
  };

  const handleAddActivity = () => {
    dispatch(handleAddActivityChange())
  }

  return (
<>
      <h1 className="text-4xl mt-4 mb-2 font-bolder text-gray-900 text-center">Create a Vibe</h1>
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 bg-gray-400 rounded-lg shadow-md"
    >
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
        <input
          type="text"
          placeholder="Mood"
          value={newVibe.mood}
          onChange={(e) => dispatch(handleMoodChange(e.target.value))}
          className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
        />
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
              <option value="food/snack">Food/Snack</option>
              <option value="movie/tv_show">Movie/TV Show</option>
              <option value="game">Game</option>
              <option value="physical_activity">Physical Activity</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              value={activity.name}
              onChange={(e) => dispatch(handleActivitiesChange({ index, field: 'name', value: e.target.value }))}
              className="w-full p-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
      </label>
    <button type="button" onClick={handleAddActivity} className="w-full p-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700">Add another Activity</button>
    <button type="submit" className="w-full p-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700">Create Vibe</button>
  </form>
</>
  );
};

export default CreateVibeForm;
