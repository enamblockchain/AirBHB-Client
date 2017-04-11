import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'


import App from './components/App'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import About from './components/utility/About'
import NotFound from './components/utility/NotFound'
import './css/index.css'

injectTapEventPlugin()



const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 80,
  },
});

const Root = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="about" component={About} />
        <Route path="/*" component={NotFound} />

      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)