import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDataArticle, deleteDataArticle } from './action'

import List from './container/list'

class Article extends React.Component {

  componentWillMount() {
    this.props.getDataArticle()
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

const mapStateToProps = ({ article }) => ({
  ...article,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataArticle,
  deleteDataArticle,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)

