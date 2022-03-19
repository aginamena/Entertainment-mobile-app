
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./components/SignUp";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./components/Home";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const Stack = createNativeStackNavigator();
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
          :
          <NavigationContainer>
            <Stack.Navigator>
              {
                !isLoggedIn ?
                  <>
                    <Stack.Screen name="Login" options={{ headerShown: true }} >
                      {(props) => <Login {...props} loginUser={() => setIsLoggedIn(true)} />}
                    </Stack.Screen>
                    {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} isLoggedIn={() => setIsLoggedIn(true)} /> */}
                    <Stack.Screen name="SignUp" options={{ headerShown: true }}>
                      {(props) => <SignUp {...props} loginUser={() => setIsLoggedIn(true)} />}
                    </Stack.Screen>
                    {/* <Stack.Screen  component={SignUp}  isLoggedIn={() => setIsLoggedIn(true)} /> */}
                  </> :
                  <>
                    <Stack.Screen name="Home" component={Home} />
                  </>
              }
            </Stack.Navigator>

          </NavigationContainer>
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
