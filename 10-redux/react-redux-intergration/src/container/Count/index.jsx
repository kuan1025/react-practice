import React, { Component } from 'react'
import { createIncrementAction, ceateDecrementAction } from '../../redux/actions/count'
import { connect } from 'react-redux'


const mapStateToProps = (state) => { 
    return { count: state.count , person : state.person }
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
                <h2>I am Count component</h2>
                <h4>Total number of people below is {this.props.person.length}</h4>
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





