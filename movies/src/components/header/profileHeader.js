import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(){
    super();
    this.state={

    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout(){
    localStorage.removeItem('user')
    window.location.reload(true)
  }
  render() {
    return (
      <div className="row nav">
        <div className="col-sm-12">
          <div className="col-sm-3">
            <h1 className="heading">Movie List</h1>
          </div>
          <div className="col-sm-3">
          
          </div>
          <div className="col-sm-3">
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;
