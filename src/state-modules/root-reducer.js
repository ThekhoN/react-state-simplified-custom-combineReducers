import { combineReducers } from "./utils";
import ui, { initialUI } from "./ui";
import counter, { initialCounter } from "./counter";

export const initialState = {
    ui: initialUI,
    counter: initialCounter
}

const rootReducer = combineReducers({
    ui,
    counter
});

export default rootReducer;
