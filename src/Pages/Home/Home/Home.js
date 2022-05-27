import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Tools from '../Tools/Tools';
import Footer from '../../Home/Footer/Footer';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';
import Extar from '../Extar/Extar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <About></About>
            <Extar></Extar>
            <Footer></Footer>
        </div>
    );
};

export default Home;