import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemContext';
import './Navbar.css';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <>
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <label class="switch">
                        <input type="checkbox" defaultChecked={theme===light ? true : false} />
                        <span class="slider round"></span>
                    </label>
                    <h1><u>Context App</u></h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </>
        );
    }
}
export default Navbar;