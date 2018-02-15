/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  WeatherList
 } from '../components';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Weather App
        </Text>
        <WeatherList 
          style={styles.list} 
          handleSelect={e => this.props.navigation.navigate('Detail')} 
          listings={[ {
            name: 'Oshawa', 
            temperature:'10c', 
            precipitation: 'raining'
          },
          {
            name: 'Toronto',
            temperature: '12c',
            precipitation: 'snowing'
          } ]} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  list : {
    width: '100%'
  }
});
