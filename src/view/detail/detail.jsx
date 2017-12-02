import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers, delUser, updateUser} from '../../store/user'
import {getUsers, delUsers, putUsers} from 'fetch/user'
// import PropTypes from 'prop-types'

class Detail extends React.Component {
  constructor(props) {
    console.log(props)
    super(...arguments)
    this.state = {
      isUpdate:false
    }
  };
  handleChange = () => {  
    this.setState({
      isUpdate: !this.state.isUpdate
    })
    if(this.state.isUpdate){
      let username = this.username.value;
      let useremail = this.useremail.value;
      this.props.updateUser(this.props.match.params.id, { name: username, email: useremail }) 
    } 
  };
  handleDelete = (id) => {
    if( window.confirm('你要删除'+id+'吗？')){
      this.props.delUser(id)
      this.props.history.goback()
    }
  }
  render () {
    const arrOne = this.props.users.filter(( user )=>{
      return user.id === Number(this.props.match.params.id)
    })
    const listOne = arrOne.map((user , index) => (
        !this.state.isUpdate
        ?<div key = {index}><h3>{user.name}</h3><p>{user.email}</p></div>
        :<div key = {index}>
        姓名:<input type="text" defaultValue = {user.name} ref = { input => this.username = input }/>
        <br/>
        邮箱:<input type="text" defaultValue = {user.email} ref = { input => this.useremail = input }/>        
        </div>    
    ))
    return (
      <div>
        <h1>用户详细信息</h1>
        {
          listOne?listOne:null
        }
        <button onClick = {this.handleChange}>{
          !this.state.isUpdate?'修改':'提交'
        }</button>
        <button onClick = {() => this.handleDelete(arrOne[0].id)}>删除</button>        
      </div>
    )
  }
}

export default connect(
  state => state.users,
  dispatch => ({
    updateUser:(id, data) => putUsers(id, data).then(msg=> {
      dispatch(updateUser(msg.data));
    }),
    delUser:(id) => delUsers(id).then(msg => {
      dispatch(delUser(id));
    })
  })
)(Detail)
