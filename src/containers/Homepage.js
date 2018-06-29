import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import {
  Card,
  ButtonGroup,
  Tile,
  Icon,
  ListItem,
  Avatar,
} from 'react-native-elements';

import '@expo/vector-icons'; // 6.3.1

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const log = () => console.log('');

export default class Homepage extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(list1),
    };
  }
  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        leftIcon={{ name: rowData.icon }}
        chevron
        bottomDivider
      />
    );
  }

  render() {
    return (
      <View style={styles.contentView}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Welcome, Sam</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: '70%' }}>
            <Text style={{ textAlign: 'center' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              velit. Consequatur natus ducimus ullam facilis fuga iste accusamus
              reiciendis minima.
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#4F80E1',
    marginBottom: 10,
  },
  heading: {
    color: 'white',
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#fff',
  },
});
