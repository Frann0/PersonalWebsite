import { action, makeAutoObservable, observable } from "mobx";

export class LoaderStore {

    loadingState = LoadingState.stopped;
    frontPageLoaded = false;

    startLoading = () => {
        console.log('startLoading');
        
        this.loadingState = LoadingState.starting;

        console.log('this.loadingState', this.loadingState);
        

        setTimeout(() => {
            this.loadingState = LoadingState.started;
        }, 1000);

    }

    stopLoading = () => {
        this.loadingState = LoadingState.stopping;

        setTimeout(() => {
            this.loadingState = LoadingState.stopped;
        }, 1000);

    }

    resetLoading = () => {
        this.loadingState = LoadingState.stopped;
    }

    setFrontpageLoaded = (b: boolean) => {
        this.frontPageLoaded = b;
    }

    constructor() {
        makeAutoObservable(this);
    }

}

export enum LoadingState {
    starting = 'starting',
    started = 'started',
    stopping = 'stopping',
    stopped = 'stopped',
}
