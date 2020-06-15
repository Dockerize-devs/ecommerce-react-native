import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Avatar, Subheading, Title } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../../data/constants/Colors';


const CustomDrawerContent = props => {

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Avatar.Image
                        size={100}
                        source={{ uri: 'https://i7.pngguru.com/preview/159/439/738/avatar-twitch-youtube-character-avatar.jpg' }}
                    />
                    <Title>Lenin Sheikh</Title>
                    <Subheading style={styles.subheading}>justtlenin@gmail.com</Subheading>
                </View>
                <Divider style={{marginVertical: 10}} />
                <DrawerItemList {...props} />
            </View>
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        alignItems: 'center'
    },
    subheading: {
        color: Colors.gray
    }
})

export default CustomDrawerContent;