import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../context/ThemeContext";


export default function SupportScreen({ navigation }) {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";
    return (
        <View style={[styles.container, { backgroundColor: isDark ? "#444444" : "#fff" }]}>
            <TouchableOpacity style={[styles.backButton, { backgroundColor: isDark ? "#222" : "#eee" }]}
                              onPress={() => navigation.goBack()} >
                <Text style={[styles.backText, { color: isDark ? "#fff" : "#444444" }]}>
                    Main Page
                </Text>
            </TouchableOpacity>
            <Text style={[styles.title, { color: isDark ? "#fff" : "#444444" }]}>Support</Text>
            <Text style={[styles.subtitle, { color: isDark ? "#ccc" : "#555" }]}>
                If you have any issues, please contact us.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backText: {
        fontSize: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#555',
    },
});