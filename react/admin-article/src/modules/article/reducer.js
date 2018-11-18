
import {
  DATA_ARTICLE,
  DATA_ARTICLE_REQUEST,
  DATA_ARTICLE_DETAIL,
  DATA_ARTICLE_FAILED,
  DATA_ARTICLE_SUCCESS,
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
    case DATA_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        succes: false,
        err: null,
      }

    case DATA_ARTICLE:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }

    case DATA_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        succes: true,
      }

    case DATA_ARTICLE_DETAIL:
      return {
        ...state,
        isLoading: false,
        detail: action.detail
      }

    case DATA_ARTICLE_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.err
      }

    default:
      return state
  }
}
