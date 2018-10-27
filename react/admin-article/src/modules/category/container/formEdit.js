import React from 'react'

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Label,
  Row,
} from 'reactstrap';

class FormEdit extends React.Component {
  constructor(props) {
    console.log('props : ', props)
    super(props)
    this.state = {
      dataEdit: props.detail
    }

    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(event) {
    const { dataEdit } = this.state
    dataEdit[event.target.name] = event.target.value

    this.setState({ dataEdit })
  }

  render() {

    const { dataEdit } = this.state

    return (
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              Category
              <small className="text-muted"> UPDATE</small>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl={4}>
                  <Form action="" method="post" className="form-horizontal" onSubmit={() => this.props.updateDataCategory(this.state.dataEdit, this.props.match.params.id)}>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Name">Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="Name" name="Name" autoComplete="name" value={dataEdit.Name} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Status">Status</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="Status" name="Status" autoComplete="status" value={dataEdit.Status} onChange={this.handleChange} />
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

export default FormEdit
