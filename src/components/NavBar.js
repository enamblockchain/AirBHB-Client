import React, { Component } from 'react';

import '../css/NavBar.css';


class MenuItem extends Component {
  render() {
      
      
      const menus = this.props.active ? (
          <li className="nav-item active"><a href={this.props.menuLinkTo}>{this.props.menuText}</a></li>
      ):(
          <li className="nav-item">
              <a className="nav-link" href={this.props.menuLinkTo}>{this.props.menuText}</a>
          </li>
      );

    return (
        <div>
        { menus }
      </div>
    );
  }
}


/*

<div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>                        
                        <a className="navbar-brand" href={this.props.brandLinkTo}>{this.props.brandName}</a>
                    </div>
                      <div className="navbar-header" id="navbarNav">
                    </div>
                </div>
            </div>

*/

class NavBar extends Component {

    render() {

        //console.log(this.props.brandLinkTo);
      //console.log(this.props.brandName);


        return(
                <div>welcome to Material UI</div>
        );
    }
}

/*NavBar.propTypes = {
  linkTo: React.PropTypes.string,
  text: React.PropTypes.string
}*/

export default NavBar;