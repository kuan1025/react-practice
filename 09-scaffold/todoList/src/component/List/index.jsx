import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from "../Item";
import './index.css'


export default class List extends Component {

  static propTypes ={
    todos : PropTypes.array.isRequired,
    changeTaskStatus : PropTypes.func.isRequired,
    deleteTask :PropTypes.func.isRequired
  } 


  render() {
    const {todos, changeTaskStatus,deleteTask} = this.props;
  
    return (
        <ul className="todo-main">
        {
            todos.map((item)=>{
                return <Item key={item.id} {...item} changeTaskStatus ={changeTaskStatus} deleteTask = {deleteTask}/>
            })
        }
        </ul>
    )
   
  }
}
