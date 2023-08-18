import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";

const initialState: User | null = null;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state = actions.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
