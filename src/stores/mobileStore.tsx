import { action, makeAutoObservable, observable } from "mobx";

export class MobileStore {

    hamburgerOpen = false;

    hamburgerAnimationState = HamburgerAnimationState.Closed



    setHamburgerOpen = (value: boolean) => {
        this.hamburgerOpen = value;
    }

    toggleHamburger = () => {
        this.hamburgerAnimationState = this.hamburgerAnimationState === HamburgerAnimationState.Closing ?
            HamburgerAnimationState.Opening : HamburgerAnimationState.Closing;

        this.hamburgerOpen = !this.hamburgerOpen;


    }

    openHamburger = () => {
        this.hamburgerOpen = true;
        this.hamburgerAnimationState = HamburgerAnimationState.Opening;
    }

    closeHamburger = () => {
        this.hamburgerAnimationState = HamburgerAnimationState.Closing;
        setTimeout(() => {
            this.hamburgerAnimationState = HamburgerAnimationState.Closed;
        }, 500);
    }

    constructor() {
        makeAutoObservable(this);
    }


}


export enum HamburgerAnimationState {
    Opening = 'Hamburger_Opening',
    Closing = 'Hamburger_Closing',
    Closed = 'Hamburger_Closed'
}