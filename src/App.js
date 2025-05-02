import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginReg from './pages/auth/LoginReg';
import ResetPassword from './pages/auth/ResetPassword';
import ChangePassword from './pages/auth/ChangePassword';
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail';
import Profile from './components/dashboard/DashboardComponent/Profile';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Gallery from './components/gallery/Gallery';
import SideNavTandP from './components/TandPCell/SideNavTandP';
import Layout from './pages/Layout';
import { useSelector } from 'react-redux';
import TNPCell from './components/home/DepartmentWiseData/TNPCell';
import MeDepartment from './components/home/DepartmentWiseData/MeDepartment';
import EceDepartment from './components/home/DepartmentWiseData/EceDepartment';
import CseDepartment from './components/home/DepartmentWiseData/CSEDepartment/index';
import EeDepartment from './components/home/DepartmentWiseData/EeDepartment';
import CivilDepartment from './components/home/DepartmentWiseData/CivilDepartment/CivilDepartment';

function App() {
  const { access_token } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
            />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/account/reset/:id/:token" element={<ResetPassword />} />
            <Route
              path="/dashboard"
              element={access_token ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={access_token ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/tnpcell" element={<TNPCell />} />
            <Route path="/departments/cse" element={<CseDepartment />} />
            <Route path="/departments/me" element={<MeDepartment />} />
            <Route path="/departments/ece" element={<EceDepartment />} />
            <Route path="/departments/ee" element={<EeDepartment />} />
            <Route path="/departments/civil" element={<CivilDepartment />} />
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="tandpcell" element={<SideNavTandP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
