import { Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import RegisterPage from '../../pages/register-page/register-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import AppHeader from '../app-header/App-header';
import { ProtectedRoute } from '../protected-route/Protected-route';
import HistoryOrdersPage from '../../pages/history-order-page/history-order-page';

import styles from './App.module.css'
import OrderPage from '../../pages/order-page/order-page';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserAuth } from '../../services/actions/auth-action';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth());
  },[dispatch])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route
          path='/profile/*'
          element={
            <ProtectedRoute element={<ProfilePage />} />
          }
        >
          <Route
            path='orders'
            element={
              <ProtectedRoute element={<HistoryOrdersPage />} />
            }
          />
          <Route
            path='orders/:id'
            element={<ProtectedRoute element={<OrderPage />} />
            }
          />
        </Route>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/login'
          element={
            <ProtectedRoute element={<LoginPage />}  onlyUnAuth={true}/>
          }
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute element={<RegisterPage />}  onlyUnAuth={true}/>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute element={<ForgotPasswordPage />}  onlyUnAuth={true}/>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute element={<ResetPasswordPage />} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
