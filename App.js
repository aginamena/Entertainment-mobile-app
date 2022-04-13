
import React, { useEffect, useState, useRef } from "react"
import { StyleSheet, View, Text, AppState } from 'react-native';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./components/DrawerNavigator";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(
    () => {
      Font.loadAsync({
        "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
        "Outfit-Light": require("./assets/fonts/Outfit-Light.ttf")
      })
        .then(() => setFontLoaded(true))
    }
    , [])

  return (

    fontLoaded ?
      <NavigationContainer >
        <DrawerNavigator />
      </NavigationContainer> :
      <View style={styles.container}>
        <LottieView source={require('./assets/AppLoading.json')} autoPlay loop />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10141E",
  },
});
