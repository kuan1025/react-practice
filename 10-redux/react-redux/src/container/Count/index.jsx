import React, { Component } from 'react'

// import count UI component
// import CountUI from '../../components/Count'

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

// Integrate
class Count extends Component {


    // react-redux

    increment = () => {
        const {value} = this.selectNumber;
        this.props.add(value*1);

    }
    decrement = () => {
        const {value} = this.selectNumber;
        this.props.subtract(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if(this.props.count % 2  !== 0){
            this.props.add(value*1)
        }
    }
   
 

    render() {
        return (
            <div>
                <h1>Now the sum is : {this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>if sum is odd then add 1</button>&nbsp;       
            </div>
        )
    }
}

// Advanced function (Currying function) 
// connect Container and redux
export default connect(mapStateToProps, mapDispatchToProps)(Count)





