import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

// export const sliderWidth = Dimensions.get("window").width + 80;
export const itemWidth = Math.round(sliderWidth * 0.7)

export default function TrendingMovies({ item, index }) {

    return (
        // <View>
        //     <Text style={{ color: "white" }}>Movie goes here</Text>
        //     <Image
        //         source={movie.thumbnail.trending.small}

        //         style={{ width: 260, height: 140 }}
        //     />
        // </View>
        <View key={index} style={styles.container}>
            <Image
                source={{ uri: item }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: itemWidth,
    },
    image: {
        width: itemWidth,
        height: 250,
    }
})