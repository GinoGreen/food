import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";


const SearchScreen = (props) => {
   const [term, setTerm] = useState("");
   const [searchApi, results, errorMessage] = useResults();

   return (
      <View style={styles.searchScreenContainer}>
         <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {
            errorMessage
            ? <Text>{errorMessage}</Text>
            : null
         }
         <Text>We have found {results.length} results</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   searchScreenContainer: {
      padding: 15,
      backgroundColor: "white"
   }
});

export default SearchScreen;
