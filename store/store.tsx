import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: useReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
