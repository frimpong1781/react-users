import {createStore, combineReducers} from 'redux';
import usersReducer from '../reducers/usersReducer';
import authreducer from '../reducers/authReducer';

// for creating single reducer, use the below code
// export const store = createStore(usersReducer);

// Use code below when creating multiples reducers
export const store = createStore(
    combineReducers({
        users: usersReducer,
        auth: authreducer
    })
)