import React, {Component} from "react";
import HelloCSS from './Hello.module.css';

export default class Hello extends Component{

    render(){
        return (
            <div> <h2 className={HelloCSS.title}>Hello react</h2></div>
        )
    }

}