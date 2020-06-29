import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator'
import LoginScreen from '../screens/LoginScreen';
import CustomDrawerContent from '../components/common/CustomDrawerContent';
import NavigationIcons from '../components/common/NavigationIcons';
import Colors from '../data/constants/Colors';
import PushScreen from '../screens/PushScreen';
import MapViewScreen from '../screens/MapViewScreen';
import CustomTiles from '../screens/MapTestScreen';


function SettingScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back" />
        </View>
    );
}

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <Drawer.Navigator
            initialRouteName="MapView"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: Colors.primary
            }}
        >
            <Drawer.Screen name="HomeTab" component={TabNavigator} options={{
                title: 'Home',
                drawerIcon: NavigationIcons.HomeIcon
            }} />
            <Drawer.Screen name="Settings" component={SettingScreen} options={{
                drawerIcon: NavigationIcons.SettingsIcon
            }} />
            <Drawer.Screen name="Login" component={LoginScreen} options={{
                title: 'Account',
                drawerIcon: NavigationIcons.PersonIcon
            }} />
            <Drawer.Screen name="Push" component={ PushScreen } options={{
                title: 'Push',
                drawerIcon: NavigationIcons.PersonIcon
            }} />
            <Drawer.Screen name="MapView" component={ MapViewScreen } options={{
                title: 'Map',
                drawerIcon: NavigationIcons.PersonIcon
            }} />
            <Drawer.Screen name="MapTest" component={ CustomTiles } options={{
                title: 'TestMap',
                drawerIcon: NavigationIcons.PersonIcon
            }} />
        </Drawer.Navigator>
    );
}