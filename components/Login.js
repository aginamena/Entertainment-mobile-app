import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import SvgComponent from "./SVgComponent";

export default function Login() {

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

                    />
                    <TextInput
                        style={[styles.inputFields, { marginTop: 24 }]}
                        placeholder="Password"
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Login to your account</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity><Text>Signup</Text></TouchableOpacity>
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
        // backgroundColor:"w"
        justifyContent: "center",
        alignItems: "center",
        position: "relative",

        // alignItems: "center"
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
        // margin: 12,
        borderBottomWidth: 1,
        paddingLeft: 16,
        borderBottomColor: "#F2F2F2",
        fontFamily: 'Outfit-Light',
        fontSize: 15,
        // paddingBottom: 10,
        textAlignVertical: "top",
        // marginTop: 40,
        opacity: 0.5,
        color: "white",
        fontFamily: "Outfit-Light"
    },
    password: {
        // marginTop:
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
    }
})