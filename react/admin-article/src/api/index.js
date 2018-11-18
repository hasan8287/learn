import axios from 'axios'
import config from './../config'

const BASE_URL_API = config.BASE_URL_API

export const deleteData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}/${data.id}`

  axios({
    url,
    method: 'delete',
  }).then((res) => {
    if (res.status === 200) resolve(res)
    throw new Error(res.message)
  }).catch(err => reject(err))
})

export const createData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}`
  
  axios({
    url,
    method: 'post',
    data: data.data,
  }).then((res) => {
    console.log('res : ', res)
    if (res.status === 200) {
      console.log('sip')
      resolve(res)
    }
    throw new Error(res.message)
  }).catch(err => reject(err))
})

export const getAll = (data) => new Promise((resolve, reject) => {
  let url = `${BASE_URL_API}${data.resource}`
  if (data.id) url = `${url}/${data.id}`

  axios({
    url,
    method: 'get',
  }).then((res) => {
    if (res.status === 200) resolve(res)
    console.log('err : ', res.message)
    throw new Error(res.message)
  }).catch(err => reject(err))
})

export const updateData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}/${data.id}`

  axios({
    url,
    method: 'put',
    data: data.data,
  }).then((res) => {
    if (res.status === 200) resolve(res)
    throw new Error(res.message)
  }).catch(err => {
    console.log('err : ', err)
    reject(err)
  })
})