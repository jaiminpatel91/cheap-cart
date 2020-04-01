import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer  from './reducers/appReducer';

const initialState = {
    name: 'jaimin',
    productList: {}
};

const loggerMiddleware = createLogger();
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware, loggerMiddleware);
const store = createStore(reducer, initialState, enhancer);
export default store;