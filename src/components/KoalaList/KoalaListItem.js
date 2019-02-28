import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imput statements
import Button from '@material-ui/core/Button';

class KoalaListItem extends Component {


    render(){
        return (

            <tr>
                <td>{this.props.koalas.name}</td>
                <td>{this.props.koalas.gender}</td>
                <td>{this.props.koalas.age}</td>
                <td><p>{JSON.stringify(this.props.koalas.ready_to_transfer)}</p></td>
                <td>{this.props.koalas.notes}</td>
            </tr>
        )
    }
}

export default connect() (KoalaListItem);