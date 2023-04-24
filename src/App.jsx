import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Offers from './pages/Offers'
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
// import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";
import Header from './components/Header';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />}></Route>
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={1000}
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

export default App