import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Profile from '../components/Profile';

export default function ProfileScreen() {
    const ctx = useContext(ThemeContext);

    if (!ctx) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
                <Text style={{ color: '#444444' }}>ThemeContext не знайдено</Text>
            </SafeAreaView>
        );
    }

    const { theme, handleThemeChange } = ctx;
    const backgroundColor = theme === 'light' ? '#ffffff' : '#444444';
    const textColor = theme === 'light' ? '#444444' : '#ffffff';

    const onPressChange = () => {
        if (typeof handleThemeChange === 'function') handleThemeChange();
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <Profile />
            <View style={styles.controls}>
                <Text style={[styles.text, { color: textColor }]}>Current theme: {theme}</Text>
                <Button title="Change Theme" onPress={onPressChange} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    controls: {
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginBottom: 12
    },
});
