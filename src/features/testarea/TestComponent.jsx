import React, { Component } from 'react';
//This is our binding to the store
// It is also a higher order component
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Button, Icon } from 'semantic-ui-react'
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { incrementCounter, decrementCounter } from './testActions'

// Recieved the state data from the store
// Test matches the name of the reducer that we used in our root reducer
//So we can access the data for test just by using state.test. The date

const mapState = (state) => ({
    data: state.test.data,
})

// now we want to dispatch actions to the store
const actions = {
    incrementCounter,
    decrementCounter
}

const Marker = () => <Icon name='marker' size='big' color='red' /> 

class TestComponent extends Component{

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    state= {
        address: '',
        scriptLoaded: false
    }

    handleScriptLoad = () => {
        this.setState({scriptLoaded: true})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    
        geocodeByAddress(this.state.address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error))
      }

    onChange = (address) => {this.setState({address})}
    
    render(){
        const {incrementCounter, decrementCounter, data} = this.props;
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
          }
        
        return(
            <div>
                {/* <Script 
                    url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBxhsMsEZYwqUG1V7NITAAk-F1dL4cU3LU&libraries=places' 
                    onLoad={this.handleScriptLoad}
                /> */}
                <h1>Test Area</h1>
                <h3>The answer is: { data}</h3>
                <Button onClick={incrementCounter} color='green' content='Increment' />
                <Button onClick={decrementCounter} color='red' content='Decrement' />
                <br /> <br />
                <form onSubmit={this.handleFormSubmit}>
                {this.state.scriptLoaded &&  <PlacesAutocomplete inputProps={inputProps} />}
                    <button type="submit">Submit</button>
                </form>

            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBxhsMsEZYwqUG1V7NITAAk-F1dL4cU3LU' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <Marker
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
                </GoogleMapReact>
            </div>
            </div>
        )
    }
}
//We need to map the state from the store to our component
// Now our state is being mapped to our component
export default connect(mapState, actions)(TestComponent)