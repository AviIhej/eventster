import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashbord';
import NavBar from '../../features/nav/nav';
class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar />
        <Container className="main">
          <EventDashboard />
          <h1>Big Trouble</h1>
        </Container>
      </div>
    );
  }
}

export default App;

