import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  ListScreen
 } from '../components';

import {
  selectLocation,
  updateAllWeatherData
} from '../Actions'

class ListContainer extends Component {
  handleSelect(location) {
    this.props.onSelectLocation(location);
    this.props.navigation.navigate("Detail");
  }
  handleAdd() {
    this.props.navigation.navigate("Add");
  }
  componentDidMount() {
    console.log('updating...')
    this.props.updateWeatherData()
  }
  componentWillReceiveProps(prev, next) {
    console.log({ prev, next })
  }
  render() {
    return <ListScreen {...this.props} handleSelect={this.handleSelect.bind(this)} handleAdd={this.handleAdd.bind(this)}/>
  }
}

const mapStateToProps = state => {
  console.log({state})
  const { currentWeather } = state.weather;

  return {
    weatherList : Object.keys(currentWeather).map((k) => currentWeather[k])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectLocation: location => {
      dispatch(selectLocation(location))
    },
    updateWeatherData: () => {
      dispatch(updateAllWeatherData())
    }
  }
}

const connectListView = connect(
  mapStateToProps,
  mapDispatchToProps
) (ListContainer);

export default connectListView;
