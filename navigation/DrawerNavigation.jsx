import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabNavigator';
import SupportScreen from '../screens/SupportScreen';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="Support" component={SupportScreen}  options={{headerShown: true, title: "Support"}}/>
        </Drawer.Navigator>
    );
}
