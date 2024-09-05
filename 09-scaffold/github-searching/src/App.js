// create component

import React, {Component} from "react";
import Search from "./component/Search";
import List from './component/List'


export default class App extends Component{

    state ={
        users:[], // initialized
        firstLoading : true,
        isLoading : false,
        errorMsg:''

    } 

    updateSearchingStatus = (obj) =>{
        this.setState(obj)
    }

    render(){
        return (
            <div className="container">
                <Search updateSearchingStatus = {this.updateSearchingStatus}/>
                <List {...this.state}/>
            </div>
        )
    }
}

