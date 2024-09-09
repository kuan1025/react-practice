import React, { Component } from 'react'

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            < a href='/message'>Message1</a>
          </li>
          <li>
            < a href='/message'>Message2</a>
          </li>
          <li>
            < a href='/message'>Message3</a>
          </li>
        </ul>
      </div>
    )
  }
}
