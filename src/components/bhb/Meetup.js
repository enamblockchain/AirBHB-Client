import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/index.css'



class Meetup extends Component {
  render() {
    return(
          <div >
            <h1>Meetup</h1>
          </div>

    );
  }
}

//export default Experts;
// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Meetup);

