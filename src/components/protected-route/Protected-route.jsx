import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element, onlyAuth= false }) => {

    const { authenticated } = useSelector(state => state.authUserData)
 

    if(onlyAuth) return  (authenticated ? element : <Navigate to={'/login'} replace />)

    return  (authenticated ?<Navigate to={'/'} replace /> : element)
} 