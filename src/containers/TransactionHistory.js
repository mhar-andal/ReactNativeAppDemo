import _ from 'lodash';

import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  ListItem,
  Avatar,
} from 'react-native-elements';

import { FontAwesome, Ionicons } from '@expo/vector-icons';

const list2 = [
  {
    subtitle: 'Fifth Third Deposit',
    amount: '860.00',
    type: 'Deposit',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    subtitle: 'Debit Card Purchase at Walmart',
    amount: '53.70',
    type: 'Purchase',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    subtitle: 'Debit Card Purchase at Dollop Coffee',
    amount: '3.92',
    type: 'Purchase',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    subtitle: 'Credit Card Purchase (Discover) at Best Buy',
    amount: '62.23',
    type: 'Purchase',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    subtitle: 'Direct Deposit Paycheck',
    amount: '1900.00',
    type: 'Deposit',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
  {
    subtitle: 'Fifth Third Deposit',
    amount: '860.00',
    type: 'Deposit',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    subtitle: 'Debit Card Purchase at Walmart',
    amount: '53.70',
    type: 'Purchase',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    subtitle: 'Debit Card Purchase at Dollop Coffee',
    amount: '3.92',
    type: 'Purchase',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    subtitle: 'Credit Card Purchase (Discover) at Best Buy',
    amount: '62.23',
    type: 'Purchase',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    subtitle: 'Direct Deposit Paycheck',
    amount: '1900.00',
    type: 'Deposit',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
  {
    subtitle: 'Fifth Third Deposit',
    amount: '860.00',
    type: 'Deposit',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    subtitle: 'Debit Card Purchase at Walmart',
    amount: '53.70',
    type: 'Purchase',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    subtitle: 'Debit Card Purchase at Dollop Coffee',
    amount: '3.92',
    type: 'Purchase',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    subtitle: 'Credit Card Purchase (Discover) at Best Buy',
    amount: '62.23',
    type: 'Purchase',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    subtitle: 'Direct Deposit Paycheck',
    amount: '1900.00',
    type: 'Deposit',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
  {
    subtitle: 'Fifth Third Deposit',
    amount: '860.00',
    type: 'Deposit',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    subtitle: 'Debit Card Purchase at Walmart',
    amount: '53.70',
    type: 'Purchase',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    subtitle: 'Debit Card Purchase at Dollop Coffee',
    amount: '3.92',
    type: 'Purchase',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    subtitle: 'Credit Card Purchase (Discover) at Best Buy',
    amount: '62.23',
    type: 'Purchase',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    subtitle: 'Direct Deposit Paycheck',
    amount: '1900.00',
    type: 'Deposit',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

class Icons extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      selectedIndex: 0,
      value: 0.5,
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
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
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Ionicons name="md-paper" size={62} />
          <Text style={styles.heading}>Transactions</Text>
        </View>
        <View style={styles.list}>
          {list2.map((l, i) => (
            <ListItem
              key={i}
              // leftIcon={{
              //   name: 'user-circle-o',
              //   type: 'font-awesome',
              //   color: 'blue',
              // }}
              // title={l.name}
              // titleStyle={{ color: 'red' }}
              subtitle={l.subtitle}
              subtitleStyle={{ fontSize: 12 }}
              rightTitle={`${l.type === 'Purchase' ? '- ' : '+ '}$${l.amount}`}
              rightTitleStyle={{
                color: l.type === 'Purchase' ? 'red' : 'green',
                fontSize: 12,
              }}
              bottomDivider
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Icons;
