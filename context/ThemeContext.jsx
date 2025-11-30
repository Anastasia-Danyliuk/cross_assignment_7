import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    handleThemeChange: () => {},
});

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        console.log('handleThemeChange called, previous theme =', theme);
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
}
