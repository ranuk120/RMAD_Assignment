import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../src2/HomeC2.styles';

class HomeC2 extends Component {
  render() {
    return (
      <View>
        <Image style={styles.take2} source={require('../src2/cooking.jpeg')} />
        <Text style={styles.take3}>We will always help</Text>
        <TextInput
          style={styles.take4}
          placeholder="How can I help ou?"
        ></TextInput>
      </View>
    );
  }
}

export default HomeC2;
