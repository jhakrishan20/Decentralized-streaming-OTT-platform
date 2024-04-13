import "./App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import ManageProfile from "./components/ManageProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn}></Navbar>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          ></Route>

          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          ></Route>

          <Route
            path="/profile"
            element={<ManageProfile/>}
          ></Route>

          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
