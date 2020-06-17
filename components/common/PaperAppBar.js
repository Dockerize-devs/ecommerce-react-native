import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Colors from '../../data/constants/Colors';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const PaperAppBar = props => {
    const { previous } = props;

    const leftButton = previous
        ? <Appbar.BackAction onPress={props.goBack} />
        : <Appbar.Action icon='menu' onPress={props.toggleDrawer} />


    return (
        <Appbar.Header statusBarHeight={40} dark={true} style={{
            backgroundColor: Colors.primary
        }}>
            {leftButton}
            <Appbar.Content title={props.title} subtitle={''} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Appbar.Action icon='dots-horizontal' onPress={() => { }} />
        </Appbar.Header>
    )
};

export default PaperAppBar;