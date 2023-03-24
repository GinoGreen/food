import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";


const SearchScreen = (props) => {
   const [term, setTerm] = useState("");
   const [searchApi, results, errorMessage] = useResults();

   const filterResultsByPrice = (price) => {
      // price === "$" || "$$" || "$$$"
      console.log(results);
      return results.filter(result => {
         return result.price === price;
      });
   }

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
         <ScrollView>
            <ResultsList 
               title="Cost Effective"
               results={filterResultsByPrice("$")}
            />
            <ResultsList 
               title="Bit Pricier"
               results={filterResultsByPrice("$$")}
            />
            <ResultsList 
               title="Big Spender"
               results={filterResultsByPrice("$$$")}
            />
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   searchScreenContainer: {
      padding: 15,
      backgroundColor: "white",
      flex: 1 //FULL SCROLL DOWN ANDROID
   }
});

export default SearchScreen;
