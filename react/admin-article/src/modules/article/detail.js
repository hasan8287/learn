import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDataArticleDetail, updateDataArticle } from './action'
import { getDataCategory } from './../category/action'

import FormEdit from './container/formEdit'

class DetailArticle extends React.Component {

  componentWillMount() {
    this.props.getDataArticleDetail(this.props.match.params.id)
    this.props.getDataCategory()
  }

  render() {
    if (this.props.isLoading) return <h3>Loading......</h3>

    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    return <FormEdit {...this.props} />
  }
}

const mapStateToProps = ({ article, category }) => ({
  ...article,
  dataCategory: category.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataArticleDetail,
  updateDataArticle,
  getDataCategory,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailArticle)
