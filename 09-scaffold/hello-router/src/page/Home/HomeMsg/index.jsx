import React, { Component } from 'react'
import { Link ,Route} from "react-router-dom";
import Detail from './Detail'

export default class HomeMsg extends Component {

  state = {
    msgArr: [
      { id: '01', title: 'msg01' },
      { id: '02', title: 'msg02' },
      { id: '03', title: 'msg03' },
    ]
  }

  render() {

    const { msgArr } = this.state;

    return (
      <div>
        <ul>
          {
            msgArr.map((msg) => {
              return (
                <li key={msg.id}>

                  {/* transfer parameters through 'params' to router  */}

                  {/* <Link to={`/home/HomeMsg/Detail/${msg.id}/${msg.title}`}>
                    {msg.title}
                  </Link> */}

                 {/* transfer parameters through 'state' to router  */}

                  <Link to={{pathname:'/home/HomeMsg/Detail/',state:{id:msg.id, title:msg.title}}}>
                    {msg.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <hr />

        {/* transfer parameter by 'params' */}

        {/* <Route path="/home/HomeMsg/Detail/:id/:title" component={Detail} /> */}

          {/* transfer parameter by 'state' */}
        <Route path="/home/HomeMsg/Detail" component={Detail} />
      </div>
    )
  }
}
