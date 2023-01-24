import { createContext, useContext } from "react";
import { MobileStore } from "./mobileStore";
import { ProjectStore } from "./projectStore";

type Store = {
    projectStore: ProjectStore;
    mobileStore: MobileStore;
}

export const store: Store = {
    projectStore: new ProjectStore(),
    mobileStore: new MobileStore()
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
