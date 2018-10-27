import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export default ({ data }) => {
  console.log('data bro sip : ', data)
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
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Detail</th>
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
