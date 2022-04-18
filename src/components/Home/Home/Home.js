import React from 'react';
import Banner from '../Banner/Banner';
import QuestionAns from '../QuestionAns/QuestionAns';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <QuestionAns></QuestionAns>

        </div>
    );
};

export default Home;