import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Reviews from './Pages/Reviews/Reviews';
import Signup from './Pages/Signup/Signup';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import AllUsers from './Pages/DashBoard/AllUsers';
import RequireAdmin from './Pages/DashBoard/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctor from './Pages/DashBoard/ManageDoctor';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard>
            </DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='doctor' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctors' element={
            <RequireAdmin>
              <ManageDoctor></ManageDoctor>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/reviews ' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/registration' ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
