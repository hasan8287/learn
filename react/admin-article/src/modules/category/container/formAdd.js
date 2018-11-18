import React from 'react'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class FormAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataAdd: {
        Name: '',
        Status: 'active',
      },
    }

    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(event) {
    const { dataAdd } = this.state
    dataAdd[event.target.name] = event.target.value

    this.setState({ dataAdd })
  }

  render() {
    const { dataAdd } = this.state

    return (
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <small className="text-muted"> Create</small>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl={4}>
                  <Form action=""
                    method="post"
                    className="form-horizontal"
                    onSubmit={() => this.props.createDataCategory(this.state.dataAdd)}
                  >
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Name">Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="Name" name="Name" autoComplete="name" value={dataAdd.Name} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Status">Status</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="Status" name="Status" autoComplete="status" value={dataAdd.Status} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <Button block color="primary" type="submit">Primary</Button>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FormAdd
