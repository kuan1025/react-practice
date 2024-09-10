// import createStore, in order to create the core object [Store] in Redux
import {legacy_createStore as createStore} from 'redux'
import count_reducer from './count_reducer.js'
// export store
export default createStore(count_reducer)
