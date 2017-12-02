import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItem from './listItem'
import {bindActionCreators} from 'react-redux'
import Detail from 'view/detail'
import {fetchUsers, delUser, updateUser} from '../../store/user'
import {getUsers, delUsers, putUsers} from 'fetch/user'
class List extends Component {
  constructor(props) {
    super(...arguments)
  }
  componentDidMount(){
    this.props.fetchUsers();
    console.log(this.props)
  }
 
  render() {
    const list = this.props.users.map((user) =>{
     return <ListItem key = { user.id } {...user} updateUser = {this.props.updateUser} delUser = {this.props.delUser}/>   
    }
  )
    return (
      <div className = "list-group">
        {
          list  
        }      
      </div>
    );
  }
}

export default connect(
  state => state.users,//{lesson:0,sliders:[],lessons}
  dispatch => ({
    fetchUsers:() => getUsers().then(users=> {
      dispatch(fetchUsers(users));
    }),
    updateUser:(id, data) => putUsers(id, data).then(msg=> {
      dispatch(updateUser(msg.data));
    }),
    delUser:(id) => delUsers(id).then(msg => {
      dispatch(delUser(id));
    })
  })
)(List)