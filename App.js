
import React, { useEffect, useState, useRef } from "react"
import { StyleSheet, View, Text, AppState } from 'react-native';
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
  // const appState = useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(
    () => {
      // const getFont = async () => {
      //   await Font.loadAsync({
      //     "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
      //     "Outfit-Light": require("./assets/fonts/Outfit-Light.ttf")
      //   });

      //   setFontLoaded(true);
      //   // const appStateListener = AppState.addEventListener(
      //   //   'change',
      //   //   nextAppState => {
      //   //     if (nextAppState === 'background')
      //   //       console.log("you have gone to background")
      //   //     else console.log("you are still in the app")
      //   //     // console.log('Next AppState is: ', nextAppState);
      //   //     setAppStateVisible(nextAppState);
      //   //   },
      //   // );
      // }
      // getFont();
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
    // <View style={styles.container}>
    //   <Text style={{ color: "white", marginTop: 50 }}>Current state is: {appStateVisible}</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10141E",
  },
});
