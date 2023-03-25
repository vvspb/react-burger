import { Routes, Route, useLocation } from 'react-router-dom';
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

import { useEffect } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { checkUserAuth } from '../../services/actions/auth-action';
import ModalDetailesIngredientPage from '../../pages/modal-detailes-ingredient-page/modal-detailes-ingredient-page';
import IngredientsPage from '../../pages/ingredients-page/ingredients-page';
import { fechIngredients } from '../../services/actions/burger-ingredients-list-action';
import FeedPage from '../../pages/feed-page/feed-page';
import ModalOrderCardDetailsPage from '../../pages/modal-order-card-details-page/modal-order-card-details-page';
import { connect } from '../../services/actions/ws-action';
import config from '../../utils/config';
import ModalPersonalOrderCardDetailsPage from '../../pages/modal-personal-order-card-details-page/modal-personal-order-card-details-page';
import OrderCardDetaisPage from '../../pages/order-card-details-page/order-card-detais-page';
import OrderCardDetaisPersonalPage from '../../pages/order-card-details-personal-page/order-card-details-personal-page';

function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  const background: Location = location.state && location.state.background

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(fechIngredients());
    dispatch(connect(`${config.wsUrl}/orders/all`));
  }, [dispatch])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route
          path='/profile'
          element={
            <ProtectedRoute element={<ProfilePage />} />
          } />

        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute element={<HistoryOrdersPage />} />
          }/>

        <Route
          path='/profile/orders/:id'
          element={<ProtectedRoute element={<OrderCardDetaisPersonalPage />} />
          } />

        <Route
          path='/'
          element={<MainPage />}/>
        <Route
          path='/feed'
          element={<FeedPage />}/>
        <Route
          path='/login'
          element={
            <ProtectedRoute element={<LoginPage />} onlyUnAuth={true} />
          }/>
        <Route
          path='/register'
          element={
            <ProtectedRoute element={<RegisterPage />} onlyUnAuth={true} />
          } />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute element={<ForgotPasswordPage />} onlyUnAuth={true} />
          } />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute element={<ResetPasswordPage />} onlyUnAuth={true} />
          } />
        <Route path='ingredients/:id' element={<IngredientsPage />} />
        <Route path='feed/:id' element={<OrderCardDetaisPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path='ingredients/:id' element={< ModalDetailesIngredientPage />}></Route>
          <Route path='feed/:id' element={< ModalOrderCardDetailsPage />}></Route>
          <Route
            path='profile/orders/:id'
            element={<ProtectedRoute element={<ModalPersonalOrderCardDetailsPage />} />
            } />
        </Routes>
      )}
    </div>
  );
}

export default App;
