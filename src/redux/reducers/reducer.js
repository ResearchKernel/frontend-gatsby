import { combineReducers } from 'redux'
import pingReducer from './pingReducer' //Importing reducers

const appReducer = combineReducers({
  //COmbining different reducers here
  pingState: pingReducer,
})

const reducer = (state, action) => {
  return appReducer(state, action)
}

export default reducer
