import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import layoutSlice from "./slices/layoutSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        layout: layoutSlice,
    },
});
