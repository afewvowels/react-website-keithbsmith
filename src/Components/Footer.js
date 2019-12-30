import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Footer() {
    return(
        <StyledFooter>
            <h6>&copy;2019 Keith B Smith</h6>
        </StyledFooter>
    );
}

export default Footer;