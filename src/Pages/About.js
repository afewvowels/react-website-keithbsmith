import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
    return(
        <main>
            <Helmet>
                <title>Keith B Smith | Programmer | About</title>
                <meta name='description' content='About page of the Keith B. Smith website' />
            </Helmet>
            <h1>About</h1>
        </main>
    );
}