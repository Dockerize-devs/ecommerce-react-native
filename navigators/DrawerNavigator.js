import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import TabNavigator from './TabNavigator'
import LoginScreen from '../screens/LoginScreen';
import CustomDrawerContent from '../components/common/CustomDrawerContent';
import NavigationIcons from '../components/common/NavigationIcons';


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const HomeIcon = ({ color, size }) => <Ionicons name='ios-home' size={size} color={color} />
const NotificationIcon = ({ color, size }) => <Ionicons name='ios-notifications' size={size} color={color} />
const PersonIcon = ({ color, size }) => <Ionicons name='ios-person' size={size} color={color} />

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Login" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={TabNavigator} options={{
            drawerIcon: NavigationIcons.HomeIcon
        }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{
            drawerIcon: NavigationIcons.NotificationIcon
        }}/>
        <Drawer.Screen name="Login" component={LoginScreen} options={{
            title: 'Account',
            drawerIcon: NavigationIcons.PersonIcon
        }}/>
      </Drawer.Navigator>
  );
}