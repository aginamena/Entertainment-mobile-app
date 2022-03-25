
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import Tv from "./components/Tv";
import Movies from "./components/Movies";
import Bookmark from "./components/Bookmark";
import { MaterialIcons } from '@expo/vector-icons';
import Profile from "./components/Profile";

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

  // AsyncStorage.removeItem("userInput")
  //   .then(data => console.log(data))
  // AsyncStorage.getItem("userInput").
  //   then(data => console.log(data))
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
                // <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
                //   <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                // </Tab.Navigator>

                <Tab.Navigator
                  barStyle={{ backgroundColor: "green" }}
                  screenOptions={({ route }) => ({
                    tabBarStyle: {
                      backgroundColor: '#161D2F',
                    },
                    tabBarIcon: ({ color, size }) => {
                      if (route.name === 'Home') {
                        return <Ionicons name={"home"} size={size} color={color} />;
                      }
                      else if (route.name === 'Tv') {
                        return <Ionicons name={"tv"} size={size} color={color} />;
                      }
                      else if (route.name === 'Movies') {
                        return <MaterialIcons name="local-movies" size={size} color={color} />
                      }
                      else if (route.name === 'Profile') {
                        return <MaterialIcons name="person" size={size} color={color} />
                      }
                      else {
                        return <Ionicons name="bookmark" size={24} color={color} />
                      }
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: '#5A698F',

                  })}
                >
                  <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  <Tab.Screen name="Movies" component={Movies} options={{ headerShown: false }} />
                  <Tab.Screen name="Tv" component={Tv} options={{ headerShown: false }} />
                  <Tab.Screen name="Bookmark" component={Bookmark} options={{ headerShown: false }} />
                  <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
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
