import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import SvgComponent from "./SVgComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props, { navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(props)
    async function login() {
        if (password.length > 0 && email.length > 0) {
            const userDetails = await AsyncStorage.getItem('userInput');
            if (userDetails == null) {
                alert("Invalid input")
            }

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <SvgComponent />
            </View>

            <View style={styles.loginContainer}>
                <View style={{ width: "90%" }}>
                    <Text style={styles.login}>Login</Text>
                    <TextInput
                        style={styles.inputFields}
                        placeholder="Email address"
                        placeholderTextColor="white"
                        onChangeText={inputEmail => setEmail(inputEmail)}
                    />
                    <TextInput
                        style={[styles.inputFields, { marginTop: 24 }]}
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={inputPassword => setPassword(inputPassword)}
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => login()}>
                        <Text style={styles.btnText}>Login to your account</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text style={{ color: "white", fontFamily: "Outfit-Light", letterSpacing: 1.5 }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push("SignUp")}><Text style={styles.signUpText}>Sign Up</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10141E",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    loginContainer: {
        backgroundColor: "#161D2F",
        height: 365,
        width: "90%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    logoContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: 50
    },
    login: {
        fontFamily: "Outfit-Medium",
        color: "white",
        fontSize: 32,
        marginTop: 24,
        marginBottom: 40,
        letterSpacing: 1.5
    },
    inputFields: {
        height: 40,
        letterSpacing: 1.5,
        borderBottomWidth: 1,
        paddingLeft: 16,
        borderBottomColor: "#F2F2F2",
        fontFamily: 'Outfit-Light',
        fontSize: 15,
        textAlignVertical: "top",
        opacity: 0.5,
        color: "white",
        fontFamily: "Outfit-Light"
    },
    btn: {
        height: 48,
        backgroundColor: "#FC4747",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    btnText: {
        color: "white",
        fontFamily: "Outfit-Light",
        fontSize: 15,
        letterSpacing: 1.5
    },
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24
    },
    signUpText: {
        marginLeft: 9,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: "#FC4747"
    }
})