import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'


export default class Header extends Component {

  static propTypes ={
    addTask : PropTypes.func.isRequired,
    
  } 

  handleKeyUp = (event) =>{
    const {keyCode,target} = event;
    if(keyCode !== 13 ) return;
    if(event.target.value  === ''){
        alert('Input cannot be null ')
        return;
    }

    const task = {id:nanoid(), name: target.value, done:false}
    this.props.addTask(task);
    event.target.value  = ''
  }


  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type='text' placeholder='Please enter your tasks and click "Enter" to confirm'/>
      </div>
    )
  }
}
