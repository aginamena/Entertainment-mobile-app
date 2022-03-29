
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from 'react-native';
// import Login from './components/Login';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import SignUp from "./components/SignUp";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "./components/Home";
// import { Ionicons } from '@expo/vector-icons';
// import Tv from "./components/Tv";
// import Movies from "./components/Movies";
// import Bookmark from "./components/Bookmark";
// import { MaterialIcons } from '@expo/vector-icons';
// import Profile from "./components/UserProfile";
// import TabStack from "./components/TabStack";
import DrawerNavigator from "./components/DrawerNavigator";

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
