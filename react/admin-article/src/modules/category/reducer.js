
import {
  DATA_CATEGORY,
  DATA_CATEGORY_REQUEST,
  DATA_CATEGORY_DETAIL,
  DATA_CATEGORY_FAILED,
  DATA_CATEGORY_SUCCESS,
} from './action'

const initialState = {
  data: [],
  isLoading: false,
  err: null,
  detail: {},
  succes: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        succes: false,
        err: null,
      }

    case DATA_CATEGORY:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }

    case DATA_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        succes: true,
      }

    case DATA_CATEGORY_DETAIL:
      return {
        ...state,
        isLoading: false,
        detail: action.detail
      }

    case DATA_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.err
      }

    default:
      return state
  }
}
