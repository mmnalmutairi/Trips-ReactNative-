import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';


const Location = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
    });

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )

}

export default Location;