import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imput statements
import Button from '@material-ui/core/Button';
import { TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class KoalaListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            transfer: ''
        }
    }


    editKoala = () => {
        console.log(this.props.koalas._id);
        this.props.koalas.ready_to_transfer = !this.props.koalas.ready_to_transfer
        const action = {
            type: 'UPDATE_KOALA', payload: {_id:this.props.koalas._id, ready_to_transfer: this.props.koalas.ready_to_transfer}}
            this.props.dispatch(action)
    }

    render(){
        const readyTransfer = () => {
            if (this.props.koalas.ready_to_transfer === true) {
                return <p>YES</p>
            } else {
                return <p>NO</p>
            }
        }
        return (

            <TableRow>
                <CustomTableCell align="right">{this.props.koalas.name}</CustomTableCell>
                <CustomTableCell align="right">{this.props.koalas.gender}</CustomTableCell>
                <CustomTableCell align="right">{this.props.koalas.age}</CustomTableCell>
                <CustomTableCell align="right">{readyTransfer()}</CustomTableCell>
                <CustomTableCell align="right">{this.props.koalas.notes}</CustomTableCell>
                <CustomTableCell align="right">
                <Button type="Delete" 
                            color="primary" 
                            onClick={this.editKoala}>
                    Transfer</Button>
                </CustomTableCell>
            </TableRow>
        )
    }
}

export default connect() (KoalaListItem);