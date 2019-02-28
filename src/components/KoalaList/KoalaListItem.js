import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imput statements
import Button from '@material-ui/core/Button';

class KoalaListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            transfer: ''
        }
    }


    editKoala = () => {
        console.log(this.props.koalas._id);
        const action = {
            type: 'UPDATE_KOALA', payload: this.props.koalas._id};
            this.props.dispatch(action)
        }
    

    render(){
        const readyTransfer = () => {
            if (this.props.koalas.ready_to_transfer === true) {
                return <p>Y</p>
            } else {
                return <p>N</p>
            }
        }
        return (

            <tr>
                <td>{this.props.koalas.name}</td>
                <td>{this.props.koalas.gender}</td>
                <td>{this.props.koalas.age}</td>
                <td>{readyTransfer()}</td>
                <td>{this.props.koalas.notes}</td>
                <td>
                    <Button type="Delete" 
                            color="primary" 
                            onClick={this.editKoala}>
                    EDIT</Button>
                </td>
            </tr>
        )
    }
}

export default connect() (KoalaListItem);