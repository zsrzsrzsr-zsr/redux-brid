import {combineReducers} from 'redux'
import courses from './courses'
import comments from './comments'

const rootReducer = combineReducers({
  courses,
  comments
})
export default rootReducer
