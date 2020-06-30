import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator, { navigationRef } from './DrawerNavigator';


export default () =>  {
  return (
    <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
    </NavigationContainer>
  );
}