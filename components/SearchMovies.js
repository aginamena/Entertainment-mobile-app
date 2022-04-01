import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
// import { movies } from "../assets/Movies";
import RecommendedMovies from "./RecommendedMovies";

export default function SearchMovies({ keyword, list }) {
    const matchedMovies = list.filter(movie => movie.title.toLowerCase().includes(keyword));
    return (
        <View>
            <Text style={styles.heading}>Found {matchedMovies.length} result(s) for "{keyword}"</Text>
            <ScrollView>

                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {

                        matchedMovies.map((movie, index) => <RecommendedMovies movie={movie} key={index} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: 'white',
        marginTop: 20,
        marginBottom: 10
    }
})