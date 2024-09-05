import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {

    state = {mouse : false}
    handleMouse = (flag) =>{
        return () =>{
            this.setState({mouse : flag})
        }
    }
    handleCheck = (id) => {
        return (event) =>{
            this.props.changeTaskStatus(id,event.target.checked);
        }
    }

    handleDelete = (id) => {
        if(window.confirm('Are you sure?')){
            this.props.deleteTask(id);
        }       
    }

  render() {
    const {id,name, done} = this.props;
    const {mouse} = this.state;
    return (
    <li style={{backgroundColor: this.state.mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button className='btn btn-danger' onClick={() => this.handleDelete(id)} style={{display: mouse? 'block' : 'none'}}>delete</button> 
    </li>
    )
  }
}
