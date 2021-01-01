import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        },
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemContextProvider;
