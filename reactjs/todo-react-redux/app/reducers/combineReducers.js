
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         let newState = {};
//         Object.keys(reducers).forEach(function(key) {
//             newState[key] = reducers[key](state[key], action);
//         });
//         return newState;
//     }
// }

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (newState, key) => {
                newState[key] = reducers[key](state[key], action);
                return newState;
            },
            {}
        );
    };
};

export { combineReducers };