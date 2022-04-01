import React, { useEffect, useState, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppState } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";


export default function LoginStack({ isActive }) {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }} >
                {(props) => <Login {...props} loginUser={() => isActive()} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" options={{ headerShown: false }}>
                {(props) => <SignUp {...props} loginUser={() => isActive()} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}