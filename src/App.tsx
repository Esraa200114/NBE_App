/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StackNavigator from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';

function App(): React.JSX.Element {

  return (
    <UserProvider>
      <NavigationContainer children={<StackNavigator />}>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
