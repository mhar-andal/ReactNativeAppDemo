import React, { Component } from 'react';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import Homepage from './src/containers/Homepage';
import PersonalRecords from './src/containers/PersonalRecords';
import TransactionHistory from './src/containers/TransactionHistory';
import BankTransfers from './src/containers/BankTransfers';
import InviteFriends from './src/containers/InviteFriends';

import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1

const SCREEN_WIDTH = Dimensions.get('window').width;

const ListsTabView = ({ navigation }) => (
  <TransactionHistory banner="Lists" navigation={navigation} />
);

const MainRoot = createBottomTabNavigator(
  {
    Homepage: Homepage,
    Records: PersonalRecords,
    Transactions: ListsTabView,
    Banking: BankTransfers,
    'Invite Friends': InviteFriends,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Homepage') {
          iconName = 'ios-home';
        } else if (routeName === 'Records') {
          iconName = 'md-person';
        } else if (routeName === 'Banking') {
          iconName = 'md-cash';
        } else if (routeName === 'Transactions') {
          iconName = 'md-paper';
        } else if (routeName === 'Invite Friends') {
          iconName = 'md-person-add';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends Component {
  state = {
    isReady: false,
    authenticated: false,
  };
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/bg_screen4.jpg'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  logUserIn = () => {
    this.setState({ authenticated: true });
  };

  render() {
    const { authenticated, isReady } = this.state;

    if (isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          // onError={console.warn}
        />
      );
    }

    if (!authenticated) {
      return <Login logUserIn={this.logUserIn} />;
    }

    return <MainRoot />;
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
});
