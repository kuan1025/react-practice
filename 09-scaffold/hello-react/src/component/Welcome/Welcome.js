import React, {Component} from "react";
import WelcomeCSS from './Welcome.module.css';

export default class Hello extends Component{

    render(){
        return (
            <div> <h2 className={WelcomeCSS.title}>welcome</h2></div>
        )
    }

}