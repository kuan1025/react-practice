import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state ={
        users:[], // initialized
        firstLoading : true,
        isLoading : false,
        errorMsg:''

    } 


    // subscribe data
    componentDidMount(){
        // store token for closing
        this.token = PubSub.subscribe("updateData",(msg,data)=>{
            console.log(msg)
            this.setState(data)
        })
    }
    
    componentWillUnmount(){
        PubSub.unsubscribe(this.token); 
    }

    render() {
        const {users, firstLoading,isLoading,errorMsg} = this.state;
        return (
            <div className='row'>
                {
                    firstLoading ? <h2>Welcome ! Type keyword to search users!</h2> :
                    isLoading ? <h2>Loading .....</h2> :
                    (errorMsg !== '') ? <h2 style={{color:'red'}}>{errorMsg}</h2> :                    
                    users.map((obj) => {
                        return (
                            <div key={obj.id} className="card">
                                <a href={obj.html_url} target="_blank" rel="noreferrer">
                                    <img alt="profile" src={obj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{obj.login}</p>
                            </div>
                        )
                    })
                }
            </div>

        )

    }
}
