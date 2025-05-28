import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const home = useLoaderData();
    console.log(home);
    return (
        <div>
            <Banner></Banner>
            <Books home={home}></Books>
        </div>
    );
};

export default Home;