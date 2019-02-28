import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imput statements
import Button from '@material-ui/core/Button';

class KoalaListItem extends Component {


    editKoala = () => {
        const action = {
            type: 'UPDATE_KOALA', payload: this.props.koalas.id};
            this.props.dispatch(action)
        }
    

    render(){
        return (

            <tr>
                <td>{this.props.koalas.name}</td>
                <td>{this.props.koalas.gender}</td>
                <td>{this.props.koalas.age}</td>
                <td><p>{JSON.stringify(this.props.koalas.ready_to_transfer)}</p></td>
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