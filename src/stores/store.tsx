import { createContext, useContext } from "react";
import { ProjectStore } from "./projectStore";

type Store = {
    projectStore: ProjectStore;
}

export const store: Store = {
    projectStore: new ProjectStore(),
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
