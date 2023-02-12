import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import RegisterPage from '../../pages/register-page/register-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import AppHeader from '../app-header/App-header';

import styles from './App.module.css'


function App() {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AppHeader />
        <Routes>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/' element={<MainPage />} />
          <Route path= '/login' element = {<LoginPage/>}/>
          <Route path='/register' element = {<RegisterPage/>}/>
          <Route path='/forgot-password' element = {<ForgotPasswordPage/>}/>
          <Route path='/reset-password' element = {<ResetPasswordPage/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
