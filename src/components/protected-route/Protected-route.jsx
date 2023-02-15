import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element, onlyAuth= false }) => {

    const { loginAuthenticated } = useSelector(state => state.signInUser)
    const { registerAuthenticated } = useSelector(state => state.signUpUser)

    const isAuth = loginAuthenticated || registerAuthenticated
    if(onlyAuth) return  (isAuth ? element : <Navigate to={'/login'} replace />)

    return  (isAuth ?<Navigate to={'/'} replace /> : element)
} 