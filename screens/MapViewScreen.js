import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location'
import LocationData from '../data/dummy/Locations'
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';


const CustomMarker = props => (
    <Ionicons name='ios-bicycle' size={24} />
)


export default ({ navigation }) => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [viewMap, setViewMap] = useState(false)
    const [marker, setMarker] = useState({
        latitude: 10.793270,
        longitude: 106.69320
    })

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //         }

    //         let locationData = await Location.getCurrentPositionAsync({});
    //         setLocation(locationData);
    //         console.log(locationData?.coords?.longitude)
    //     })();
    // }, []);

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
        console.log(locationData?.coords?.longitude)
    }

    return viewMap ? (
        <View style={styles.container}>
            <MapView
                showsUserLocation
                style={styles.mapStyle}
                initialRegion={{
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude,
                    // latitude: 10.780060,
                    // longitude: 106.693410,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    draggable
                    title={`Lat: ${marker.latitude} Lon: ${marker.longitude}`}
                    coordinate={marker}
                    onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)}
                >
                    {/* <Image
                        source={require('../assets/marker.png')}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                    /> */}
                    <CustomMarker />
                </Marker>
                {LocationData.map((marker, index) => (
                    <Marker
                        coordinate={marker.coords}
                        title={marker.name}
                        description={marker.address}
                        key={index}
                    />
                ))}
            </MapView>
        </View>
    ) : (
            <View style={styles.container}>
                {
                    location
                        ? <View><Text>Lat: {location?.coords?.latitude}</Text><Text>Lon: {location?.coords?.longitude}</Text></View>
                        : null

                }
                {location ? <Button onPress={() => setViewMap(true)}>View on Map</Button> : <Button onPress={getLocation}>Check Location</Button>}
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});