import React, { Component } from 'react';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { DrawerNavigator, DrawerItems } from 'react-navigation';

import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1

const SCREEN_WIDTH = Dimensions.get('window').width;

// const CustomDrawerContentComponent = props => (
//   <View style={{ flex: 1, backgroundColor: '#43484d' }}>
//     <View
//       style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
//     >
//       <Image
//         source={require('./src/images/logo.png')}
//         style={{ width: SCREEN_WIDTH * 0.57 }}
//         resizeMode="contain"
//       />
//     </View>
//     <View style={{ marginLeft: 10 }}>
//       <DrawerItems {...props} />
//     </View>
//   </View>
// );

const MainRoot = DrawerNavigator(
  {
    Login: {
      path: '/login',
      screen: Login,
    },
    Profile: {
      path: '/profile',
      screen: Profile,
    },
    Lists: {
      path: '/lists',
      screen: Lists,
    },
    Components: {
      path: '/components',
      screen: Components,
    },
    Ratings: {
      path: '/ratings',
      screen: Ratings,
    },
    Pricing: {
      path: '/pricing',
      screen: Pricing,
    },
    Settings: {
      path: '/settings',
      screen: Settings,
    },
  },
  {
    initialRouteName: 'Components',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
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

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          // onError={console.warn}
        />
      );
    }
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
