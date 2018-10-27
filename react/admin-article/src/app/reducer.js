import { combineReducers } from 'redux'

import category from '../modules/category/reducer'

export default combineReducers({
  category: category,
})

