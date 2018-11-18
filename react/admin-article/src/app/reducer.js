import { combineReducers } from 'redux'

import category from '../modules/category/reducer'
import article from '../modules/article/reducer'

export default combineReducers({
  category: category,
  article: article,
})

