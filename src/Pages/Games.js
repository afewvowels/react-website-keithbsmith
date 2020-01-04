import React from 'react';
import { Helmet } from 'react-helmet';

export default function Games() {
    return(
        <main>
            <Helmet>
                <title>Keith B Smith | Programmer | Games</title>
                <meta name='description' content='Games page of the Keith B. Smith website' />
            </Helmet>
            <h1><a href="https://keithbsmith.me/ysu/games/" target="_blank">Games</a></h1>
        </main>
    );
}