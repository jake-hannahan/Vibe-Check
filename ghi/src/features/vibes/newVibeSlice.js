import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: '',
    mood: '',
    spotify_id: '',
    picture_url: '',
    activities: [
        {
            category: '',
            name: '',
        },
    ],
};

export const newVibeSlice = createSlice({
  name: 'newVibe',
  initialState,
  reducers: {
    handleNameChange: (state, action) => {
        state.name = action.payload
    },
    handleMoodChange: (state, action) => {
        state.mood = action.payload
    },
    handleSpotifyIdChange: (state, action) => {
        state.spotify_id = action.payload
    },
    handlePictureUrlChange: (state, action) => {
        state.picture_url = action.payload
    },
    handleNameChange: (state, action) => {
        state.name = action.payload
    },
    handleActivitiesChange: (state, action) => {
        const { index, field, value } = action.payload;
        const newActivities = [...state.activities];
        newActivities[index][field] = value;
        state.activities = newActivities;
    },
    handleAddActivityChange:(state, action) => {
        state.activities.push(
            {
                category: '',
                name: '',
            },
        )
    },
    reset: () => initialState
  },
});

export const { handleNameChange, handleMoodChange, handleSpotifyIdChange, handlePictureUrlChange, handleActivitiesChange, handleAddActivityChange, reset } = newVibeSlice.actions;

export default newVibeSlice.reducer;
