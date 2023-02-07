import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState: {
        isMobile: false,
    },
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        }
    }
});

export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
