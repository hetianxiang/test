import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'

class Detail extends React.Component {
  constructor(props) {
    console.log(props)
    super(...arguments)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>用户详细信息</h1>
        <p>{this.props.match.params.id}</p>
        <button>修改</button>
        <button>删除</button>        
      </div>
    )
  }
}

export default Detail
