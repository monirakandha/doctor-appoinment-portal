import React from 'react';
import Hero from '../Hero/Hero';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Hero></Hero>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;