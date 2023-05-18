import './App.css';
import React, { useState } from "react"
import Admin_Page from './component/admin/Admin_Page';
import Projects from './component/project/Projects';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Quick_task from './component/quicktask/Quick_task';
import Categories from './component/categories/categories';
import User from './component/users/user';
import Chats from './component/chats/chats';
import Setting from './component/Settings/setting';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './component/users/Menu';

function App() {
  // const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState(false);

  // Get user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const user = storedUser || null;

  const ProtectedRoute = ({ children }) => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Admin_Page />}>
          </Route>
          <Route
            path='/project'
            element={

              <Projects />

            }></Route>
          <Route
            path='/quicktask'
            element={
              <Quick_task />
            }></Route>
          <Route
            path='/categories'
            element={
              <Categories />
            }></Route>
          <Route
            path='/chats'
            element={
              <Chats />
            }></Route>
          <Route
            path='/user'
            element={
              <User />
            }></Route>
          <Route
            path='/Settings'
            element={
              <Setting />
            }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
