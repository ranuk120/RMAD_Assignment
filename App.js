// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Lesson_1 from './src3/Lesson_1';
import {navigation, navigationrouts, navigationscreen} from './src3/enum';
import Lesson_2 from './src3/Lesson_2';
import Screen_1 from './src3/Screen_1';
import Screen_2 from './src3/Screen_2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={navigationscreen.Screen_1}
          component={Screen_1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationscreen.Screen_2}
          component={Screen_2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
