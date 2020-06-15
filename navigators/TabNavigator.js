import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeStackNavigator, WishlistStackNavigator } from './StackNavigator';
import CartScreen from '../screens/CartScreen';
import NavigationIcons from '../components/common/NavigationIcons';


const Tab = createBottomTabNavigator();


export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{
        title: 'Home',
        tabBarIcon: NavigationIcons.HomeIcon
      }} />
      <Tab.Screen name="Wishlist" component={WishlistStackNavigator} options={{
        title: 'Wishlist',
        tabBarIcon: NavigationIcons.WishlistIcon
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
        title: 'Cart',
        tabBarIcon: NavigationIcons.CartIcon
      }}/>
    </Tab.Navigator>
  );
}