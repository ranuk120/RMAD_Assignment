import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {navigationrouts, navigationscreen} from './enum';

const Screen_1 = ({navigation, route}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter your Details</Text>
      <View style={styles.tec3}>
        <TextInput
          style={styles.tec1}
          placeholder="Your Name"
          onChangeText={val => setName(val)}
          value={name}
        />
      </View>
      <View style={styles.tec4}>
        <TextInput
          style={styles.tec2}
          placeholder="Your Email"
          onChangeText={val => setEmail(val)}
          value={email}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(navigationscreen.Screen_2, {
            name: name,
            email: email,
          })
        }
      >
        <View style={styles.tec5}>
          <Text style={styles.title1}>Submit</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    textDecorationLine: 'underline',
    padding: 28,
    color: 'black',
  },

  tec1: {
    borderStyle: 'solid',
    borderColor: 'black',
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: 310,
    paddingLeft: 110,
  },

  tec2: {
    borderStyle: 'solid',
    borderColor: 'black',
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: 310,
    paddingLeft: 110,
  },

  title1: {
    fontSize: 25,
    backgroundColor: '#8385FA',
    color: 'black',
    borderRadius: 40,
    padding: 10,
    width: 150,
    paddingLeft: 30,
  },

  tec3: {
    padding: 5,
  },

  tec4: {
    padding: 5,
  },

  tec5: {
    padding: 5,
    paddingTop: 50,
    alignItems: 'center',
  },
});

export default Screen_1;
