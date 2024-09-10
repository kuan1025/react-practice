import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {


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
   
    // needs redux-thunk
    /** 
    incrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout( () => {
            store.dispatch(this.props.add(value*1))
        },500)
    }
    */
   

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
                <h1>Now the sum is : {this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>if sum is odd then add 1</button>&nbsp;
                {/* <button onClick={this.incrementAsync}>asynchronous adding</button>&nbsp; */}
                
            </div>
        )
    }
}
