import React, { useEffect, useState } from 'react';
import { TextInput, Card, Title, Button, Text } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../data/constants/Colors';
import { login } from '../services/AuthService';
import { useSelector, useDispatch } from 'react-redux';
import { updateAuthStatusAsync } from '../store/reducers/authReducer';
import { updateAuthStatus } from '../store/actions/authAction';
import { useFocusEffect } from '@react-navigation/native';

export default props => {

    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const dispatch = useDispatch();

    console.log('LoginScreen Status', isUserLoggedIn)
    // const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn())
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('light-content');
        }, [])
    );

    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch(updateAuthStatusAsync())
    //         console.log(isUserLoggedIn)
    //         checkIfLogin()

    //         return () => {
    //             // Do something when the screen is unfocused
    //             // Useful for cleanup functions
    //         };
    //     }, [])
    // );
    useEffect(() => {
        dispatch(updateAuthStatusAsync())
    }, [])

    useEffect(() => {

        // const fn = async () => {
        //     if (await isUserLoggedIn()) {
        //         props.navigation.navigate('HomeTab')
        //     }
        // }
        // fn()
        checkIfLogin()

    }, [isUserLoggedIn]);

    const checkIfLogin = () => {
        if (isUserLoggedIn) {
            props.navigation.navigate('HomeTab')
        }
    }
    const onEmailChange = value => setEmail(value);
    const onPasswordChange = value => setPassword(value);

    const onLogin = async () => {
        const success = await login({ email, password })
        console.log('SUCCESS', success, isUserLoggedIn)
        if (success) {
            // props.navigation.navigate('HomeTab')
            dispatch(updateAuthStatus(true))
            props.navigation.navigate('HomeTab')
        } else {
            alert('wrong user name or password!')
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.logoArea}>
                <View style={styles.logoBorder}>
                    <Ionicons name='ios-cart' color={Colors.primary} size={80} />
                </View>
            </View>
            <View style={styles.loginCardContainer}>
                <Card elevation={3} style={styles.loginCard}>
                    <View style={styles.loginCardHeader}>
                        <Title style={styles.headerText}>LOGIN</Title>
                    </View>
                    <Card.Content style={styles.loginForm}>
                        <TextInput
                            mode='flat'
                            style={styles.textInput}
                            label='Email'
                            placeholder="example@example.com"
                            value={email}
                            onChangeText={onEmailChange}
                        />
                        <TextInput
                            secureTextEntry={true}
                            mode='flat'
                            style={styles.textInput}
                            label='Password'
                            value={password}
                            onChangeText={onPasswordChange}

                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                mode="contained"
                                style={styles.loginButton}
                                onPress={onLogin}
                            >
                                Login
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
                <View style={styles.helpText}>
                    <Text >FORGOT PASSWORD?</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    logoArea: {
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary
    },
    logoBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 65
    },
    loginCardContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: -40
    },
    loginCard: {
        width: '85%',
        borderRadius: 10,
        height: 320,
        backgroundColor: 'white'
    },
    loginCardHeader: {
        alignItems: "center",
        marginTop: 15
    },
    headerText: {
        fontSize: 25,
        color: '#464646'
    },
    loginForm: {
        marginTop: 20
    },
    textInput: {
        backgroundColor: 'white',
        marginBottom: 20
    },
    buttonContainer: {
        alignItems: "center"
    },
    loginButton: {
        borderRadius: 30,
        width: '90%',
        paddingVertical: 15,
        justifyContent: 'center',
        marginTop: 48,
        backgroundColor: Colors.primary
    },
    helpText: {
        marginTop: 50
    }

});