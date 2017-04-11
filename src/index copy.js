
import React from 'react';
import ReactDOM from 'react-dom';



import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import './css/index.css';

//components
//import NavBar from './components/NavBar';
import './css/index.css'
import App from './components/App';
import Login from './auth/Login'
import Registration from './auth/Registration'

//import Auth from './components/auth';


injectTapEventPlugin();


const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />            
  ,
  document.getElementById('root')
);

module.hot.accept();
