import React, {useContext} from 'react';
import { View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';
import { ThemeContext } from "../context/ThemeContext";

export default function SearchScreen({ navigation }) {

    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const styles = StyleSheet.create({
        searchBar: {
            marginLeft: 30,
            marginTop:10,
        }
    });

    return (
        <View style={{ flex: 1, backgroundColor: isDark ? "#444444" : "#fff" }}>
            <SearchBar
                style={styles.searchBar}
                disabledInput={false}
            />
        </View>
    );
}
