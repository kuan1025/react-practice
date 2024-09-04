import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
        <div className="todo-footer">
            <label>       
                <input type='checkbox'></input>
            </label>
            <span>
            <span>Complete 0</span> /  All 2
            </span>
            <button className="btn btn-danger">Clean completed tasks</button>
        </div>
    );
  }
}
