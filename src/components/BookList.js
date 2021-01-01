import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <>
                <div style={{color: theme.syntax, background: theme.bg}} className="book-list">
                    <ul>
                        <li style={{background: theme.ui}}>MD</li>
                        <li style={{background: theme.ui}}>Numan</li>
                        <li style={{background: theme.ui}}>Ahmed</li>
                        <li style={{background: theme.ui}}>Num</li>
                        <li style={{background: theme.ui}}>NumDev</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default BookList;
