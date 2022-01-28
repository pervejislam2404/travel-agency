import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '../slider/Slider';
import Blogs from '../blogs/Blogs';

const Home = () => {
    const location = useLocation();
    document.title=`travel agency -home`;
    return (
        <div>
            <Slider/>
            <Blogs/>
        </div>
    );
};

export default Home;