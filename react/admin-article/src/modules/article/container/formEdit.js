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

import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class FormEdit extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      dataEdit: props.detail,
      editorState: ''
    }

    this.handleChange= this.handleChange.bind(this)
    
  }

  componentWillMount() {
    const { dataEdit } = this.state
    if (dataEdit.Content) {
      const html = dataEdit.Content
      const contentBlock = htmlToDraft(html)
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      dataEdit.Content = editorState
      this.setState({
        dataEdit,
        editorState,
      })
    }
  }



  handleChange(event) {
    const { dataEdit } = this.state
    if (event.target.name === 'CategoryID') {
      dataEdit[event.target.name] = parseInt(event.target.value, 10)
    } else {
      dataEdit[event.target.name] = event.target.value
    }
    
    this.setState({ dataEdit })
  }

  onEditorStateChange = (editorState) => {

    const { dataEdit } = this.state

    const editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))

    dataEdit.Content = editorSourceHTML
    this.setState({ dataEdit, editorState })


  }

  handleSubmit = () => {
    const { dataEdit, editorState } = this.state
    
    const editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    dataEdit.Content = editorSourceHTML

    const id = this.props.match.params.id
    this.props.updateDataArticle(dataEdit, id)
  }

  render() {
    const { dataEdit } = this.state
    dataEdit.Content = draftToHtml(dataEdit.Content)
    return (
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <small className="text-muted"> UPDATE</small>
            </CardHeader>
            <CardBody>
              <Row>
                {this.props.succes &&
                  <Col xl={12}>
                    Data Succes Update
                  </Col>
                }
                <Col xl={12}>
                  <Form action="" method="post" id="updateDataArticleForm" className="form-horizontal">
                    <FormGroup row>
                      <Col md="2">
                        <Label htmlFor="Title">Title</Label>
                      </Col>
                      <Col xs="12" md="10">
                        <Input type="text" id="Title" name="Title" autoComplete="Title" value={dataEdit.Title} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2">
                        <Label htmlFor="Status">Category</Label>
                      </Col>
                      <Col xs="12" md="10">
                        <Input type="select" name="CategoryID" id="CategoryID" value={dataEdit.CategoryID} onChange={this.handleChange} >
                          {this.props.dataCategory.map(data => {
                            return <option value={data.ID} key={data.ID}>{data.Name}</option>
                          })}
                        </Input>
                       </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2">
                        <Label htmlFor="Content">Content</Label>
                      </Col>
                      <Col xs="12" md="10">
                        <Editor
                          editorState={this.state.editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          editorStyle={{minHeight: '200px'}}
                          onEditorStateChange={this.onEditorStateChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2">
                      </Col>
                      <Col xs="1" md="2">
                        <Button block color="primary" type="button" onClick={this.handleSubmit}>Save</Button>
                      </Col>
                    </FormGroup> 
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
