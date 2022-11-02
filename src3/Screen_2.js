/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Assignment from './Lesson_1';

const Screen_2 = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.run}>{route.params.name}</Text>
      <Text style={styles.run}>{route.params.email}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  run: {
    fontSize: 30,
    padding: 10,
  },
});

export default Screen_2;
