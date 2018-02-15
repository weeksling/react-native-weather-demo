import React, {Component} from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


export default class WeatherList extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text>Locations</Text>
                <FlatList
                    data = {this.props.listings}
                    renderItem={
                        ({item}) => 
                            <WeatherListing 
                                listing={item}
                                handleSelect={e => {
                                    console.warn(e)
                                    console.log(e)
                                    this.props.handleSelect()
                                    throw Error()
                                }}
                                />
                    }
                    />
            </View>
        );

    }
}

class WeatherListing extends Component {
    render () {
        let {
            name,
            precipitation,
            temperature
        } = this.props.listing;

        return (
            <TouchableHighlight onPress={this.props.handleSelect}>
                <View style= {styles.listing}
                        button
                        onPress={this.props.handleSelect}>
                    <Text style={styles.label}>{name}</Text>
                    <Text style={styles.label}>{precipitation}</Text>
                    <Text style={styles.label}>{temperature}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    listing: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    label: {
    },
    item: {
        
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })