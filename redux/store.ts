import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { trendingSlice } from "./slices/trendingSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [trendingSlice.name]: trendingSlice.reducer
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);