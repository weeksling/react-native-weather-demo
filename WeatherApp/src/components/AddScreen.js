import React, { Component } from 'react';

import {   
    View,
    StyleSheet,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class AddView extends Component {
  _addLocation(){
    this.props.handleAdd(this.state.name)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add Screen
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type Location Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Button
          onPress={this._addLocation.bind(this)}
          title="Add New Location"
          color="#841584"
        />
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
