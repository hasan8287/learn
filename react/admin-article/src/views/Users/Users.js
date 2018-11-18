import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import { getDataOrder } from './../../modules/actions/order'

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: props.isLoading,
      err: props.err,
      data: props.data,
      total: props.total,
    }
  }

  componentWillMount() {
    return this.props.getDataOrder()
  }


  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Orders <small className="text-muted"> LIST</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">order id</th>
                      <th scope="col">customer</th>
                      <th scope="col">amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.map((data, index) => (
                      <tr key={index}>
                        <td>{data.ref_order_id}</td>
                        <td>{data.customer.email}</td>
                        <td>{data.ref_order_grand_total}</td>
                      </tr>
                    ))

                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ orders }) => ({
  ...orders,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataOrder,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

// export default Users;
