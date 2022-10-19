import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from '../src1/HomeC1.styles';

class HomeC1 extends Component {
  render() {
    return (
      <View>
        <View style={styles.run2}>
          <Image
            style={styles.run1}
            source={require('../src1/people.jpg')}
          ></Image>
        </View>
        <View>
          <Text style={styles.run3}>Sign up</Text>
        </View>
        <View style={styles.run11}>
          <View style={{padding: 5}}>
            <TouchableOpacity style={styles.run4}>
              <Image
                style={styles.run5}
                source={require('../src1/google.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{padding: 5}}>
            <TouchableOpacity style={styles.run6}>
              <Image
                style={styles.run7}
                source={require('../src1/facebook.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={{padding: 5}}>
            <TouchableOpacity style={styles.run9}>
              <Image
                style={styles.run10}
                source={require('../src1/apple.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.run12}>
          <Text>Or, register with email...</Text>
        </View>
        <View style={styles.run14}>
          <TextInput
            style={styles.run13}
            placeholder=" @   Emaid ID"
          ></TextInput>
          <TextInput placeholder=" Password"></TextInput>
          <TextInput placeholder=" Full Name"></TextInput>
          <TextInput placeholder=" Password"></TextInput>
          <TextInput placeholder=" Company Name"></TextInput>
        </View>
      </View>
    );
  }
}

export default HomeC1;
