import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './HomeCC.styles';

class HomeCC extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image style={styles.photo} source={require('../src/299.jpg')} />
        <View style={styles.space1}>
          <Text style={styles.text1}> Login</Text>
        </View>
        <SafeAreaView style={styles.space3}>
          <TextInput style={styles.text2} placeholder=" @ Email ID"></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.space2}>
          <TextInput style={styles.text3} placeholder=" Password"></TextInput>
          <Text>Forget?</Text>
        </SafeAreaView>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btn2}>Login</Text>
        </TouchableOpacity>
        <View style={styles.space4}>
          <Text>Or, login with...</Text>
        </View>
        <TouchableOpacity style={styles.btn3}>
          <Image style={styles.photo1} source={require('../src/google.png')} />
          <Image
            style={styles.photo2}
            source={require('../src/facebook.jpg')}
          />
          <Image style={styles.photo3} source={require('../src/apple.jpg')} />
        </TouchableOpacity>
        <SafeAreaView style={styles.space5}>
          <Text>New to iThinkLogistics?</Text>
          <TouchableOpacity>
            <Text style={styles.text5}> Register</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default HomeCC;
