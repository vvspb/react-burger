import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ element, onlyUnAuth= false }) => {

    const { authenticated } = useSelector(state => state.authUserData);
    const userName = useSelector(state => state.authUserData.userData.name);
    const location = useLocation();

    if(!authenticated) return null;

    if (onlyUnAuth && userName) {
       return <Navigate to={'/'} replace  />
    }

    if (!onlyUnAuth && !userName) {
        return <Navigate to="/login" state={{ from: location }} />;
    }


    return  element
} 