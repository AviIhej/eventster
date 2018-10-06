import React from 'react'
import { Segment, List, Label, Item } from 'semantic-ui-react';

const EventDetailedSidebar = ({attendees}) => {

    const isHost = false;

    return(
           <div>
              <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
              >
              {/* The first bracket means if there are attendees, then show the attendees.length. 
            The second bracket is if there are attensees and the length equals 1 say Person, and if the length equals 
            more than one say people*/}
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
              </Segment>
              <Segment attached>
                <List relaxed divided>
                {/* This means if there are attendees, then return this block of code aka the maped attendees into items */}
                  {attendees && 
                    attendees.map((attendee) => (
                    <Item key={attendee.id} style={{ position: 'relative' }}>
                        {isHost &&
                        <Label
                        style={{ position: 'absolute' }}
                        color="orange"
                        ribbon="right"
                        >
                        Host
                        </Label>}
                        <Item.Image size="tiny" src={attendee.photoURL} />
                        <Item.Content verticalAlign="middle">
                        <Item.Header as="h3">
                            <a>{attendee.name}</a>
                        </Item.Header>
                        </Item.Content>
                    </Item>
                  ))}
                </List>
              </Segment>
            </div>
    )
}

export default EventDetailedSidebar;