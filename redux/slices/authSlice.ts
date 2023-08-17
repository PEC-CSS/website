import { createSlice } from "@reduxjs/toolkit";
import { AuthResponseState } from "../../types/response/authResponse";
import { AppState } from "../store";

const initialState: AuthResponseState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
