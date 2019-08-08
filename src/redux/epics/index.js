import { combineEpics, ofType } from 'redux-observable'
import { pingEpic } from './pingEpic'

export const rootEpic = combineEpics(
  // combining all the epics here
  pingEpic
)
