import React from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children,...rest}) => {
    const user = useSelector((state)=> state.statesCounter.user);
    const isLoading = useSelector((state)=> state.statesCounter.isLoading);
    const location = useLocation(); 

    if(isLoading){
        return <div className="d-flex justify-content-center">
        <Spinner animation="border" />
       </div>
    }
    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} />;
      }
      return children;
};

export default PrivateRoute;