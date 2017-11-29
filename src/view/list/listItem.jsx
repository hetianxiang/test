import React, { Component } from 'react';
class ListItem extends Component {
  render() {
    return (
      <div className ="list-group-item">
        <button className = "btn btn-success" style={{float: "right"}}>详细信息</button>      
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>    
      </div>
    );
  }
}

export default ListItem;