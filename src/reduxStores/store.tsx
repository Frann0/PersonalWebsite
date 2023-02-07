import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import mobileSlice from "./mobileSlice";
import projectSlice from "./projectSlice";

export const store = configureStore({
    reducer: {
        loader: loaderSlice,
        mobile: mobileSlice,
        project: projectSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
