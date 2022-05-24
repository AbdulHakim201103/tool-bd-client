import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <button className="btn flex mx-auto justify-center items-center h-screen  bg-white text-red-500 border-0 loading">loading</button>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      };
    return children;
};

export default RequireAuth;