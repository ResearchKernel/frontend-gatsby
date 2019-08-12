import * as actionTypes from '../actionTypes/actionsTypes'
import { ajax } from 'rxjs/ajax'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { ofType } from 'redux-observable'
import { pingSuccess, pingError } from '../actions/actions'

export function pingEpic(action$, store) {
  return action$.pipe(
    ofType(actionTypes.PING),
    mergeMap(data => {
      return ajax.getJSON('https://www.google.com/').pipe(
        //Calling the API here.
        map(result => {
          return pingSuccess(result.body.payload)
        }),
        catchError(error => {
          return of(pingError(error))
        })
      )
    })
  )
}
