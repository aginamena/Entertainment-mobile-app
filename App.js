
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./components/SignUp";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./components/Home";
import CustomTab from "./components/CustomTab";


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
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
            {
              isLoggedIn ?
                <Stack.Navigator>
                  <Stack.Screen name="Login" options={{ headerShown: false }} >
                    {(props) => <Login {...props} loginUser={() => setIsLoggedIn(true)} />}
                  </Stack.Screen>
                  <Stack.Screen name="SignUp" options={{ headerShown: false }}>
                    {(props) => <SignUp {...props} loginUser={() => setIsLoggedIn(true)} />}
                  </Stack.Screen>
                </Stack.Navigator> :
                <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
                  <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                </Tab.Navigator>
            }
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
