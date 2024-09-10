import React, { Component } from 'react'
import store from '../../redux/store.js'
import { createIncrementAction, ceateDecrementAction } from '../../redux/count_action.js';

export default class Count extends Component {

    /*
    pure react
    state = {count : 0}

    increment = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count : count + value * 1})
    }
    decrement = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count : count - value * 1})
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        if(count % 2 !== 0)
        this.setState({count : count + value * 1})
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        setTimeout( () => {
            this.setState({count : count + value * 1})
        },500)
    }
    */

    // redux

    increment = () => {
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value} = this.selectNumber;
        store.dispatch(ceateDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = store.getState();
        if(count % 2 !== 0)
            store.dispatch(createIncrementAction(value*1))
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout( () => {
            store.dispatch(createIncrementAction(value*1))
        },500)
    }

    componentDidMount(){
        // store subscribe 'store'. If data managed by store is changed then render the page 
        store.subscribe(()=>{
            // this.setState({}) means not updating any data, but it can trigger render()
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                <h1>Now the sum is : {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>if sum is odd then add 1</button>&nbsp;
                <button onClick={this.incrementAsync}>asynchronous adding</button>&nbsp;
                
            </div>
        )
    }
}
