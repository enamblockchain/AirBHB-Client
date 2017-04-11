import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import '../../css/index.css'

class Registration extends Component {

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
          <RegistrationForm />
        </span>
      </div>

      

    );
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

export default Registration;

// Which props do we want to inject, given the global state?
/*function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login);*/
