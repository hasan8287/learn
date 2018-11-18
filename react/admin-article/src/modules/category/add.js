import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { createDataCategory } from './action'

import FormAdd from './container/formAdd'

class CategoryAdd extends React.Component {
  render () {
    if (this.props.isLoading) return <h3>Loading......</h3>

    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    if (this.props.succes) return <Redirect to="/category"/>

    return <FormAdd {...this.props} />
  }
}

const mapStateToProps = ({ category }) => ({
  ...category,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createDataCategory,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryAdd)