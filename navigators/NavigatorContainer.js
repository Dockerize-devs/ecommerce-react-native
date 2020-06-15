import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

export default () =>  {
  return (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  );
}