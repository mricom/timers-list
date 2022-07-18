import { createStore } from "redux";
import { mainReducer } from "./reducers";

export const ConfigureStore = () => {
  const store = createStore(mainReducer);

  return store;
};
