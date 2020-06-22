import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Colors from '../../data/constants/Colors';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const PaperAppBar = props => {
    return (
        <Appbar.Header statusBarHeight={40} dark={true} style={{
            backgroundColor: Colors.primary
        }}>
            {/* <Appbar.BackAction onPress={() => { }} /> */}
            <Appbar.Action icon='menu' onPress={ props.toggleDrawer } />
            <Appbar.Content title={props.title} subtitle={''} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Appbar.Action icon='dots-horizontal' onPress={() => { }} />
        </Appbar.Header>
    )
};

export default PaperAppBar;