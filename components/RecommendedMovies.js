import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { BookmarkEmptySvg, BookmarkFullSvg, MovieCategorySvg } from "./SVgComponent";


export default function RecommendedMovies({ movie }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={movie.thumbnail.regular.small} style={{ width: "100%", marginBottom: 8, height: 140, }}>
                <View style={styles.images} />
            </ImageBackground>
            <View style={styles.fullBookmark}>
                {
                    movie.isBookmarked ? <BookmarkFullSvg /> : <BookmarkEmptySvg />
                }
            </View>
            <View style={{ flexDirection: "row", marginBottom: 4, alignItems: 'center' }}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        width: "50%",
        position: "relative",
        marginTop: 16,
    },
    images: {
        width: 240,
        height: 140,
        resizeMode: "contain",
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    fullBookmark: {
        backgroundColor: "#10141E",
        width: 32,
        height: 32,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 25,
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
        fontSize: 14,
        color: 'white',
        fontWeight: "bold"
    }
})