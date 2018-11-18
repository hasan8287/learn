
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
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ArticleCreate extends React.Component {
  constructor() {
    super()
    
    this.state = {
      dataAdd: {
        Title: '',
        CategoryID: 0,
        Content: '',
      },
      editorState: '',
      err: null
    }
    

    this.handleChange= this.handleChange.bind(this)
  }

  componentWillMount() {
    const contentBlock = htmlToDraft('');
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
    const editorState = EditorState.createWithContent(contentState)
    this.setState({ editorState })
  }

  setDefaultId = () => {
    const { dataAdd } = this.state
    if (this.props.dataCategory.length > 0) {
      const CategoryID = this.props.dataCategory[0].ID;
      dataAdd.CategoryID = CategoryID

      this.setState({ dataAdd })
    }
  }

  handleChange(event) {
    const { dataAdd } = this.state
    if (event.target.name === 'CategoryID') {
      dataAdd[event.target.name] = parseInt(event.target.value, 10)
    } else {
      dataAdd[event.target.name] = event.target.value
    }
    
    this.setState({ dataAdd })
  }

  onEditorStateChange = (editorState) => {
    const { dataAdd } = this.state
    let editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))

    dataAdd.Content = editorSourceHTML
    this.setState({ dataAdd, editorState })
  };

  handleSubmit = () => {
    const { dataAdd, editorState } = this.state
    if (parseInt(dataAdd.CategoryID, 10) <=0) {
      return this.setState({ err: 'category can not empty' })
    } 
    const editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    dataAdd.Content = editorSourceHTML
    this.props.createDataArticle(dataAdd)
  }

  render() {
    const { dataAdd = {} } = this.state

    if (dataAdd.CategoryID === 0) {
      this.setDefaultId()
    }

    return (
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              Category
              <small className="text-muted">  Add</small>
            </CardHeader>
            <CardBody>
              {this.state.err &&
                <Col xl={12}>
                  <b style={{ color: 'red' }}>{this.state.err}</b>
                </Col>
              }
              <Form action="" id="createDataArticleForm" className="form-horizontal"  method="post">
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Title">Title</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <Input type="text" id="Title" name="Title" autoComplete="Title" value={dataAdd.Title} onChange={this.handleChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Status">Category</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <Input type="select" name="CategoryID" id="CategoryID" value={dataAdd.CategoryID} onChange={this.handleChange} >
                      {this.props.dataCategory.map(data => {
                        return <option value={data.ID} key={data.ID}>{data.Name}</option>
                      })}
                    </Input>
                   </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Status">Content</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <Editor
                      editorState={this.state.editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"onClick
                      onEditorStateChange={this.onEditorStateChange}
                      editorStyle={{minHeight: '200px'}}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ArticleCreate