import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';

// New imports
import firebaseObj from '../firebase/firebase';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';

// for creating single reducer, use the below code
// export const store = createStore(usersReducer);

// Allows as to combine multiple reducers and pass it to the store
const reducers =   combineReducers({
    usersState: usersReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebaseObj),
        reduxFirestore(firebaseObj)
    )
);