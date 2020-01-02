import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Components/Dropdown.js';

import styled, { css } from 'styled-components';

const HeaderElem = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    font-family: ${props => props.theme.fonts.display};
`;

const RightSide = styled.span`
    display: flex;
    align-items: center;
    height: 100%;

    > span {
        height: 100%;
        > div {
            height: 33.333%;
        }
    }
`;

const StyledDropdown = styled(Dropdown)`
`;

const StyledNav = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }

    @media (max-width: 1000px)
    {
        width: 4rem;
        ul {
            width: 15rem;
            display: ${props => (props.visible ? 'flex' : 'none')};
            flex-direction: column;
            position: absolute;
            top: 5rem;
            background-color: ${props => props.theme.color.textColor};

            li {
                padding: 0.5rem 0 0.5rem 0.5rem;
            }
        }
    }
`;

const Hamburger = styled.div`
    display: none;

    @media (max-width: 1000px) {
        cursor: pointer;
        width: 4rem;
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        span {
            width: 2.25rem;
            height: 0.25rem;
            background-color: ${props => props.theme.color.textColor};
            color: ${props => props.theme.color.textColor};
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 1rem;
    color: ${props => props.theme.color.textColor};

    &:visited, &:active {
        color: ${props => props.theme.color.textColor};
    }
    &:hover {
        color: ${props => props.theme.color.highlight};
    }

    @media (max-width: 1000px) {
        color: ${props => props.theme.color.background};
        padding: 0;

        &:visited, &:active {
            color: ${props => props.theme.color.background};
        }
        &:hover {
            color: ${props => props.theme.color.highlight};
        }
    }
`;

const Header = (props) => {
    const [visibleNav, toggleNav] = useState(false);
    const toggle = () => {
        toggleNav(visibleNav => !visibleNav);
    }
    return(
        <HeaderElem>
            <Title>Keith B Smith</Title>
            <RightSide>
                <StyledNav visible={visibleNav}>
                    <Hamburger onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburger>
                    <ul>
                        <li><StyledLink to={'/'}>Home</StyledLink></li>
                        <li><StyledLink to={'/about'}>About</StyledLink></li>
                        <li><StyledLink to={'/code'}>Code</StyledLink></li>
                        <li><StyledLink to={'/games'}>Games</StyledLink></li>
                        <li><StyledLink to={'/contact'}>Contact</StyledLink></li>
                    </ul>
                </StyledNav>
                <span>
                    <StyledDropdown
                        title='Theme'
                        list={props.themes}
                        stateProp={props.colorTheme}
                        stateSetter={props.setTheme}
                    />
                    <StyledDropdown
                        title='Fonts'
                        list={props.fonts}
                        stateProp={props.family}
                        stateSetter={props.setFamily}
                    />
                    <StyledDropdown
                        title='Size'
                        list={props.sizes}
                        stateProp={props.fontSize}
                        stateSetter={props.setFontSize}
                    />
                </span>
            </RightSide>
        </HeaderElem>
    );
}

export default Header;