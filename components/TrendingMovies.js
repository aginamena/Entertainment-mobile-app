import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default function TrendingMovies({ movie }) {

    return (
        <View style={{ paddingRight: 15 }}>
            <Text style={{ color: "white" }}>Movie goes here</Text>
            <Image
                source={movie.thumbnail.trending.small}

                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 240,
        height: 140,
        resizeMode: "contain",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})