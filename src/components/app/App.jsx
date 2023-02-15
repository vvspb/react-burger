import { Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import RegisterPage from '../../pages/register-page/register-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import AppHeader from '../app-header/App-header';
import { ProtectedRoute } from '../protected-route/Protected-route';

import styles from './App.module.css'


function App() {

  return (
      <div className={styles.app}>
        <AppHeader />
        <Routes>
          <Route path='/profile' element={<ProtectedRoute element={<ProfilePage />} onlyAuth={true}/>} />
          <Route path='/' element={<MainPage />} />
          <Route path= '/login'  element={ <ProtectedRoute element = {<LoginPage/>} /> }/> 
          <Route path='/register' element = {<ProtectedRoute element = {<RegisterPage/>}/>}/>
          <Route path='/forgot-password' element = {<ProtectedRoute element = {<ForgotPasswordPage/>}/>}/>
          <Route path='/reset-password' element = {<ProtectedRoute element = {<ResetPasswordPage/>}/>}/>
        </Routes> 
      </div>
  );
}

export default App;
