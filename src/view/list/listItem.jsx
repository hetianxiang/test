import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ListItem extends Component {
  state = {
    update: false,
    name:'',
    email:''
  }
  updateUser = () => {
    this.setState({
      update:!this.state.update
    })
  }
  handleSubmit = () => {
    let username = this.username.value;
    let useremail = this.useremail.value;
    this.setState({
      update:false
    }) 
    this.props.updateUser(this.props.id, { name: username, email: useremail })
  }
  render() {  
    return (
      <div className ="list-group-item">    
        <button onClick = {() => this.props.delUser(this.props.id)} className = "btn btn-danger" style={{float: "right"}}>删除</button>                    
        <button onClick = {this.updateUser} className = "btn btn-success" style={{float: "right"}}>修改</button>      
        <button className = "btn btn-success" style={{float: "right"}}>
          <Link to = {'/list/' + this.props.id}>详细信息</Link>
        </button>           
        {
          !this.state.update
          ? <h3>{this.props.name}</h3>
          : <input type ="text" defaultValue = {this.props.name} ref = { input => this.username = input }></input>
        }
        {
          !this.state.update
          ? <p>{this.props.email}</p>
          : <input type ="text" defaultValue = {this.props.email} ref = { input => this.useremail = input }></input>
        } 
        {
          this.state.update?<button onClick = {this.handleSubmit}>提交</button>:null
        }
      </div>
    );
  }
}

export default ListItem;