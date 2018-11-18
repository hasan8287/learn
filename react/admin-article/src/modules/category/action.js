import { getAll, updateData, createData, deleteData } from './../../api'

export const DATA_CATEGORY_REQUEST = 'DATA_CATEGORY_REQUEST'
export const DATA_CATEGORY = 'DATA_CATEGORY'
export const DATA_CATEGORY_FAILED = 'DATA_CATEGORY_FAILED'
export const DATA_CATEGORY_DETAIL = 'DATA_CATEGORY_DETAIL'
export const DATA_CATEGORY_SUCCESS = 'DATA_CATEGORY_SUCCESS'

const resource = 'category'

export const deleteDataCategory = (id) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  deleteData({ resource, id })
    .then(() => dispatch({
      type: DATA_CATEGORY_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    }))
}

export const createDataCategory = (data) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  createData({ resource, data })
    .then(() => dispatch({
      type: DATA_CATEGORY_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    }))
}

export const updateDataCategory = (data = {}, id) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  updateData({ resource, id, data })
    .then(() => dispatch({
      type: DATA_CATEGORY_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    }))
}

export const getDataCategoryDetail = (id) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  getAll({ resource, id })
    .then(res => dispatch({
      type: DATA_CATEGORY_DETAIL,
      detail: res.data,
    }))
    .catch(err => dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    }))
}

export const getDataCategory = () => dispatch => {

  dispatch({ type: DATA_CATEGORY_REQUEST })

  getAll({ resource })
    .then(res => dispatch({
      type: DATA_CATEGORY,
      data: res.data,
    }))
    .catch(err => dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    }))
}
