import React from "react";
import { Text, StyleSheet, View, TextInput, FlatList, Dimensions, ScrollView } from "react-native"

import { movies } from "../assets/Movies";
import RecommendedMovies from "./RecommendedMovies";

import { SearchSvg } from "./SVgComponent";
import TrendingMovies from "./TrendingMovies";

export default function Home() {
    const trendingMovies = 5;
    const recommendedMovies = 2;
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30 }}>
                <SearchSvg />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for movies or TV series"
                    placeholderTextColor="gray"
                />
            </View>
            <ScrollView style={{ marginLeft: 15 }}>
                <Text style={styles.heading}>Trending</Text>
                <ScrollView horizontal={true}>
                    <FlatList
                        data={movies.filter(movies => movies.isTrending)}
                        renderItem={({ item }) => <TrendingMovies movie={item} />}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={trendingMovies}
                    />
                </ScrollView>
                <ScrollView>
                    <Text style={styles.heading}>Recommended for you</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {
                            movies.filter(movies => !(movies.isTrending)).map((item, index) => <RecommendedMovies movie={item} key={index} />)
                        }
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10141E",
        paddingBottom: 20,
    },
    textInput: {
        width: "100%",
        marginLeft: 10,
        fontSize: 16,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: 'white',
        opacity: 0.5
    },
    heading: {
        fontSize: 20,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: 'white',
        marginTop: 20,
        marginBottom: 10
    }
})