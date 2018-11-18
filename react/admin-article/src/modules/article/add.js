import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { createDataArticle } from './action'
import { getDataCategory } from './../category/action'

import FormAdd from './container/formAdd'

class ArticleAdd extends React.Component {

  componentWillMount() {
    this.props.getDataCategory()
  }
  render () {
    if (this.props.succes) return <Redirect to="/article"/>
    if (this.props.isLoading) return <h3>Loading......</h3>
    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    return <FormAdd {...this.props} />
  }
}

const mapStateToProps = ({ article, category }) => ({
  ...article,
  dataCategory: category.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createDataArticle,
  getDataCategory,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleAdd)
