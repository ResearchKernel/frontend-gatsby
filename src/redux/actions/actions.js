import * as actionTypes from '../actionTypes/actionsTypes'

export const ping = () => ({ type: actionTypes.PING })

export const pingSuccess = payload => ({
  type: actionTypes.PING_SUCCESS,
  payload,
})

export const pingError = error => ({
  type: actionTypes.PING_FAILURE,
  isError: true,
  error,
})
