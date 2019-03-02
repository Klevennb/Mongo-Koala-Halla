import React, { Component } from 'react';
import { connect } from 'react-redux';
import KoalaListItem from '../KoalaList/KoalaListItem';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class KoalaList extends Component {

    componentDidMount() {
        const action = {type: 'FETCH_KOALAS'};
        this.props.dispatch(action);
    }

    render(){
        return (
            <div>
                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
                <br></br>
                <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell align="right">Name</CustomTableCell>
                            <CustomTableCell align="right">Gender</CustomTableCell>
                            <CustomTableCell align="right">Age</CustomTableCell>
                            <CustomTableCell align="right">Ready To Transfer</CustomTableCell>
                            <CustomTableCell align="right">Notes</CustomTableCell>
                            <CustomTableCell align="right">Change Status</CustomTableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {this.props.reduxState.koalaReducer.map((koalas, i) => {
                            return (<KoalaListItem key={i} koalas={koalas} />)
                        })}
                        </TableBody>
                </Table>
                </Paper>
            </div>
        );
    }


}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(KoalaList);