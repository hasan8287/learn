import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class listArticle extends React.Component {
  render () {
    const { data } = this.props

    if (this.props.succes) this.props.getDataArticle()
  
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                Article
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
                      <th>Tile</th>
                      <th>Category</th>
                      <th>Detail</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(article => (
                      <tr key={`table-category-${article.ID}`}>
                        <td>{article.Title}</td>
                        <td>{article.CategoryName}</td>
                        <td>
                          <Link to={`/article/${article.ID}/edit`}>
                            Detail
                          </Link>
                        </td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => this.props.deleteDataArticle(article.ID) }
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

export default listArticle
