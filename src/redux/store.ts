import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';

import { triviaReducer } from './reducers/triviaReducer';
import { userGameReducer } from './reducers/userGameReducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    trivia: triviaReducer,
    userGame: userGameReducer,

})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);