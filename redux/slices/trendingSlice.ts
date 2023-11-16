import { createSlice } from '@reduxjs/toolkit';
import {TrendingCard} from "../../components/home/Trending";
import {AppState} from "../store";

export interface TrendingState {
    trendingCards: TrendingCard[];
    loading: boolean
}

const initialState: TrendingState = {
    trendingCards: [],
    loading: false
};

export const trendingSlice = createSlice({
    name: 'trendingCardsSlice',
    initialState,
    reducers: {
        setTrendingCards(state, action ) {
            state.trendingCards = action.payload
        },
        setLoadingCards(state, action) {
            state.loading = action.payload
        }
    }
});

export const { setTrendingCards, setLoadingCards } = trendingSlice.actions;

export const selectTrendingState = (state: AppState) => state.trendingCardsSlice;

export default trendingSlice.reducer;
