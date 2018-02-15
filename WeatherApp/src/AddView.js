import React, { Component } from 'react';

import {   
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class AddView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add Screen
        </Text>
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
  });
