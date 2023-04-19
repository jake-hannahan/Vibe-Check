import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleNameChange, handleMoodChange, handleSpotifyIdChange, handlePictureUrlChange, handleActivitiesChange, reset } from "../../features/vibes/newVibeSlice";
import { useCreateVibeMutation } from "../../services/vibes";


function CreateVibeForm() {
  const dispatch = useDispatch()
  const [createVibe] = useCreateVibeMutation()
  const newVibe = useSelector((state) => state.newVibe);
  const activities = useSelector((state) => state.newVibe.activities);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newVibe, typeof(newVibe), JSON.stringify(newVibe))
    createVibe(newVibe)
    dispatch(reset())
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={newVibe.name}
          onChange={(e) => dispatch(handleNameChange(e.target.value))}
        />
      </label>
      <label>
        Mood:
        <input
          type="text"
          value={newVibe.mood}
          onChange={(e) => dispatch(handleMoodChange(e.target.value))}
        />
      </label>
      <label>
        Spotify Id:
        <input
          type="text"
          value={newVibe.spotify_id}
          onChange={(e) => dispatch(handleSpotifyIdChange(e.target.value))}
        />
      </label>
      <label>
        Picture Url:
        <input
          type="text"
          value={newVibe.picture_url}
          onChange={(e) => dispatch(handlePictureUrlChange(e.target.value))}
        />
      </label>
      <label>
        Activity:
        {activities.map((activity, index) => (
          <div key={index}>
            <input
              type="text"
              value={activity.category}
              onChange={(e) => dispatch(handleActivitiesChange({ index, field: 'category', value: e.target.value }))}
            />
            <input
              type="text"
              value={activity.name}
              onChange={(e) => dispatch(handleActivitiesChange({ index, field: 'name', value: e.target.value }))}
            />
          </div>
      ))}
      </label>
      <button type="submit">Create Vibe</button>
    </form>
  );
};

export default CreateVibeForm;
