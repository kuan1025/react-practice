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

  showReplace = (id,title) =>{
    return () =>{
      this.props.history.replace(`/home/HomeMsg/Detail/${id}/${title}`)
    } 
  }

  showPush = (id,title) =>{
      this.props.history.push(`/home/HomeMsg/Detail/${id}/${title}`)
    
  }

  back=()=>{
    this.props.history.goBack();
  }

  forward=()=>{
    this.props.history.goForward();
  }

  go=()=>{
    this.props.history.go(-2);
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

                  <Link to={`/home/HomeMsg/Detail/${msg.id}/${msg.title}`}>
                    {msg.title}
                  </Link>
                  <button onClick={ () => this.showPush(msg.id,msg.title)}>Push</button>
                  <button onClick={this.showReplace(msg.id,msg.title)}>Replace</button>

                 {/* transfer parameters through 'state' to router  */}

                  {/* <Link replace to={{pathname:'/home/HomeMsg/Detail/',state:{id:msg.id, title:msg.title}}}>
                    {msg.title}
                  </Link> */}
                </li>
                
              )
            })
          }
        </ul>
        <hr />

        {/* transfer parameter by 'params' */}

        <Route path="/home/HomeMsg/Detail/:id/:title" component={Detail} />

          {/* transfer parameter by 'state' */}
        {/* <Route path="/home/HomeMsg/Detail" component={Detail} /> */}


        {/* those are properties of router */}
        <button onClick={this.back}>Back</button>
        <button onClick={this.forward}>forward</button>
        <button onClick={this.go}>go</button>
      </div>
      
    )
  }
}
