import * as actionTypes from '../actionTypes/actionsTypes'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PING:
      return {
        ...state,
        ping: {
          ...state.ping,
          isLoading: true,
        },
      }

    case actionTypes.PING_SUCCESS:
      return {
        ...state,
        ping: {
          ...state.ping,
          payload: action.payload,
        },
      }

    case actionTypes.PING_FAILURE:
      return {
        ...state,
        ping: {
          ...state.ping,
          isError: action.isError,
          error: action.error,
        },
      }

    default:
      return state
  }
}
