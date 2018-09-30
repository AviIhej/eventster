React-Redux provides us with bindings so that we can connect our components to the store itself
Redux Has no relation to React, but is commonly used with React
Flow:
Screen Shot 2018-09-30 at 3.52.20 PM

Sept 30:

Added:

Redux: Actions, ActionCreators(that call the actions), Reducer(changes the state in our store), Store
React-Redux: Provider(wrapped our app in provider), MapStateToProps to get the Data into our component, MapDispatchToProps(to dispatch an action that effected our reducer which updated our statein our store), connect