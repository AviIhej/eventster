import React, { Component } from 'react';
//This is our binding to the store
// It is also a higher order component
import { connect } from 'react-redux'; 
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

// Recieved the state data from the store
// Test matches the name of the reducer that we used in our root reducer
//So we can access the data for test just by using state.test. The date
const mapState = (state) => ({
    data: state.test.data
})

// now we want to dispatch actions to the store
const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component{
    render(){
        const {incrementCounter, decrementCounter, data} = this.props;
        return(
            <div>
                <h1>Test Area</h1>
                <h3>The answer is: { data}</h3>
                <Button onClick={incrementCounter} color='green' content='Increment' />
                <Button onClick={incrementCounter} color='red' content='Decrement' />
            </div>
        )
    }
}
//We need to map the state from the store to our component
// Now our state is being mapped to our component
export default connect(mapState, actions)(TestComponent)