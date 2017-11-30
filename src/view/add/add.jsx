import React from 'react'
import {Link} from 'react-dom'
import {connect} from 'react-redux'
import {postUsers} from 'fetch/user'
import {addUser} from 'store/user'
// import PropTypes from 'prop-types'

class Add extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      
    }
  }
  handleSubmit = () => {
    let username = this.username.value;
    let useremail = this.useremail.value;
    if(!!username && !!useremail){
      this.props.sub({name:username,email:useremail})
    }
  }
  render () {
    return (
      <div className="login-panel">
        <label htmlFor="name">姓名：</label>
        <input ref = {input => this.username = input} type="text" name="username" id="username" placeholder = "姓名"/>
        <label htmlFor="name">邮箱：</label>    
        <input ref = {input => this.useremail = input} type="email" name="useremail" id="useremail"/>
        <button onClick = {this.handleSubmit}>提交</button>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    sub:(data) => postUsers(data).then( msg =>{
         dispatch(addUser({...data,id:msg.id}))
      }   
    )
  })
)(Add);
