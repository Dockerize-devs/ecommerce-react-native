import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WishListScreen from '../screens/WishListScreen';
import PaperAppBar from '../components/common/PaperAppBar'


const Stack = createStackNavigator();

export const HomeStackNavigator = () =>  {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
            header: customAppBar
        }} />
      </Stack.Navigator>
  );
}

export const WishlistStackNavigator = () =>  {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Wishlist" component={WishListScreen} options={{
              header: customAppBar
          }} />
        </Stack.Navigator>
    );
  }


const customAppBar = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
          ? options.title
          : scene.route.name;

    return (
      <PaperAppBar
        title={title}
        // leftButton={
        //   previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
        // }
        previous={previous}
        goBack={() => navigation.goBack()}
        toggleDrawer={() => navigation.toggleDrawer()}
        style={options.headerStyle}
      />
    );
  };