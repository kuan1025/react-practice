import React, { Component } from 'react'
import Item from "../Item";
import './index.css'


export default class List extends Component {
  render() {
    const {todos, changeTaskStatus} = this.props;
  
    return (
        <ul className="todo-main">
        {
            todos.map((item)=>{
                return <Item key={item.id} {...item} changeTaskStatus ={changeTaskStatus} />
            })
        }
        </ul>
    )
   
  }
}
