import React, {Component} from 'react'
import { connect } from 'react-redux';

import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import restClient from '../rest/RestClient';

/*import RaisedButton from 'material-ui/RaisedButton'
<RaisedButton label="Toggle Drawer" onTouchTap={this.toggleDrawer}/>*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,      
    }
    
  }

  toggleDrawer = () => this.setState({
    open: !this.state.open
  })

  handleClose(e) {
    console.log(e.target);
    this.setState({open: false});
    
  }

  _logOut(e) {
    console.log(e.target);
    this.setState({open: false});
    this.props.data.isLogged = false;
    localStorage.setItem('email', null)
  }  

  render() {
    
    //console.log(this.props.data.isLogged);
      //console.log(restClient.loggedIn());
        if(restClient.loggedIn()){          
          this.props.data.isLogged = true;
        }

    const menuItems = this.props.data.isLogged ? (
      <div>

          <MenuItem 
            key="0"
            onTouchTap={this.handleClose.bind(this)} 
            primaryText="Home" 
            containerElement={< Link to="/" />}/>

          <MenuItem
            key="5"            
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Experts"
            containerElement={< Link to="/experts" />}/>

          <MenuItem
            key="6"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Events"
            containerElement={ < Link to="/events" />}/>

          <MenuItem
            key="7"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Meetup"
            containerElement={< Link to="/meetup" />}/>

          <MenuItem
            key="4"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="About"
            containerElement={< Link to="/about" />}/>

          <MenuItem
            key="8"
            onTouchTap={this
            ._logOut
            .bind(this)}
            primaryText="Logout"
            containerElement={< Link to="/experts" />}/>

      </div>
    ):(
      <div>

          <MenuItem
            key="Home"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Home"
            containerElement={< Link to="/" />}/>

          <MenuItem
            key="Login"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Login"
            containerElement={< Link to="/login" />}/>

          <MenuItem
            key="Registration"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="Registration"
            containerElement={< Link to="/registration" />}/>

          <MenuItem
            key="About"
            onTouchTap={this
            .handleClose
            .bind(this)}
            primaryText="About"
            containerElement={< Link to="/about" />}/>

      </div>
    );

    return (
      <div>
        
        <AppBar          
          title="AirBHB"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}/>

        <Drawer
          docked={false}
          width={200}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}>

          <AppBar title="AirBHB" onLeftIconButtonTouchTap={this.toggleDrawer}/>          
          {menuItems}

        </Drawer>

        <div style={{
          textAlign: 'center'
        }}>
          {this.props.children}
          
        </div>

      </div>
    )
  }
}

//export default App
// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
