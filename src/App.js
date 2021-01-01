import React, { Component } from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import './App.css';
import ThemeContextProvider from './contexts/ThemContext';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>
                    <Navbar />
                    <BookList />
                </ThemeContextProvider>
            </div>
        );
    }
}

export default App;