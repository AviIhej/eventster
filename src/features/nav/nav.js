import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from 'react-router-dom';

import logo from './antt.png';
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";
class NavBar extends Component {
  state = {
    authenticated: false
  }

handleSignIn = () => {
  this.setState({
    authenticated: true
  })
}

handleSignOut = () => {
  this.setState({
    authenticated: false
  });
  this.props.history.push('/')

}
  render() {
    const {authenticated } = this.state
    return ( 
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to='/' header>
              <img src={logo} alt="logo" />
              Eventster
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            <Menu.Item as={NavLink} to="/test" name="Test" />

            {authenticated &&
            <Menu.Item as={NavLink} to="/people" name="People" />}

            {authenticated &&
            <Menu.Item>
              <Button as={NavLink} to={'/createEvent'}
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>}
            {/* <Menu.Item position="right">
              <Button basic inverted content="Login" />
              <Button as={Link} to={'/signOut'}
                basic
                inverted
                content="Sign Out"
                style={{ marginLeft: "0.5em" }}
              />
            </Menu.Item> */}
            {authenticated ? (
               <SignedInMenu signOut={this.handleSignOut} />  
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} />
              )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
