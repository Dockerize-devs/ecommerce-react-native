import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Colors from '../../data/constants/Colors';

export default props => {
    return (
        <View style={styles.screen}>
            <Text style={{textAlign: 'center'}}>🎁</Text>
            <Text>Shop for $50 or more and get a <Text style={styles.highlight}>Gift</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
        marginVertical: 20,
        borderColor: Colors.lightGray,
        borderRadius: 15
    },
    offerText: {
        textAlign: 'center'
    },
    highlight: {
        color: Colors.primary
    }
})