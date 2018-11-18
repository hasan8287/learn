import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class listCategory extends React.Component {
  render () {
    const { data } = this.props

    if (this.props.succes) this.props.getDataCategory()
  
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                Category
                <small className="text-muted">
                  LIST
                </small>
              </CardHeader>
              <CardBody>
                {this.props.succes &&
                  <Col xl={12}>
                    Data Succes Created
                  </Col>
                }
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Category Name</th>
                      <th>Status</th>
                      <th>Detail</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(category => (
                      <tr key={`table-category-${category.ID}`}>
                        <td>{category.Name}</td>
                        <td>{category.Status}</td>
                        <td>
                          <Link to={`/category/${category.ID}/edit`}>
                            Detail
                          </Link>
                        </td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => this.props.deleteDataCategory(category.ID) }
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default listCategory
