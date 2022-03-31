import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Logo } from "./SVgComponent";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function UserProfile() {
    const [emailAddress, setEmailAddress] = useState(null);
    useEffect(
        () => {
            AsyncStorage.getItem("userInput")
                .then(data => {
                    const parsedData = JSON.parse(data);
                    setEmailAddress(parsedData.emailAddress)
                })
        }
        , [])
    return (
        <View style={styles.container}>
            <Logo />
            {emailAddress && <Text style={styles.userEmail}>{emailAddress}</Text>}
            <TouchableOpacity style={styles.signOutBtn}><Text style={styles.btnText}>Logout</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161D2F",
        flex: 1,
        paddingTop: 30,
        alignItems: "center"
    },
    signOutBtn: {
        backgroundColor: "#FC4747",
        width: "40%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    userEmail: {
        fontFamily: "Outfit-Medium",
        fontSize: 14,
        letterSpacing: 1.5,
        color: "white",
        marginTop: 10,
        marginBottom: 20,
    },
    btnText: {
        color: "white",
        fontFamily: "Outfit-Light",
        fontSize: 15,
        letterSpacing: 1.5,
    }
})

