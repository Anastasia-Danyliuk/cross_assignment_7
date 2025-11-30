import React, {useContext} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { ThemeContext } from "../context/ThemeContext";


export default function LibraryScreen() {

    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    const handlePress = () => {
        console.log("Pressed");
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileBlock}>
                <Image
                    style={styles.profilImg}
                    source={require('../assets/Profile.png')}
                />
                <Text style={[styles.name, { color: isDark ? '#fff' : '#1F2024' }]}>
                    Anna Lindemann
                </Text>

                <Text style={[styles.id, { color: isDark ? '#ccc' : '#71727A' }]}>
                    @lindemaaaan87
                </Text>
            </View>

            <View style={styles.settingsBlock}>
                <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
                    <Text style={{color: isDark ? '#fff' : '#1F2024'}}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
                    <Text style={{color: isDark ? '#fff' : '#1F2024'}}>Appearance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
                    <Text style={{color: isDark ? '#fff' : '#1F2024'}}>Language</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
                    <Text style={{color: isDark ? '#fff' : '#1F2024'}}>Privacy & Security</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
                    <Text style={{color: isDark ? '#fff' : '#1F2024'}}>Log Out</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 9,
        paddingHorizontal: 20
    },

    profileBlock: {
        alignItems: 'center',
        marginBottom: 40
    },

    profilImg:{
        width: 81.5,
        height: 82,
    },
    name:{
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 16,
        color: '#1F2024',
        marginTop: 10,
    },
    id:{
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        color: '#71727A',
    },

    settingsBlock: {
        alignItems: "flex-start",
        gap: 20,
        paddingLeft: 32,
    },

    settingItem: {
        fontSize: 16,
        color: '#1F2024',
        width: 283,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#D4D6DD',
    }
});