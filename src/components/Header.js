import React from 'react';
// import { Drawer, AppBar, MenuItem} from 'material-ui' This is faster &
// creates smaller builds:
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

//http://stackoverflow.com/questions/37120713/material-ui-drawer-with-appbar-not-working-with-component-syntax

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
    console.log("open")
  }

  handleClose() {
    this.setState({open: false});    
  }

  render() {

    console.log(this.props[0].isLogged);

    const menuItems = this.props[0].isLogged ? (

          <div>
            <MenuItem onTouchTap={this
              .handleClose
              .bind(this)}>AirBHB</MenuItem>

            <MenuItem onTouchTap={this
              .handleClose
              .bind(this)}>Experts</MenuItem>
              
            <MenuItem onTouchTap={this
              .handleClose
              .bind(this)}>Projects</MenuItem>

            <MenuItem onTouchTap={this
              .handleClose
              .bind(this)}>Events</MenuItem>
              
            </div>

    ): (

      <div>
          <MenuItem onTouchTap={this
            .handleClose
            .bind(this)}>Login</MenuItem>      
          <MenuItem onTouchTap={this
            .handleClose
            .bind(this)}>Registration</MenuItem>      
            
      </div>

    );

    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>

          {menuItems}

        </Drawer>

        <AppBar
          title="AirBHB"
          onLeftIconButtonTouchTap={this
          .handleToggle
          .bind(this)}/>
      </div>
    );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};