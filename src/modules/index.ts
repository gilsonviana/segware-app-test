import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

})

export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const store = createStore(
        rootReducer,
        compose(middlewareEnhancer)
    )

    return store
}

export default configureStore