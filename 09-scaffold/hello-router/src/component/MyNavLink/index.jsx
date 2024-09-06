import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
        // texts in tag body will be store in 'children'
        <NavLink className='list-group-item' {...this.props}/>
    )
  }
}
