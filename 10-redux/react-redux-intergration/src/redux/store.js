// import createStore, in order to create the core object [Store] in Redux
import {legacy_createStore as createStore} from 'redux'
import allReducers from './reducers'


// export store
export default createStore(allReducers)
