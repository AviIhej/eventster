import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='red' /> 

const EventDetailedMap = ({lat, lng}) => {
    const center = [lat, lng];
    const zoom = 14;
    return(
        <Segment attatched='bottom' style={{padding: '0'}}>
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBxhsMsEZYwqUG1V7NITAAk-F1dL4cU3LU' }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                <Marker
                    lat={lat}
                    lng={lng}
                />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}

export default EventDetailedMap