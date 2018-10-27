
import {
  DATA_CATEGORY,
  DATA_CATEGORY_REQUEST,
  DATA_CATEGORY_DETAIL,
  DATA_CATEGORY_FAILED,
} from './action'

const initialState = {
  data: [],
  isLoading: false,
  err: null,
  detail: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case DATA_CATEGORY:
      return {
        ...state,
        isLoading: false,
        data: action.data
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
