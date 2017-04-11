import React, { Component } from 'react';
//import logo from '../images/logo.png';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'




//Details
//https://facebook.github.io/react/docs/react-component.html
//https://www.npmjs.com/package/bootstrap-css
/*import NavBar from './NavBar';
<NavBar {...{brandLinkTo:'#', brandName:'AirBHB'}}/>*/





class App extends Component {
  
  /*constructor(props) {
    super(props);
    console.log("constructor");

  }  */

  componentWillMount(){
    console.log("componentWillMount");
  }

  render() {

    return (

        <MuiThemeProvider>
                <Header {...[{isLogged:true}]} />

        </MuiThemeProvider>      
     
    );
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

}

export default App;