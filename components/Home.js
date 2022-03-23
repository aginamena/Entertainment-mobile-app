import React, { useRef } from "react";
import { Text, StyleSheet, View, TextInput, FlatList, Dimensions } from "react-native"
// import Movies from "../assets/data.json"
import { movies } from "../assets/Movies";
// import CarouselItem, { sliderWidth } from "./CarouselItem";
import { SearchSvg } from "./SVgComponent";
import TrendingMovies from "./TrendingMovies";
import Carousel from "react-native-snap-carousel";

// const trending = movies.filter(movie => movie.isTrending)
// console.log("----------------------------------------------------------")
// console.log(trending);
// console.log(movies);
export default function Home() {
    const trendingMovies = 5;
    const isCarousel = useRef(null)
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
                <SearchSvg />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for movies or TV series"
                    placeholderTextColor="gray"
                />
            </View>
            {/* <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={movies.filter(movies => movies.isTrending)}
                    renderItem={({ item }) => <TrendingMovies movie={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={trendingMovies}
                />
            </View> */}
            <Carousel
                layout={'default'}
                ref={isCarousel}
                data={movies.filter(movies => movies.isTrending)}
                renderItem={TrendingMovies}
                sliderWidth={Dimensions.get("window").width + 80}
                itemWidth={Math.round(sliderWidth * 0.7)}
            />

            {/* <TextInput
                style={styles.textInput}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10141E",
    },
    textInput: {
        width: "100%",
        marginLeft: 10,
        color: "white",
        fontSize: 16,
        fontFamily: "Outfit-Light",
        letterSpacing: 1.5,
        color: 'white',
        opacity: 0.5
    }
})