import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDataCategory, deleteDataCategory } from './action'

import List from './container/list'

class Category extends React.Component {

  componentWillMount() {
    this.props.getDataCategory()
  }

  render() {
    if (this.props.isLoading) {
      return <h3>Loading......</h3>
    }

    if (this.props.err) {
      return <b>ERROR: {this.props.err}</b>
    }

    return <List {...this.props} />
  }
}

const mapStateToProps = ({ category }) => ({
  ...category,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataCategory,
  deleteDataCategory,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)

