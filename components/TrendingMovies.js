import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { BookmarkEmptySvg, BookmarkFullSvg, MovieCategorySvg } from "./SVgComponent";
import { Entypo } from '@expo/vector-icons';

export default function TrendingMovies({ movie }) {

    return (
        <View style={{ position: "relative", marginRight: 15 }}>
            <ImageBackground source={movie.thumbnail.trending.small} style={{ width: 240, height: 140 }}>
                <View style={styles.image} />
            </ImageBackground>
            <View style={styles.emtpyBookmark}>
                <BookmarkEmptySvg />
            </View>
            <View style={{ position: "absolute", bottom: 20, left: 10 }}>
                <View style={{ flexDirection: "row", marginBottom: 5, alignItems: 'center' }}>
                    <Text style={styles.textStyling}>{movie.year}</Text>
                    <Entypo name="dot-single" size={24} color="#979797" />
                    <MovieCategorySvg />
                    <Text style={styles.textStyling}> {movie.category}</Text>
                    <Entypo name="dot-single" size={24} color="#979797" />
                    <Text style={styles.textStyling}>{movie.rating}</Text>
                </View>
                <View>
                    <Text style={styles.title}>{movie.title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 240,
        height: 140,
        resizeMode: "contain",
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    emtpyBookmark: {
        backgroundColor: "#979797",
        width: 32,
        height: 32,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 10,
        top: 10
    },
    textStyling: {
        fontSize: 12,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: 'white',
        opacity: 0.5
    },
    title: {
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        fontSize: 15,
        color: 'white'
    }
})