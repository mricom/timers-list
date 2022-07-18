import {createStore} from 'redux';
import { timers, initialState } from './reducers'

export const ConfigureStore = () => {
    const store = createStore(
        timers, // reducer
        initialState, // our initialState
    );

    return store;
}