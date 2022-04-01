import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native"
import { movies } from "../assets/Movies";
import RecommendedMovies from "./RecommendedMovies";
import SearchMovies from "./SearchMovies";
import { SearchSvg } from "./SVgComponent";


export default function Tv() {
    const [searchText, setSearchText] = useState("")
    const TvCategory = movies.filter(movies => movies.category === "TV Series");
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30 }}>
                <SearchSvg />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for movies or TV series"
                    placeholderTextColor="gray"
                    onChangeText={input => setSearchText(input)}
                />
            </View>
            {
                searchText ? <View style={{ marginLeft: 15 }}><SearchMovies keyword={searchText} list={TvCategory} /></View>
                    :
                    <>
                        <Text style={styles.heading}>TV Series</Text>
                        <ScrollView style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {
                                    TvCategory.map((item, index) => <RecommendedMovies movie={item} key={index} />)
                                }
                            </View>
                        </ScrollView>
                    </>
            }


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10141E",
        paddingBottom: 20
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
        marginBottom: 10,
        marginLeft: 15
    }
})