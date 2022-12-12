import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useReducer } from "react";

interface IUser {
    email: string;
    name: string;
    phoneNumer: string;
    employerName: string;
    tenant: string;
}

const initialState: IUser = {
    email: "",
    employerName: "",
    name: "",
    phoneNumer: "",
    tenant: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, { payload }: PayloadAction<IUser>) => {
            console.log(payload);
            return { ...state, user: payload };
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;
export const { userLogin } = userSlice.actions;
