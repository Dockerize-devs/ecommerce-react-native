import React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

export default props => {
    return (
        <Title {...props} style={{ ...styles.title, ...props.style }}>{props.children}</Title>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        fontWeight: 'bold'
    }
})