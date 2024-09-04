// create component

import React, {Component} from "react";
import Hello from "./component/Hello/Hello";
import Welcome from './component/Welcome/Welcome'

export default class App extends Component{

    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

