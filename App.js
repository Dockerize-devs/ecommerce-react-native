import React, { useState } from 'react';
import { AppLoading } from 'expo';
import Navigator from './navigators/NavigatorContainer';
import { Provider } from 'react-native-paper';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStore, combineReducers } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import productReducer from './store/reducers/productReducer';
// import { enableScreens } from 'react-native-screens';


const store = createStore(combineReducers({
  product: productReducer
}))

// enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    // Roboto: require('native-base/Fonts/Roboto.ttf'),
    // Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  }
  return  <Provider><ReduxProvider store={store}><Navigator /></ReduxProvider></Provider>;
}
