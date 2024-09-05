import React, { Component } from 'react'
import axios from 'axios'


export default class Search extends Component {


    searchByUsername = async () => {
        //continuesly destructuring assignment and rename!!
        const { keywordElement: { value: keyword } } = this;
        this.props.updateSearchingStatus({ firstLoading: false, isLoading: true });
        this.props.updateSearchingStatus(
            {
                isLoading: true
            })
        // request
        // axios.get(`/api1/search/users?q=${keyword}`).then(
        //     response => {
        //         this.props.updateSearchingStatus(
        //             {
        //                 isLoading: false,
        //                 users: response.data.items
        //             })

        //     },
        //     error => { 
        //         console.log('Fail to request data ', error) ;
        //         this.props.updateSearchingStatus({ isLoading: false, errorMsg : error.message });
        //     }
        // )

        // fetch ()
        // fetch(`/api1/search/users?q=${keyword}`).then(
        //     response =>{
        //         console.log('connect success')
        //         return response.json();
        //     },
        //     error =>{
        //         console.log('connect fail')
        //         console.log(error)
        //         return new Promise(()=>{})
        //     }
        // ).then(
        //     response =>{
        //         console.log('successfully receive data', response)
        //     },
        //     error =>{
        //         console.log('fail to receive data',error)
        //     }
        // ) 


        // fetch  optimization 1
        // fetch(`/api1/search/users?q=${keyword}`).then(
        //     response =>{
        //         console.log('connect success')
        //         return response.json();
        //     }
        // ).then(
        //     response =>{
        //         console.log('successfully receive data', response)
        //     }
        // ).catch(
        //     error =>{console.log('error', error)}
        // ) 

        // fetch optimization 2
        try {
            const reponse = await fetch(`/api1/search/users?q=${keyword}`);
            const data = await reponse.json();
            console.log(data)
            this.props.updateSearchingStatus({ isLoading: false, users: data.items })
        } catch (error) {
            console.log();
            this.props.updateSearchingStatus({ isLoading: false, errorMsg : error.message })
        }

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">search github users</h3>
                <div>

                    <input type="text" ref={node => this.keywordElement = node} placeholder="input key word and click searching" />&nbsp;
                    <button onClick={this.searchByUsername}>search</button>
                </div>
            </section>
        )
    }
}
