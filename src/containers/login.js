import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import LoginScreen from '../components/LoginScreen';

export default class Login extends Component {
  render() {
    const { logUserIn } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
          <LoginScreen logUserIn={logUserIn} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
