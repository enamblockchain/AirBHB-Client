import React, {Component} from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

/*import RaisedButton from 'material-ui/RaisedButton'
<RaisedButton label="Toggle Drawer" onTouchTap={this.toggleDrawer}/>*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      isLogged: true
    }
    
  }

  toggleDrawer = () => this.setState({
    open: !this.state.open
  })

  handleClose(e) {
    console.log(e.target);
    this.setState({open: false});
  }

  render() {

    const menuItems=this.state.isLogged ? (
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

export default App