import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDataCategoryDetail, updateDataCategory } from './action'

import FormEdit from './container/formEdit'

class DetailCategory extends React.Component {

  componentWillMount() {
    this.props.getDataCategoryDetail(this.props.match.params.id)
  }

  render() {
    if (this.props.isLoading) return <h3>Loading......</h3>

    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    return <FormEdit {...this.props} />
  }
}

const mapStateToProps = ({ category }) => ({
  ...category,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataCategoryDetail,
  updateDataCategory,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailCategory)
