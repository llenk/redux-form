import React, { Component } from 'react';
import '../App/App.css';

import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class SnackList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>Snack List</h3>
                <ul>
                    {this.props.reduxState.firstReducer.map(item=><li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SnackList);
