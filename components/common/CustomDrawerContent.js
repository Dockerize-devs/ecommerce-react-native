import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Avatar, Subheading, Title } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../../data/constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../services/AuthService';
import { updateAuthStatus } from '../../store/actions/authAction';
// import { navigate } from '../../navigators/DrawerNavigator';


const CustomDrawerContent = props => {
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const dispatch = useDispatch();
    const { state, ...rest } = props;
    const newState = { ...state}
    newState.routes = newState.routes.filter(item => item.name !== 'Login')
    const onLogout = async () => {
        await logout()
        dispatch(updateAuthStatus(false))
        navigate('Login')
    }
    const navigate = async (route, param) => (await (await import('../../navigators/DrawerNavigator')).navigate(route) )

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
                <Divider style={{ marginVertical: 10 }} />
                <DrawerItemList state={newState} {...rest} />
            </View>
            {
                isUserLoggedIn
                    ? <DrawerItem label="LOG OUT" onPress={onLogout} />
                    : <DrawerItem label="LOGIN" onPress={() => navigate('Login')} />
            }
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