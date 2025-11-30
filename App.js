import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ThemeProvider from './context/ThemeContext';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <NavigationContainer>
                    <StackNavigation />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
}
