import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/index.css'

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { hashHistory } from 'react-router';
import { forwardTo, changeForm } from '../../actions/AppActions';
import restClient from '../../rest/RestClient';

const style = {
  marginLeft: 20,
};

const stylePaper = {
  height: 250,
  width: 320,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


const styleButton = {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 40,
  width: 300,
};

class Login extends Component {


  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return (

      <div className="div-content-center-auth">
        <span className="span-content-center-auth">    
          
          <Paper style={stylePaper} zDepth={2}>
            <TextField hintText="Email" floatingLabelText="Email" type="email" style={style} underlineShow={false} />
            <Divider />
            <TextField hintText="Password" floatingLabelText="Password" type="password" style={style} underlineShow={false} />
            <Divider />
            <RaisedButton onTouchTap={this._onSubmit.bind(this)} primary={true} label="Login" style={styleButton} />                  
          </Paper>
          
        </span>
      </div>

    );
  }

  _onSubmit(event){

    console.log("State 1 "+localStorage.getItem('email'));
    localStorage.setItem('email', 'oneenam@gmail.com')
    console.log("State 2 "+localStorage.getItem('email'));

    if(restClient.loggedIn){
      this.props.data.isLogged = true;
      hashHistory.push("/experts");
      
    /*this.props.dispatch(changeForm({
            username: "",
            password: ""
          }));*/      
    }else{
      //restClient.login("oneenam@gmail.com","asdf");
    }

  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

}

//export default Login;

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login);
