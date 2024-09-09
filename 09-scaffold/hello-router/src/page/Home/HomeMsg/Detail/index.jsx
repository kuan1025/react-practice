import React, { Component } from 'react'


const DetailData = [
  { id: '01', content: 'Content for Id : 01' },
  { id: '02', content: 'Content for Id : 02' },
  { id: '03', content: 'Content for Id : 03' }
]

export default class Detail extends Component {


  render() {
    console.log(this.props);
    // Method1 params
    const { id, title } = this.props.match.params;

    // Method2 state
    // const { id, title } = this.props.location.state;
    const result = DetailData.find(item => {
      return item.id === id
    })

    return (
      <div>
        <ul>
          <li>
            < h3> ID : {id}</h3>
          </li>
          <li>
            < h3> Title : {title}</h3>
          </li>
          <li>
            < h3> Content : {result.content}</h3>
          </li>
        </ul>
      </div>
    )
  }
}
