import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ element, ...rest }) {
    const { currentUser } = useAuth(); // Custom hook to access authentication state
    return currentUser ? <Route {...rest} element={element} /> : <Navigate to="/signin" replace />;
}

export default PrivateRoute;
