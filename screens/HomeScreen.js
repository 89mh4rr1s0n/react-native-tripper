import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.imgur.com/gQ9xkO9.png"
          }}
        />

        <GooglePlacesAutocomplete
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          placeholder='Where From?'
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          androidGooglePlacesApiKey={GOOGLE_MAPS_APIKEY}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}

          requestUrl={{
            useOnPlatform: 'web', // or "all"
            url:
              'https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
            // headers: {
            //   Authorization: `an auth token`, // if required for your proxy
            // },
          }}
        />

        <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "lightblue"
  },
  image: {
    marginLeft: 20,
    height: 100,
    width: 300,
    resizeMode: 'contain',
    zIndex: 4,
    // backgroundColor: 'white'
  }
})