import { createStore, applyMiddleware, compose } from 'redux'

export const configureStore = (preloadedState) => {
    const middlewares =[ ];
    //spread operator to add middlewares to our middlware enhancer
    const middlewareEnhancer = applyMiddleware(...middlewares); 

    //contains middlware enhancer
    const storeEnhancers = [middlewareEnhancer]; 

    //Allows us to create single argument funcitons from right to left
    const  composedEnhancer = compose(...storeEnhancers);

    //create store. Takes rootReducer, preloadedState, composedEnhancer
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )
    return store;
}