/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import MainStackNavigator from './navigation/MainStackNavigator';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer children={<MainStackNavigator />}>
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
