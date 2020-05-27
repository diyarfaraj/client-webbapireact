import {createStore, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";
import { reducers } from './../Reducers/indexReducer';


export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )

)

