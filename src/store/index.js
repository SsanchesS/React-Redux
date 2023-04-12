import {createStore, combineReducers} from "redux" // combineReducers - для объединения reducers
import Cash_reducer from "./Cash_reducer"
import Client_reducer from "./Client_reducer"

// const rootReducer = combineReducers({Cash_reducer,Client_reducer})

const rootReducer = combineReducers({                                 // можно и так
   cash:Cash_reducer,
   clients:Client_reducer
})    

const store = createStore(rootReducer) // 1 - Reducer 2 - 
// получить Состояние getState
// изменить Состояние dispatch
// подписаться на Состояние 

export default store