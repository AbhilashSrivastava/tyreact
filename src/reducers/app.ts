
import {combineReducers} from 'redux'
import { homeReducers } from './home';

// Reducers registry. Key-Mapping done here
export default combineReducers({
  home: homeReducers
}) 