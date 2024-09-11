import { combineReducers} from 'redux'
import count from './count.js'

import person from './person.js'
// integrate all reducers
const allReducers = combineReducers({
    count,
    person 
})

export default allReducers