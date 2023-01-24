import { action, makeAutoObservable, observable } from "mobx";

export class MobileStore {

    hamburgerOpen = false;

    setHamburgerOpen = (value: boolean) => {
        this.hamburgerOpen = value;
    }

    toggleHamburger = () => {
        this.hamburgerOpen = !this.hamburgerOpen;
    }

    constructor() {
        makeAutoObservable(this);
    }


}
