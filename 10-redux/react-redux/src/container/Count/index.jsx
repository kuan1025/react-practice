// import count UI component
import CountUI from '../../components/Count'

import { createIncrementAction, ceateDecrementAction } from '../../redux/count_action'

// import 'connect' to bind UI component and redux
import { connect } from 'react-redux'

//  The key in the object returned by the mapStateToProps function is used as the key passed to the UI component props,
//  and the value is used as the value passed to the UI component props - State (return by reducer)
const mapStateToProps = (state) => { // default : autowired state
    return { count: state }
}

//  The key in the object returned by the mapDispatchToProps function is used as the key passed to the UI component props,
//  and the value is used as the value passed to the UI component props - method
const mapDispatchToProps = (dispatch) => { // default : autowired dispatch
    return {
        add : (value) => { dispatch(createIncrementAction(value)) },
        subtract : (value) =>{ dispatch(ceateDecrementAction(value)) }
    }
}

// Advanced function (Currying function) 
// connect Container and redux
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


