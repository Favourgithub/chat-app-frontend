import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../redux/reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle'

const loggerMiddleware = createLogger()

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {

    }
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(e) {
        return undefined
    }
}

const persistedState = loadState()
// console.log(persistedState)

export const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, loggerMiddleware)
)

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))