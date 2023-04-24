import { Outlet, Navigate } from 'react-router-dom';
import React from 'react'
import {useAuthStatus} from '../hooks/useAuthStatus';

const PrivateRoute = () => {
    const {loggedIn,checkingStatus} = useAuthStatus();
    if(checkingStatus){
      return <h3>loading</h3>
    }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-In" />;
}

export default PrivateRoute