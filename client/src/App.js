import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import AdminLogin from './pages/AdminLogin';

import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/AdminDashboard';
import AdminNewUser from './pages/AdminNewUser';
import UserNewPassword from './pages/UserNewPassword';
import UserErrorPage from './pages/UserErrorPage';
import UserLogin from './pages/UserLogin';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (

    <div className="App bg-slate-800 h-screen w-screen overflow-hidden relative flex items-center justify-center dark">
      <BrowserRouter>
        <Routes>
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminDashboard/>} />
          <Route path='/admin/adduser' element={<AdminNewUser/>} />
          <Route path='/user/setup' element={<UserNewPassword/>} />
          <Route path='/user/error' element={<UserErrorPage/>}/>
          <Route path='/user/login' element={<UserLogin/>}/>
          <Route path='/user/dashboard' element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}

export default App;
