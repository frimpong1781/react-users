import {createStore, combineReducers} from 'redux';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';

// for creating single reducer, use the below code
// export const store = createStore(usersReducer);

// Use code below when creating multiples reducers
export const store = createStore(
    combineReducers({
        usersState: usersReducer,
        auth: authReducer
    })
)