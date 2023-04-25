import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		value: false,
	},
	reducers: {
		setNotification: (state, bool) => {
			state.value = bool.payload;
		},
	},
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
