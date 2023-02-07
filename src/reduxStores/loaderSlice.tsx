import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LoadingState {
    starting = 'starting',
    started = 'started',
    stopping = 'stopping',
    stopped = 'stopped',
}


export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loadingState: LoadingState.stopped,
        frontPageLoaded: false,
    },
    reducers: {
        startLoading: (state) => {
            state.loadingState = LoadingState.starting;

            setTimeout(() => {
                state.loadingState = LoadingState.started;
            }, 1000);
        }
        ,
        stopLoading: (state) => {
            state.loadingState = LoadingState.stopping;

            setTimeout(() => {
                state.loadingState = LoadingState.stopped;
            }, 1000);
        }
        ,
        resetLoading: (state) => {
            state.loadingState = LoadingState.stopped;
        }
        ,
        setFrontpageLoaded: (state, action: PayloadAction<boolean>) => {
            state.frontPageLoaded = action.payload;
        }
    }
});

export const { startLoading, stopLoading, resetLoading, setFrontpageLoaded } = loaderSlice.actions;

export default loaderSlice.reducer;


