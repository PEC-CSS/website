import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./slices/authSlice";
import {userSlice} from "./slices/userSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [userSlice.name]: userSlice.reducer,
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);
