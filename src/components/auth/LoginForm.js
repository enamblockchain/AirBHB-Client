import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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



const LoginForm = () => (
  <Paper style={stylePaper} zDepth={2}>
    <TextField hintText="Email" floatingLabelText="Email" type="email" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Password" floatingLabelText="Password" type="password" style={style} underlineShow={false} />
    <Divider />
    <RaisedButton primary={true} label="Login" style={styleButton} >
      
    </RaisedButton>
  </Paper>
);

export default LoginForm;