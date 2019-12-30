import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import defaultTheme from '../Themes/Colors/default.js';
import lightTheme from '../Themes/Colors/light.js';
import darkTheme from '../Themes/Colors/dark.js';

import defaultFonts from '../Themes/Fonts/defaultFonts.js';
import serifFonts from '../Themes/Fonts/serifFonts.js';
import sansFonts from '../Themes/Fonts/sansFonts.js';
import monoFonts from '../Themes/Fonts/monoFonts.js';

import defaultSize from '../Themes/Size/defaultSize.js';
import smallSize from '../Themes/Size/smallSize.js';
import largeSize from '../Themes/Size/largeSize.js';
import xlSize from '../Themes/Size/xlSize.js';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import Home from './Home.js';
import Games from './Games.js';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Bungee|IBM+Plex+Mono&display=swap');

    body, html {
        cursor: default;
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fonts.body};
        background-color: ${props => props.theme.color.background};
        color: ${props => props.theme.color.textColor};
        font-size: ${props => props.theme.size.body};
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template:
            'header' 5rem
            'content' auto
            'footer' 4rem;
    }
`;

const customHistory = createBrowserHistory();

export default function Layout() {
    const themes = [
        {
            id: 0,
            title: 'Default',
            selected: false,
            call: 'defaultTheme'
        },
        {
            id: 1,
            title: 'Dark',
            selected: false,
            call: 'darkTheme'
        },
        {
            id: 2,
            title: 'Light',
            selected: false,
            call: 'lightTheme'
        }
    ];
    const [colorTheme, setTheme] = useState('defaultTheme');
    const getColorTheme = () => {
        switch (colorTheme) {
            default:
            case 'defaultTheme':
                return defaultTheme;
            case 'darkTheme':
                return darkTheme;
            case 'lightTheme':
                return lightTheme;
        };
    };

    const fonts = [
        {
            id: 0,
            title: 'Default',
            selected: false,
            call: 'defaultFonts'
        },
        {
            id: 1,
            title: 'Serif',
            selected: false,
            call: 'serifFonts'
        },
        {
            id: 2,
            title: 'Sans-Serif',
            selected: false,
            call: 'sansFonts'
        },
        {
            id: 3,
            title: 'Monospace',
            selected: false,
            call: 'monoFonts'
        }
    ];
    const [fontFamily, setFontFamily] = useState('defaultFonts');
    const getFontFamily = () => {
        switch (fontFamily) {
            default:
            case 'defaultFonts':
                return defaultFonts;
            case 'serifFonts':
                return serifFonts;
            case 'sansFonts':
                return sansFonts;
            case 'monoFonts':
                return monoFonts;
        };
    };

    const sizes = [
        {
            id: 0,
            title: 'Small',
            selected: false,
            call: 'smallSize'
        },
        {
            id: 1,
            title: 'Default',
            selected: false,
            call: 'defaultSize'
        },
        {
            id: 2,
            title: 'Large',
            selected: false,
            call: 'largeSize'
        },
        {
            id: 3,
            title: 'X-Large',
            selected: false,
            call: 'xlSize'
        }
    ];
    const [fontSize, setFontSize] = useState('defaultSize');
    const getFontSize = () => {
        switch (fontSize) {
            case 'smallSize':
                return smallSize;
            default:
            case 'defaultSize':
                return defaultSize;
            case 'largeSize':
                return largeSize;
            case 'xlSize':
                return xlSize;
        }
    }

    const themeObject = {
        color: getColorTheme(),
        fonts: getFontFamily(),
        size: getFontSize()
    };

    return(
        <Router history={customHistory}>
            <ThemeProvider theme={themeObject}>
                <GlobalStyles />
                <Header
                    themes={themes}
                    colorTheme={colorTheme}
                    setTheme={setTheme}
                    fonts={fonts}
                    family={fontFamily}
                    setFamily={setFontFamily}
                    sizes={sizes}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                />
                <Route exact path='/' component={Home} />
                <Route path='/games' component={Games} />
                <Footer />
            </ThemeProvider>
        </Router>
    );
}