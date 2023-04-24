import { Outlet, Navigate } from 'react-router-dom';
import React from 'react'
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
    const {loggedIn,checkingStatus} = useAuthStatus();
    if(checkingStatus){
      return <Spinner/>
    }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-In" />;
}

export default PrivateRoute