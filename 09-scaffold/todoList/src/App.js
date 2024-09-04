// create component

import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import './App.css'

export default class App extends Component {

    addTask = (item) => {
        const newTask = [item, ...this.state.todos];
        this.setState({ todos: newTask })
    }

    changeTaskStatus = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, done }
            } else {
                return item;
            }
        })
        this.setState({todos : newTodos})
    }

    state = {
        todos: [
            { id: '001', name: 'meeting', done: true },
            { id: '002', name: 'dating', done: true },
            { id: '003', name: 'fishing', done: false },
            { id: '004', name: 'shopping', done: false },
        ]
    }

    render() {

        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTask={this.addTask} />
                    <List todos={todos} changeTaskStatus ={this.changeTaskStatus} />
                    <Footer />
                </div>
            </div>
        )
    }
}

