import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='flex justify-center my-6'> <span className="loading loading-spinner text-primary "></span></div>
    }
    if(user){
        return children
    }
return <Navigate to='/login' state={location.pathname} replace ={true}></Navigate>
};

export default PrivateRoute;