import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected,
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={
          selected
            ? {
                backgroundColor: 'rgba(213, 100, 140, 1)',
                borderRadius: 100,
                width: 127,
              }
            : {
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 30,
                width: 127,
                backgroundColor: 'transparent',
              }
        }
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class PersonalRecords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      georgia: require('../../assets/fonts/Georgia.ttf'),
      regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
      light: require('../../assets/fonts/Montserrat-Light.ttf'),
      bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {this.state.fontLoaded ? (
          <View style={{ flex: 1, backgroundColor: 'rgba(47,44,60,1)' }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar} />
            <ScrollView style={{ flex: 1 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  }}
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 26,
                    color: 'white',
                    fontFamily: 'bold',
                  }}
                >
                  Sam
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  width: SCREEN_WIDTH - 80,
                  marginLeft: 40,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                  }}
                >
                  IDENTIFICATION CARD (I.D.)
                </Text>
                <Image
                  source={require('../../assets/images/licenses.png')}
                  style={{ width: 220, height: 150, borderRadius: 10 }}
                />
              </View>
              {/* <View style={{ flex: 1, marginTop: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  INTERESTS
                </Text>
                <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
                  <ScrollView
                    style={{ flex: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 170,
                        marginLeft: 40,
                        marginRight: 10,
                      }}
                    >
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Philosophy" selected={true} />
                        <CustomButton title="Sport" />
                        <CustomButton title="Swimming" selected={true} />
                        <CustomButton title="Religion" />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Music" />
                        <CustomButton title="Soccer" selected={true} />
                        <CustomButton title="Radiohead" selected={true} />
                        <CustomButton title="Micheal Jackson" />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Travelling" selected={true} />
                        <CustomButton title="Rock'n'Roll" />
                        <CustomButton title="Dogs" selected={true} />
                        <CustomButton title="France" selected={true} />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View> */}
              <View style={{ flex: 1, marginTop: 30, paddingBottom: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  INFO
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 30,
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.infoTypeLabel}>Age</Text>
                      <Text style={styles.infoTypeLabel}>Height</Text>
                      <Text style={styles.infoTypeLabel}>Ethnicity</Text>
                      <Text style={styles.infoTypeLabel}>Eye Color</Text>
                      <Text style={styles.infoTypeLabel}>Born Place</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={styles.infoAnswerLabel}>26</Text>
                      <Text style={styles.infoAnswerLabel}>5'4"</Text>
                      <Text style={styles.infoAnswerLabel}>African</Text>
                      <Text style={styles.infoAnswerLabel}>Black</Text>
                      <Text style={styles.infoAnswerLabel}>Chicago</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.infoTypeLabel}>Body Type</Text>
                      <Text style={styles.infoTypeLabel}>Weight</Text>
                      <Text style={styles.infoTypeLabel}>Gender</Text>
                      <Text style={styles.infoTypeLabel}>Birthdate</Text>
                      <Text style={styles.infoTypeLabel}>Resides</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10, marginRight: -20 }}>
                      <Text style={styles.infoAnswerLabel}>Fit</Text>
                      <Text style={styles.infoAnswerLabel}>178 lbs</Text>
                      <Text style={styles.infoAnswerLabel}>Male</Text>
                      <Text style={styles.infoAnswerLabel}>06/28/1992</Text>
                      <Text style={styles.infoAnswerLabel}>Chicago</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 12,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 20,
  },
  infoAnswerLabel: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 20,
  },
});
