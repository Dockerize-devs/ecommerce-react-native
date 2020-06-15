import React from 'react';
import { View, Button, Text } from 'react-native';

export default ({ navigation }) =>  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home!</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }