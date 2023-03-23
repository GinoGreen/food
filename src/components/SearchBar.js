import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
   return (
      <View style={styles.searchBarStyle}>
         <Feather style={styles.iconStyle} name="search" size={35} color="black" />
         <TextInput
            style={styles.inputStyle} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   searchBarStyle: {
      flexDirection: "row",
      // alignItems: "center",
      backgroundColor: "#F0EEEE", // F0EEEE
      height: 50,
      borderRadius: 5
   },
   inputStyle: {
      flex: 1,
      fontSize: 18
   },
   iconStyle: {
      alignSelf: "center",
      marginHorizontal: 15
   }
});

export default SearchBar;
