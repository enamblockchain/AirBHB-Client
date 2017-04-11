import React, { Component } from 'react';
import '../../css/index.css'

class Home extends Component {
  
  constructor(props) {
    super(props);
    console.log("constructor");
  }  

  componentWillMount(){
    console.log("componentWillMount");
  }

  render() {
    return (
      
            <div >
              <h1>
                Welcome to AirBHB
              </h1>
            </div>        
      

      
    );
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }


  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

}

export default Home;

// Which props do we want to inject, given the global state?
/*function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Home);*/
