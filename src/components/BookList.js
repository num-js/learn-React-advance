import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemContext';

const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <>
            <div style={{ color: theme.syntax, background: theme.bg }} className="book-list">
                <ul>
                    <li style={{ background: theme.ui }}>MD</li>
                    <li style={{ background: theme.ui }}>Numan</li>
                    <li style={{ background: theme.ui }}>Ahmed</li>
                    <li style={{ background: theme.ui }}>Num</li>
                    <li style={{ background: theme.ui }}>NumDev</li>
                </ul>
            </div>
        </>
    );
}

export default BookList;

