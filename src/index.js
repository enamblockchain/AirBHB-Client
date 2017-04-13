import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import { homeReducer } from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/App'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import Experts from './components/bhb/Experts'
import Events from './components/bhb/Events'
import Meetup from './components/bhb/Meetup'
import About from './components/utility/About'
import NotFound from './components/utility/NotFound'
import './css/index.css'

injectTapEventPlugin()

// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);


const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 80,
  },
});

const Root = () => (
  <Provider store={store}>
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/about" component={About} />
        <Route path="/experts" component={Experts} />
        <Route path="/events" component={Events} />
        <Route path="/meetup" component={Meetup} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)