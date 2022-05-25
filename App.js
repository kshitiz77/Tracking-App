import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: "",
    longitude: ""
  })
const {longitude, latitude} = currentLocation;
  useEffect(()=>{
    Geolocation.getCurrentPosition(info => setCurrentLocation({latitude:info.coords.latitude, longitude:info.coords.longitude}));
    Geolocation.watchPosition(info => console.log(info))
    })
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>latitude: {latitude}</Text>
      <Text style={styles.titleStyle}>longitude: {longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titleStyle:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:20
  }
})

export default App