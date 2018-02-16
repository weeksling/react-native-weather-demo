import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  ListScreen
 } from '../components';

const mapStateToProps = state => {
  console.log({state})
  return {
    weatherList : state.weather.weather
  }
}

const connectListView = connect(
  mapStateToProps
) (ListScreen);

export default connectListView;
