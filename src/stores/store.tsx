import { createContext, useContext } from "react";
import { LoaderStore } from "./loaderStore";
import { MobileStore } from "./mobileStore";
import { ProjectStore } from "./projectStore";

type Store = {
    projectStore: ProjectStore;
    mobileStore: MobileStore;
    loaderStore: LoaderStore;
}

export const store: Store = {
    projectStore: new ProjectStore(),
    mobileStore: new MobileStore(),
    loaderStore: new LoaderStore()
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
