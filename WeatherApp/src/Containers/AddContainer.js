import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
    addLocation
} from '../Actions'
import {
    AddScreen
} from "../components";

class AddContainer extends Component {
    handleAdd (name) {
        console.log('before add')
        this.props.addLocation(name)
            .then (()=>{
                console.log('after add')
                this.props.navigation.goBack(null)
            })
    }
    render() {
        return <AddScreen handleAdd={this.handleAdd.bind(this)} />
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addLocation: name => {
            return dispatch(addLocation(name))
        }
    }
}

const connectAddScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContainer);

export default connectAddScreen
