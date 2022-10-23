import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Assignment = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    // const name = 'apple';
    // If CONDITIONS
    // if (name === 'BlueBerry') {
    //   console.log('Fruit 1', name);
    // } else if (name === 'Orange') {
    //   console.log('Fruit 2', name);
    // } else {
    //   console.log('Fruit 3', 'Not Available');
    // }

    //Ternary Operator
    // name === 'Orange'
    //   ? console.log('Fruit', true)
    //   : console.log('Fruit', false);

    // Switch Case
    // switch (name) {
    //   case 'Apple':
    //     console.log('Fruit', true);
    //     break;

    //   default:
    //     console.log('Fruit', false);
    //     break;
    // }

    const marks = 55;
    // 75 -> A
    // 65 - 75 -> B
    // 55 - 65 -> C
    // 35 - 55 -> s
    // 35 - W

    // if (marks >= 75) {
    //   console.log('pass', 'A');
    // } else if (marks >= 65) {
    //   console.log('pass', 'B');
    // } else if (marks >= 55) {
    //   console.log('pass', 'C');
    // } else if (marks >= 35) {
    //   console.log('pass', 'S');
    // } else {
    //   console.log('fail', 'W');
    // }

    // switch (true) {
    //   case marks >= 75:
    //     console.log('A');
    //     break;
    //   case marks >= 65:
    //     console.log('B');
    //     break;
    //   case marks >= 55:
    //     console.log('C');
    //     break;
    //   default:
    //     console.log('W');
    //     break;
    // }

    marks >= 75
      ? console.log('A')
      : marks >= 65
      ? console.log('B')
      : marks >= 55
      ? console.log('C')
      : marks >= 35
      ? console.log('S')
      : console.log('W');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 01</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default Assignment;
