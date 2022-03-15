
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(
    () => {
      const getFont = async () => {
        await Font.loadAsync({
          "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
          "Outfit-Light": require("./assets/fonts/Outfit-Light.ttf")
        });
        setFontLoaded(true);
      }
      getFont();
    }
    , [fontLoaded])
  return (
    <View style={styles.container}>
      {
        !fontLoaded ? <LottieView source={require('./assets/AppLoading.json')} autoPlay loop />
          : <Login />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10141E",
  },
});
