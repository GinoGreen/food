import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = (props) => {
   const [term, setTerm] = useState("");

   return (
      <View style={styles.searchScreenContainer}>
         <SearchBar 
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
         />
         <Text>Search Screen</Text>
         <Text>{term}</Text>
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