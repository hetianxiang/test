import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class HeaderBar extends Component {
  state = {  }
  render() { 
   
    return (    
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to = "/" className = "navbar-brand" >User</Link>
          </div>
          <div className="nav navbar-nav">
            <li><Link to = "/list">用户列表</Link></li>
            <li><Link to = "/add">添加用户</Link></li>            
          </div>
        </div>
      </nav>     
    );
  }
}

export default HeaderBar;