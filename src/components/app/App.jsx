import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import ProfilePage from '../../pages/profile-page/profile-page';

import styles from './App.module.css'


function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
