import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1
import { Ionicons } from '@expo/vector-icons';

import '@expo/vector-icons'; // 6.3.1

export default class InviteFriends extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={{
            backgroundColor: '#ff4f00',
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          textStyle={{ textAlign: 'center' }}
          title={`Invite Friends`}
        />
        <View style={styles.wrapper}>
          <Ionicons style={styles.logo} name="logo-facebook" size={25} />
          <Ionicons style={styles.logo} name="logo-instagram" size={25} />
          <Ionicons style={styles.logo} name="logo-twitter" size={25} />
          <Ionicons style={styles.logo} name="logo-linkedin" size={25} />
          <Ionicons style={styles.logo} name="logo-google" size={25} />
        </View>
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
  wrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  logo: {
    padding: 10,
  },
});
