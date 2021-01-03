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
                    <label className="switch">
                        <input type="checkbox" onClick={this.context.toggleTheme} defaultChecked={theme===light ? false : true} />
                        <span className="slider round"></span>
                    </label>
                    <br />
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