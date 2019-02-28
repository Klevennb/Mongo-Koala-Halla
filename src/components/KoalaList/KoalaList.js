import React, { Component } from 'react';
import { connect } from 'react-redux';
import KoalaListItem from '../KoalaList/KoalaListItem';


class KoalaList extends Component {

    componentDidMount() {
        const action = {type: 'FETCH_KOALAS'};
        this.props.dispatch(action);
    }

    render(){
        return (
            <div>
                <pre>{JSON.stringify(this.props.reduxState.kolaReducer)}</pre>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Gender</th><th>Age</th>
                        <th>Ready to Transfer</th><th>Notes</th><th>Edit</th></tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.koalaReducer.map((koalas, i) => {
                            return (<KoalaListItem key={i} koalas={koalas} />)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }


}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(KoalaList);