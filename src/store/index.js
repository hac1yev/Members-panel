import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import loginSlice from "./login-slice";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        data: dataSlice.reducer,
    },
});

export default store;