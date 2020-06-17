import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WishListScreen from '../screens/WishListScreen';
import PaperAppBar from '../components/common/PaperAppBar'
import FiltersScreen from '../screens/FiltersScreen';


const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        header: customAppBar
      }} />
      <Stack.Screen name="Filters" component={FiltersScreen} options={{
        header: customAppBar
      }} />
    </Stack.Navigator>
  );
}

export const WishlistStackNavigator = () => {
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
      // leftButton={
      //   previous ? <Appbar.BackAction onPress={navigation.goBack} /> : undefined
      // }
      title={title}
      previous={previous}
      goBack={() => navigation.goBack()}
      toggleDrawer={() => navigation.toggleDrawer()}
      style={options.headerStyle}
    />
  );
};