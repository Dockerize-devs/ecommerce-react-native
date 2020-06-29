import * as SecureStore from 'expo-secure-store';

const AUTH_TOKEN = 'auth_token';
const email = 'user@gmail.com';
const password = '123456';

export const login = async (credentials) => {
    let res = await loginFromServer(credentials);
    if (res.success) {
        SecureStore.setItemAsync(AUTH_TOKEN, res.token);
        return true;
    }
    return false;
}

export const logout = async () => {
    SecureStore.deleteItemAsync(AUTH_TOKEN)
}

export const isUserLoggedIn = async () => {
    const token = await SecureStore.getItemAsync(AUTH_TOKEN);
    console.log('TOKEN', token);
    return token ? await validateTokenFromServer(token) : false;
}


/**
 * 
 * rest API simulation
 */
const validateTokenFromServer = async token => true;

const loginFromServer = async credentials => {
    let success = false;
    let token = null;

    if (credentials.email === email && credentials.password === password) {
        success = true;
        token = 'somerandomstring';
    }
    return { success, token }
}