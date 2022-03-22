import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { BookmarkSvg, HomeSvg, Logo, MovieSvg, TvSvg } from './SVgComponent'



export default function CustomTab() {
    return (
        <View style={styles.container}>
            <View style={styles.innerTab}>
                <Logo />
                <View style={styles.innerTab2}>
                    <HomeSvg />
                    <MovieSvg />
                    <TvSvg />
                    <BookmarkSvg />
                </View>

                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: "#161D2F",
        paddingBottom: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
    innerTab: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    innerTab2: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%"
    }
})