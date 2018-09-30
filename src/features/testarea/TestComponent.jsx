import React, { Component } from 'react';
//This is our binding to the store
// It is also a higher order component
import { connect } from 'react-redux'; 
import {  } from 'testActions'

// Recieved the state data from the store
// Test matches the name of the reducer that we used in our root reducer
//So we can access the data for test just by using state.test. The date
const mapState = (state) => ({
    data: state.test.data
})

// now we want to dispatch actions to the store
caonst actions = {

}

class TestComponent extends Component{
    render(){
        return(
            <div>
                <h1>Test Area</h1>
                <h3>The answer is: {this.props.data}</h3>
            </div>
        )
    }
}
//We need to map the state from the store to our component
// Now our state is being mapped to our component
export default connect(mapState)(TestComponent)