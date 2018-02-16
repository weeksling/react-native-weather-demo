import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  ListScreen
 } from '../components';

class ListContainer extends Component {
  handleSelect(location) {
    this.props.navigation.navigate("Detail");
  }
  render() {
    return <ListScreen {...this.props} handleSelect={this.handleSelect.bind(this)}/>
  }
}

const mapStateToProps = state => {
  console.log({state})
  return {
    weatherList : state.weather.weather
  }
}

const connectListView = connect(
  mapStateToProps,
) (ListContainer);

export default connectListView;
