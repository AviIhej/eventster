import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid'
import { Segment, Form, Button  } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput'


const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '', 
  }

  if(eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return{
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.event.id){
      this.props.updateEvent(this.state.event)
      this.props.history.goBack(); //Takes user back to the event detailed
    }else{
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
      this.props.createEvent(newEvent)
      this.props.history.push('/events')
    }
    // this.props.createEvent(this.state.event)
  }

  onInputChange = (event) => {
    const newEvent = this.state.event;
    newEvent[event.target.name] = event.target.value;
    this.setState({
      event: newEvent
    })
  }

  render() {
    // const{handleCancel} = this.props;
    const{event} = this.state;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
          <label>Event Title</label>
          <Field name='title' type='text' component={TextInput } placeholder='Give your event a name' />
            <Form.Field>
              <label>Event Date</label>
              <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={this.props.history.goBack}  type="button">Cancel</Button>
          </Form>
          
        </Segment>
      </div>
    );
  }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm'})(EventForm));
