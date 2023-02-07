import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum HamburgerAnimationState {
    Opening = 'Hamburger_Opening',
    Closing = 'Hamburger_Closing',
    Closed = 'Hamburger_Closed'
}

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState: {
        hamburgerAnimationState: HamburgerAnimationState.Closed,
        hamburgerOpen: false,

    },
    reducers: {
        setHamburgerOpen: (state, action: PayloadAction<boolean>) => {
            state.hamburgerOpen = action.payload;
        },
        toggleHamburger: (state) => {
            state.hamburgerAnimationState = state.hamburgerAnimationState === HamburgerAnimationState.Closing ?
                HamburgerAnimationState.Opening : HamburgerAnimationState.Closing;

            state.hamburgerOpen = !state.hamburgerOpen;
        },
        openHamburger: (state) => {
            state.hamburgerOpen = true;
            state.hamburgerAnimationState = HamburgerAnimationState.Opening;
        },
        closeHamburger: (state) => {
            state.hamburgerAnimationState = HamburgerAnimationState.Closing;
            setTimeout(() => {
                state.hamburgerAnimationState = HamburgerAnimationState.Closed;
            }, 500);
        },

    }
});

export const { setHamburgerOpen, toggleHamburger, openHamburger, closeHamburger } = mobileSlice.actions;

export default mobileSlice.reducer;
