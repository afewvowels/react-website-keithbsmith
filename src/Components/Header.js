import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Components/Dropdown.js';

import styled from 'styled-components';

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
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
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
`;


const Header = (props) => {

    return(
        <HeaderElem>
            <Title>Keith B Smith</Title>
            <RightSide>
                <StyledNav>
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