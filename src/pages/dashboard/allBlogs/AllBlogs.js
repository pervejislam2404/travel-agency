import React from 'react';
import { useLocation } from 'react-router-dom';

const AllBlogs = () => {
    const location = useLocation();
   document.title=`travel agency -${location.pathname}`; 
    return (
        <div>
            this is all blogs
        </div>
    );
};

export default AllBlogs;