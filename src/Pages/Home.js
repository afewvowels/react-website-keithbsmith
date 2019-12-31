import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.main`
    display: grid;
    grid-template:
        'sidebar content' auto;
`;

const Sidebar = styled.aside`
    grid-area: sidebar;
`;

const Content = styled.section`
    grid-area: content;
`;

export default function Home() {
    return(
        <Wrapper>
            <Helmet>
                <title>Keith B Smith | Programmer | Home</title>
                <meta name='description' content='Home page of the Keith B. Smith website' />
            </Helmet>
            <Sidebar>
                <p>K</p>
                <p>Keith B. Smith</p>
                <p>p: <a href='tel:7244567677'>724-456-7677</a></p>
                <p>e: <a href='mailto:keithbsmith87@gmail.com'>keithbsmith87@gmail.com</a></p>
            </Sidebar>
            <Content>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
            </Content>
        </Wrapper>
    );
}