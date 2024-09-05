import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  checkAll = (event) =>{
    this.props.selectAllTodo(event.target.checked);
  }

  deleteAllTasks = () =>{
    this.props.deleteAllTasks();
  }

  render() {
    const {todos} = this.props;
    const countOfDone = todos.reduce((pre,cur) => {
        return pre + ((cur.done)? 1 : 0 )
    },0)
    return (
        <div className="todo-footer">
            <label>       
                <input type='checkbox' onChange={this.checkAll}  checked={countOfDone === todos.length && todos.length !== 0 ? true : false}/>
            </label>
            <span>
            <span>Complete : {countOfDone}</span> /  All : {todos.length}
            </span>
            <button onClick={this.deleteAllTasks} className="btn btn-danger">Clean completed tasks</button>
        </div>
    );
  }
}
