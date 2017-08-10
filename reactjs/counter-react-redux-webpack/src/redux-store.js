const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    dispatch({});
    return {getState, subscribe, dispatch};
};

export { createStore };