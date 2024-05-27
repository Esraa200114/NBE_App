/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import StackNavigator from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer children={<StackNavigator />}>
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
