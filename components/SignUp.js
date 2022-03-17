import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import SvgComponent from "./SVgComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp({ navigation }) {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    async function SignUp() {
        if (emailAddress.length > 0 && password.length > 0 && repeatPassword.length > 0) {
            await AsyncStorage.setItem("userInput", JSON.stringify({ emailAddress, password, repeatPassword }))
        } else alert("Invalid input")

    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <SvgComponent />
            </View>

            <View style={styles.SignUpContainer}>
                <View style={{ width: "90%" }}>
                    <Text style={styles.SignUp}>Sign Up</Text>
                    <TextInput
                        style={styles.inputFields}
                        placeholder="Email address"
                        placeholderTextColor="white"
                        onChangeText={inputAddress => setEmailAddress(inputAddress)}

                    />
                    <TextInput
                        style={[styles.inputFields, { marginTop: 24 }]}
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={inputPassword => setPassword(inputPassword)}
                    />
                    <TextInput
                        style={[styles.inputFields, { marginTop: 24 }]}
                        placeholder="Repeat Password"
                        placeholderTextColor="white"
                        onChangeText={inputRepeatPassword => setRepeatPassword(inputRepeatPassword)}
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => SignUp()}>
                        <Text style={styles.btnText}>Create an account</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text style={{ color: "white", fontFamily: "Outfit-Light", letterSpacing: 1.5 }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push("Login")}><Text style={styles.LoginText}>Login</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10141E",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    SignUpContainer: {
        backgroundColor: "#161D2F",
        height: 420,
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
    SignUp: {
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
    LoginText: {
        marginLeft: 9,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: "#FC4747"
    }
})