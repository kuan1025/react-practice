import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import MyNavLink from '../../component/MyNavLink'
import HomeContent from './HomeContent'
import HomeMsg from './HomeMsg'



export default class About extends Component {
  render() {
    return (
      <div>
      <h3>I am 'HOME' content </h3>
      <div>

        <ul className='nav nav-tabs'>
          <li>
            <MyNavLink className='list-group-item' to="/home/HomeContent">Content</MyNavLink>
          </li>
          <li>
            <MyNavLink className='list-group-item' to="/home/HomeMsg">Message</MyNavLink>
          </li>
        </ul>

        {/* register Route /  'Switch' can optizime performance. If router find matching path,
                               it will not consistenly finding the rest of the component */}
        <Switch>
          <Route exact path='/home/HomeContent' component={HomeContent} />
          <Route  path='/home/HomeMsg' component={HomeMsg} />
        </Switch>
      </div>
    </div>
    )
  }
}
