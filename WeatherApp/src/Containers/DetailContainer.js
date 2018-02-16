import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
    DetailScreen
} from '../components';

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
};

const connectDetailScreen = connect(
    mapStateToProps
)(DetailScreen);

export default connectDetailScreen;