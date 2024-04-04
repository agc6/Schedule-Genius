import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            element={
                user ? <Component /> : <Navigate to="/signin" replace />
            }
        />
    );
};

export default ProtectedRoute;
