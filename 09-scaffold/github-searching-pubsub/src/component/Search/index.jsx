import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {


    searchByUsername = () => {

        //continuesly destructuring assignment and rename!!
        const { keywordElement: { value: keyword } } = this;

        // this.props.updateSearchingStatus({ firstLoading: false, isLoading: true });
        PubSub.publish('updateData',{ firstLoading: false, isLoading: true })

        // request
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                // this.props.updateSearchingStatus(
                //     {
                //         isLoading: false,
                //         users: response.data.items
                //     })
                PubSub.publish('updateData', { isLoading: false, users: response.data.items });

            },
            error => { 
                console.log('Fail to request data ', error) ;
                // this.props.updateSearchingStatus({ isLoading: false, errorMsg : error.message });
                PubSub.publish('updateData',{ isLoading: false, errorMsg : error.message })
            }
        )

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
