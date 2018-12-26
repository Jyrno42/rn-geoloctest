/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {GeoLocation, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  onGetPosition = () => {
    GeoLocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError, {
      enableHighAccuracy: true,
    });
  };

  onGeoError = (data) => {
    console.error(data);
  };

  onGeoSuccess = (data) => {
    console.warn(data);
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, tap on `Get current position` and deny location permissions.</Text>
        <Text style={styles.instructions}>With a patch for #22535 the onGeoError callback should still be called on Android M and above.</Text>
        
        <TouchableOpacity onPress={this.onGetPosition}>
          <Text>Get current position</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
