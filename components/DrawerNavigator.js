import React, { useRef, useState, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from "./TabStack";
import UserProfile from "./UserProfile";
import LoginStack from "./LoginStack";
import { AppState } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(
        () => {
            const appStateListener = AppState.addEventListener(
                'change',
                nextAppState => {
                    if (nextAppState === 'background') {
                        setIsLoggedIn(false);
                    }
                    setAppStateVisible(nextAppState);
                },
            );
            return () => {
                appStateListener?.remove();
            };
        }
        , [])

    return (

        !(isLoggedIn) ? <LoginStack isActive={() => setIsLoggedIn(true)} /> :
            <Drawer.Navigator drawerContent={props => <UserProfile {...props} logout={() => setIsLoggedIn(false)} />}>
                <Drawer.Screen name="Tabs" component={TabStack} options={{ headerShown: false }} />
            </Drawer.Navigator>


    )
}