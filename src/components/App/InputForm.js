import React, { Component } from 'react';
import {connect} from 'react-redux';


class InputForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            gender: '',
            age: '',
            ready_to_transfer: '',
            notes: ''
        }
    }
    changeState = propertyName => (event) => {
        console.log(event.target.value, propertyName);
        this.setState({ [propertyName]: event.target.value })
    }

    addKoala = (event) => {
        event.preventDefault();
        console.log('in aK', this.state);
        const action = { type: 'POST_KOALA', payload: this.state}
        this.props.dispatch(action);
    }

    render() {
        
        return (
            <div>
                <form>
                    Name:<input placeholder="name" name='name' onChange={this.changeState('name')}/>
                    Gender: <input placeholder="M/F" name='gender' onChange={this.changeState('gender')}/>
                    Age: <input placeholder="age" name='age' onChange={this.changeState('age')}/>
                    Ready to Transfer?: <input placeholder="BOOL" name='ready_to_transfer' onChange={this.changeState('ready_to_transfer')}/>
                    Notes: <input placeholder="notes" name='notes' onChange={this.changeState('notes')}/>
                    <button onClick={this.addKoala}>Add</button>
                </form>

            </div>
        );
    }

}

export default connect()(InputForm);