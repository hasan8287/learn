import { getAll, updateData, createData, deleteData } from './../../api'

export const DATA_ARTICLE_REQUEST = 'DATA_ARTICLE_REQUEST'
export const DATA_ARTICLE = 'DATA_ARTICLE'
export const DATA_ARTICLE_FAILED = 'DATA_ARTICLE_FAILED'
export const DATA_ARTICLE_DETAIL = 'DATA_ARTICLE_DETAIL'
export const DATA_ARTICLE_SUCCESS = 'DATA_ARTICLE_SUCCESS'

const resource = 'article'

export const deleteDataArticle = (id) => dispatch => {
  dispatch({ type: DATA_ARTICLE_REQUEST })

  deleteData({ resource, id })
    .then(() => dispatch({
      type: DATA_ARTICLE_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_ARTICLE_FAILED,
      err: err.message,
    }))
}

export const createDataArticle = (data) => dispatch => {
  dispatch({ type: DATA_ARTICLE_REQUEST })

  data.Content = data.Content.toString()
  createData({ resource, data })
    .then(() => dispatch({
      type: DATA_ARTICLE_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_ARTICLE_FAILED,
      err: err.message,
    }))
}

export const updateDataArticle = (data = {}, id) => dispatch => {
  if (data.CategoryName) delete data.CategoryName
  data.Content = data.Content.toString()
  dispatch({ type: DATA_ARTICLE_REQUEST })

  updateData({ resource, id, data })
    .then(() => dispatch({
      type: DATA_ARTICLE_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_ARTICLE_FAILED,
      err: err.message,
    }))
}

export const getDataArticleDetail = (id) => dispatch => {
  dispatch({ type: DATA_ARTICLE_REQUEST })

  getAll({ resource, id })
    .then(res => dispatch({
      type: DATA_ARTICLE_DETAIL,
      detail: res.data,
    }))
    .catch(err => dispatch({
      type: DATA_ARTICLE_FAILED,
      err: err.message,
    }))
}

export const getDataArticle = () => dispatch => {

  dispatch({ type: DATA_ARTICLE_REQUEST })

  getAll({ resource })
    .then(res => dispatch({
      type: DATA_ARTICLE,
      data: res.data,
    }))
    .catch(err => dispatch({
      type: DATA_ARTICLE_FAILED,
      err: err.message,
    }))
}
