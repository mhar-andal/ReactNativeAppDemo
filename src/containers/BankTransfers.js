import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1

import '@expo/vector-icons'; // 6.3.1

export default class BankTransfers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: '70%' }}>
            <Text style={{ textAlign: 'center' }}>
              Uh Oh! Looks like you haven't setup your, we can help with that.
            </Text>
          </View>
        </View>
        <Button
          raised
          buttonStyle={
            { marginTop: 10, backgroundColor: '#065ea2', borderRadius: 10 } // icon={{ name: 'home', size: 32 }}
          }
          textStyle={{ textAlign: 'center' }}
          title={`Setup Bank Account`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
