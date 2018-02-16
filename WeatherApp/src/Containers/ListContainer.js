import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  ListScreen
 } from '../components';

import {
  selectLocation
} from '../Actions'

class ListContainer extends Component {
  handleSelect(location) {
    this.props.onSelectLocation(location);
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

const mapDispatchToProps = dispatch => {
  return {
    onSelectLocation: location => {
      dispatch(selectLocation(location))
    }
  }
}

const connectListView = connect(
  mapStateToProps,
  mapDispatchToProps
) (ListContainer);

export default connectListView;
