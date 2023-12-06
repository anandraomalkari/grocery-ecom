import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./component/redux/reducers/main";


const middelware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store;