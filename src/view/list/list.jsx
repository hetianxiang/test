import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItem from './listItem'
import {bindActionCreators} from 'react-redux'
import {fetchUsers} from '../../store/user'
import {getUsers} from 'fetch/user'
class List extends Component {
  state = {  }
  componentDidMount(){
    this.props.fetchUsers();
  }
  render() {
    const list = this.props.users.map((user) =>(
      <ListItem key = {user.id} {...user}/>
    ) )
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
    })
  })
)(List)