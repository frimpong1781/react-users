import {createStore, combineReducers} from 'redux';
import usersReducer from '../reducers/usersReducer';

// export const store = createStore(usersReducer);

export const store = createStore(
    combineReducers({
        users: usersReducer
    })
)