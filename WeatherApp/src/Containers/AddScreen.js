import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
    AddScreen
} from "../components";

const mapStateToProps = state => {
    return {

    }
};

const connectAddScreen = connect(
    mapStateToProps
)(AddScreen);

export default connectAddScreen
