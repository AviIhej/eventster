import React, { Component } from 'react';
import EventListItem from './EventListItem'

class EventList extends Component {
  render(){
    // Destriucture
    const{events, onEventOpen, deleteEvent} = this.props;
    return(
      <div>
        {events.map((event) => (
          <EventListItem key={event.id} event={event} onEventOpen={onEventOpen} deleteEvent={deleteEvent} />
        ))}
      </div>
    )
  }
  
}


export default EventList