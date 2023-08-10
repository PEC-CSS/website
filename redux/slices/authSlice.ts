import { createSlice } from "@reduxjs/toolkit";
import { AuthResponseState } from "../../types/response/authResponse";
import { login } from "../../repository/auth";

const initialState: AuthResponseState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginWithEmailAndPassword(state, action) {
            const response = login({
                email: action.payload.email,
                password: action.payload.password,
            });
            if (response.error) {
                state.error = response.error;
                return;
            }
            state.jwtToken = response.jwtToken;
            state.user = response.user; // TODO : userSlice
        },
    },
});

export const { loginWithEmailAndPassword } = authSlice.actions;

export default authSlice.reducer;
