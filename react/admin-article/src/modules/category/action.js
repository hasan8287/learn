
import axios from 'axios'

export const DATA_CATEGORY_REQUEST = 'DATA_CATEGORY_REQUEST'
export const DATA_CATEGORY = 'DATA_CATEGORY'
export const DATA_CATEGORY_FAILED = 'DATA_CATEGORY_FAILED'
export const DATA_CATEGORY_DETAIL = 'DATA_CATEGORY_DETAIL'


export const updateDataCategory = (data = {}, id) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  axios({
    method: 'put',
    url: `http://localhost:8081/category/${id}`,
    data,
  }).then((res) => {
    // if(res.status === 200) return dispatch({

    // })
    console.log('res : ', res)
  }).catch((err) => {
    console.log('err : ', err)
  })
}

export const getDataCategoryDetail = (id) => dispatch => {
  dispatch({ type: DATA_CATEGORY_REQUEST })

  axios({
    method: 'get',
    url: `http://localhost:8081/category/${id}`,
  }).then((res) => {
    console.log('res : ', res)
    if (res.status === 200) {
      return dispatch({
        type: DATA_CATEGORY_DETAIL,
        detail: res.data,
      })
    }
    throw new Error(res.message)
  }).catch(err => dispatch({
    type: DATA_CATEGORY_FAILED,
    err: err.message,
  }))
}

export const getDataCategory = () => dispatch => {

  dispatch({ type: DATA_CATEGORY_REQUEST })

  axios({
    method: 'get',
    url: 'http://localhost:8081/category',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then((res) => {
    console.log('res : ', res)
    if (res.status === 200) {
      return dispatch({
        type: DATA_CATEGORY,
        data: res.data,
      })
    }
    throw new Error(res.message)
  }).catch((err) => {
    console.log('err : ', err)
    return dispatch({
      type: DATA_CATEGORY_FAILED,
      err: err.message,
    })
  })
}
