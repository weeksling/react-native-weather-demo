
import React, {Component} from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class ListScreen extends Component {
    selectLocation(e) {
        console.log(e)
        this.props.handleSelect(e)
    }
    render() {
        console.log(this.props)
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
            Weather App
            </Text>
            <WeatherList 
            style={styles.list} 
            handleSelect={this.selectLocation.bind(this)} 
            listings={this.props.weatherList} />
            
        </View>
        );
    }
}

export class WeatherList extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text>Locations</Text>
                <FlatList
                    data = {this.props.listings}
                    renderItem={
                        ({item}) => 
                            <WeatherListing 
                                key={item.name}
                                listing={item}
                                handleSelect={this.props.handleSelect}
                                />
                    }
                    />
            </View>
        );

    }
}

export class WeatherListing extends Component {
    render () {
        let {
            name,
            precipitation,
            temperature
        } = this.props.listing;

        return (
            <TouchableHighlight onPress={ e => this.props.handleSelect(name) }>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 22
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    list : {
        width: '100%'
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