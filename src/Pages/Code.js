import React from 'react';
import { Helmet } from 'react-helmet';

export default function Code() {
    return(
        <main>
            <Helmet>
                <title>Keith B Smith | Programmer | Code</title>
                <meta name='description' content='Code examples page of the Keith B. Smith website' />
            </Helmet>
            <h1>Code</h1>
            <h2>Check me out on <a href="https://github.com/afewvowels" target="_blank">Github</a>!</h2>
        </main>
    );
}