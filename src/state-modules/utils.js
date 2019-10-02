/**
 * A size-optimized refactor of Redux's combineReducers.
 * All safeguards removed. USE AT YOUR OWN RISK.
 * https://github.com/reduxjs/redux/blob/master/src/combineReducers.js
 */

export const combineReducers = reducers => (state, action) => {
    let hasChanged;
    const nextState = Object.keys(reducers).reduce((result, key) => {
        result[key] = reducers[key](state[key], action);
        hasChanged = hasChanged || result[key] !== state[key];
        return result;
    }, {});
    return hasChanged ? nextState : state;
};
