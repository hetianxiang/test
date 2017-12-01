import React, { Component } from 'react';
class ListItem extends Component {
  state = {
    update: false
  }
  updateUser = () => {
   
  }
  render() {  
    return (
      <div className ="list-group-item">
        <button onClick = {() => this.props.delUser(this.props.id)} className = "btn btn-danger" style={{float: "right"}}>删除</button>                    
        <button className = "btn btn-success" style={{float: "right"}}>修改</button>      
        <button className = "btn btn-success" style={{float: "right"}}>详细信息</button>      
        {
          !this.state.update
          ? <h3>{this.props.name}</h3>
          : <input type ="text" value = {this.props.name}></input>
        }
        {
          !this.state.update
          ? <p>{this.props.email}</p>
          : <input type ="text" value = {this.props.email}></input>
        }  
      </div>
    );
  }
}

export default ListItem;