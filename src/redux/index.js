import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './reducers/reducer'
import { rootEpic } from './epics'

const logger = createLogger({ collapsed: true })

const composeEnhancers =
  (typeof window !== 'undefined' &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const epicMiddleware = createEpicMiddleware()

const reduxMiddleware = composeEnhancers(
  applyMiddleware(epicMiddleware, logger)
)

const store = createStore(reducer, reduxMiddleware)

epicMiddleware.run(rootEpic)

export default store
