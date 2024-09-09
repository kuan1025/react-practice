// create component

import React, { Component } from "react";
import { NavLink,Link, Route , Switch} from "react-router-dom";
import About from './page/About'
import Home from './page/Home'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* Link tag for router, A tag for html  */}
                                {/* <Link className='list-group-item' to='./about'>About</Link>
                                <Link className='list-group-item' to='./home'>Home</Link> */}

                                {/* encapsulation */}
                                {/* <NavLink className='list-group-item' to='./about'>About</NavLink> */}
                                {/* <NavLink className='list-group-item' to='./home'>Home</NavLink> */}
                                <MyNavLink to = "/about">About</MyNavLink>
                                <MyNavLink to = "/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* register Route /  'Switch' can optizime performance. If router find matching path,
                                 it will not consistenly finding the rest of the component */}
                                <Switch> 
                                    <Route exact path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

