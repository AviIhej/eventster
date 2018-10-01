import React, { Component } from 'react';
import { Grid, Button }  from 'semantic-ui-react';
import cuid from 'cuid'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';


 class EventDashboard extends Component {

    state = {
      events: eventsDashboard,
      selectedEvent: null,
      isOpen: false,
      isOn: false
    }

    handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true,
      isOn: false
    })
  }
    handleCancel = () => {
      this.setState({
        isOpen: false
      })
    }

    closeHandler = () => {
      this.setState({
        isOn: false
      })
    }

    handleCreateEvent = (newEvent) => {
      newEvent.id = cuid();
      newEvent.hostPhotoURL = 'https://randomuser.me/api/portraits/men/23.jpg'
      const updatedEvents = [...this.state.events, newEvent]
      this.setState({
        events: updatedEvents,
        isOpen: false,
        isOn: true
      })
    }

    handleUpdateEvent = (updatedEvent) => {
      this.setState({
        events: this.state.events.map( (event) => {
          if(event.id === updatedEvent.id){
            return Object.assign({}, updatedEvent)
          }else{
            return event
          }
        }),
        isOpen: false,
        selectedEvent: null
      })
    }

    handleDeleteEvent = (eventId) => () =>{
      const updatedEvents = this.state.events.filter(e => e.id !== eventId);
      this.setState({
        events: updatedEvents
      })
    }

    handleOpenEvent = (eventToOpen) => () => {
      this.setState({
        selectedEvent: eventToOpen,
        isOpen: true
      })
    }


  render() {

    const {selectedEvent} = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
              <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
          </Grid.Column>
          <Grid.Column width={6}>
              <Button positive content='Create Event' onClick={this.handleFormOpen}/>
              {this.state.isOpen && 
              <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/>}
                        {this.state.isOn && 
                            <div class="ui success message">
                            <i onClick={this.closeHandler} class="close icon" />
                            <div class="header">
                              Your event has been created!
                            </div>
                            <p>You may now view the event by clicking 'view'</p>
                          </div>
          }
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard;