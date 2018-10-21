import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';

var reducer = combineReducers({});
export var configure = (initialState = {}) => {
    var store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};
  
  