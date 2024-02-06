import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        sidebar: false,
    },
    reducers: {
        setSidebar: (state, action) => {
            state.sidebar = action.payload;
        },
    },
});

export const { setSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
