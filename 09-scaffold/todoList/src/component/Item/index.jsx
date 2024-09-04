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

  render() {
    const {id,name, done} = this.props;
    return (
    <li style={{backgroundColor: this.state.mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseOut={this.handleMouse(false)}>
        <label>
            <input type='checkbox' defaultChecked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button className='btn btn-danger' style={{display: this.state.mouse ? 'block' : 'none'}}>delete</button> 
    </li>
    )
  }
}
