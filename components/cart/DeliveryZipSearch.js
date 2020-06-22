import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading, TextInput, Button } from 'react-native-paper';
import Colors from '../../data/constants/Colors';

export default props => {
    return (
        <View style={styles.screen}>
            <Subheading>Calculate your delivery</Subheading>
            <View style={styles.searchArea}>
                <TextInput
                    dense={true}
                    mode='outlined'
                    selectionColor={Colors.primary}
                    style={styles.searchInput}
                    placeholder='Enter your delivery zip code'
                />
                <Button  color='white' style={styles.searchButton}>Check</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {

    },
    searchArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    searchInput: {
        width: '65%',
        backgroundColor: null,
        color: 'red',
    },
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        height: 43,
        width: '30%'
    }
})