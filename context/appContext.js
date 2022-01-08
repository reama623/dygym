import { createContext } from "react";

const defaultValue = {
  drawer: { open: false },
};

export const AppContext = createContext(defaultValue);
