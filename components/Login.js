import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { SvgUri } from 'react-native-svg';
import Svg from "../assets/logo.svg"

export default function Login() {

    return (
        <View style={styles.container}>
            <View>
                {/* <SvgUri width="100" height="100" source={require('../assets/icon-play.svg')} /> */}
                <Svg width={50} height={50} />
            </View>

            <View style={styles.loginContainer}>
                <Text>Login</Text>
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
        alignItems: "center"
    },
    loginContainer: {
        backgroundColor: "#161D2F",
        height: 365,
        width: "90%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})