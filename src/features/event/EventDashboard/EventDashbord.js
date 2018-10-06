import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid }  from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';

const mapState = (state) => ({
  events: state.events
})

const actions = {
  deleteEvent,
}

   class EventDashboard extends Component {

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

    handleDeleteEvent = eventId => () =>{
      this.props.deleteEvent(eventId);
    }



  render() {
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
              <EventList 
               deleteEvent={this.handleDeleteEvent} 
               events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState, actions)(EventDashboard);