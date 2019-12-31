import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Footer() {
    return(
        <StyledFooter>
            <h6>&copy;2020 Keith B Smith</h6>
        </StyledFooter>
    );
}