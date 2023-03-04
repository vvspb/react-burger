import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { makeHasErrorDefault } from '../../services/actions/auth-action';
import styles from '../../pages/login-page/login-page.module.css'
import { FC } from 'react';
import { IAuthReducer } from '../../services/reducers/auth-reducer';

interface IProtectedRouteProps {
    element: JSX.Element;
    onlyUnAuth?: boolean;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ element, onlyUnAuth = false }: IProtectedRouteProps): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { authenticated } = useSelector((state: {authUserData: IAuthReducer}) => state.authUserData);
    const userName = useSelector((state: {authUserData: IAuthReducer}) => state.authUserData.userData.name);
    const hasError = useSelector((state: {authUserData: IAuthReducer}) => state.authUserData.hasError)
    const location = useLocation();

    const handleClickYet = () => {
        dispatch(makeHasErrorDefault())
        navigate('/login')
    }

    if (!authenticated) {
        return ( <main className={styles.mainLoginPage}>
            {hasError ? (
                <>
                    <p className='text text_type_main-medium mb-6'>Пользователь не найден. Проверьте данные перед вводом</p>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        onClick={handleClickYet}
                    >
                        Попробовать еще раз
                    </Button>
                </>)
                : (null)}
        </main>)
    }

    if (onlyUnAuth && userName) {
        return <Navigate to={location.state?.from.pathname || '/'} replace />
    }

    if (!onlyUnAuth && !userName) {
        return <Navigate to="/login" state={{ from: location }} />;
    }


    return element
} 