import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';



const About = ()=>{

    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    
      const customMarker = {
        latitude: 37.78825,
        longitude: -122.4324,
        title: 'Custom Marker',
        description: 'This is a custom marker',
      };
    return(
        <>
        <View style={styles.container} >
            <MapView style={styles.map} initialRegion={region}>
                <Marker coordinate={{latitude : customMarker.latitude , longitude:customMarker.longitude}} title={customMarker.title} description={customMarker.description}/>
            </MapView>

        </View>
        </>
    )
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});