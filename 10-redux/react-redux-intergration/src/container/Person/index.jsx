import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPerson } from '../../redux/actions/person' 


class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name, age }
        this.props.addAPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        const { person } = this.props;
        console.log(person)
        return (

            <div>
                <h2>I am Person component</h2>
                <input ref={c => this.nameNode = c} type='text' placeholder='Enter name' />
                <input ref={c => this.ageNode = c} type='text' placeholder='Enter age' />
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        person.map((item) => {
                            return <li key={item.id}>Name : {item.name} ---- age : {item.age}</li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    // state
    state => ({ person: state.person }),
    // method
    { addAPerson : createAddPerson}
)(Person)
