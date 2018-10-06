import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Button }  from 'semantic-ui-react';
import cuid from 'cuid'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';

const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

   class EventDashboard extends Component {

    state = {
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
      newEvent.hostPhotoURL = 'https://randomuser.me/api/portraits/men/23.jpg';
      this.props.createEvent(newEvent)
       this.setState({
        isOpen: false,
        // isOn: true
      })
    }

    handleUpdateEvent = (updatedEvent) => {
      this.props.updateEvent(updatedEvent)
      this.setState({        
         isOpen: false,
        selectedEvent: null
      })
    }

    handleDeleteEvent = eventId => () =>{
      this.props.deleteEvent(eventId);
    }

    handleOpenEvent = (eventToOpen) => () => {
      this.setState({
        selectedEvent: eventToOpen,
        isOpen: true
      })
    }


  render() {

    const {selectedEvent} = this.state;
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
              <EventList 
               deleteEvent={this.handleDeleteEvent} 
              onEventOpen={this.handleOpenEvent} 
              events={events} />
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

export default connect(mapState, actions)(EventDashboard);