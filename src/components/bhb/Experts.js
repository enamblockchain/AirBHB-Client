import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/index.css'



class Experts extends Component {
  render() {
    return(
          <div >
            <h1>Experts</h1>
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
export default connect(select)(Experts);

