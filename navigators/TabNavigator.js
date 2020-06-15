import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeStackNavigator, WishlistStackNavigator } from './StackNavigator';


const Tab = createBottomTabNavigator();

const HomeIcon = ({ color, size }) => <Ionicons name='ios-home' size={size} color={color} />
const WishlistIcon = ({ color, size }) => <Ionicons name='ios-heart' size={size} color={color} />

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{
        title: 'Home',
        tabBarIcon: HomeIcon
      }} />
      <Tab.Screen name="Wishlist" component={WishlistStackNavigator} options={{
        title: 'Wishlist',
        tabBarIcon: WishlistIcon
      }}/>
    </Tab.Navigator>
  );
}