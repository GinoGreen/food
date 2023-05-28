import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
   return (
      <View>
         <Text style={styles.title}>{title}</Text>
         <FlatList 
            horizontal={true}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: item.id})}>
                     <ResultsDetail result={item} />
                  </TouchableOpacity>
               )
            }}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5
   }
});

export default withNavigation(ResultsList);
