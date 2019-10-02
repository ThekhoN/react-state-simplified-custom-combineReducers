import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer, { initialState } from "./state-modules/root-reducer";
export const Store = React.createContext();

const ConnectedApp = () => {
  const store = React.useReducer(rootReducer, initialState);
  return (
    <Store.Provider value={store}>
      <App />
    </Store.Provider>
  )
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"))