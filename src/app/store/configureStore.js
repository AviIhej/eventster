import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
    const middlewares =[ ];
    //spread operator to add middlewares to our middlware enhancer
    const middlewareEnhancer = applyMiddleware(...middlewares); 

    //contains middlware enhancer
    const storeEnhancers = [middlewareEnhancer]; 

    //Allows us to create single argument funcitons from right to left
    const  composedEnhancer = composeWithDevTools(...storeEnhancers);

    //create store. Takes rootReducer, preloadedState, composedEnhancer
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    if (process.env.NODE_ENV !== 'production'){
        if(module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store;
}